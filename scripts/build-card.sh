#!/usr/bin/env bash
# Render a news article card to the 1200x630 PNG used as its thumbnail and og:image.
#
# Card sources live in assets/cards/<name>.html and are plain HTML sized to
# exactly 1200x630: four quadrants (title, venue, key points, figure) drawn in
# the four Polytechnique Montréal brand colours, white inside, with each quadrant
# painting its own half of the interior rules. Headless Chromium screenshots the
# page, so the type and any inline SVG stay sharp; a bitmap figure scaled into a
# quadrant will not.
#
# Usage:  ./scripts/build-card.sh                        # rebuild every card
#         ./scripts/build-card.sh elaasar2026-oml        # rebuild just this one
#
# Output: assets/img/publications/<name>-card.png
#
# The post frontmatter points at that path twice, as `thumbnail` and `og_image`,
# so rebuilding a card needs no other change.
#
# Note on snap Chromium: it is confined and silently refuses to write into /tmp
# or any dot-directory, so the screenshot is taken straight into the repo (which
# lives under $HOME). If you move the repo somewhere snap cannot see, the
# screenshot step will fail with "Failed to write file".
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SRC_DIR="$ROOT/assets/cards"
OUT_DIR="$ROOT/assets/img/publications"
WIDTH=1200
HEIGHT=630

CHROME=""
for candidate in chromium chromium-browser google-chrome google-chrome-stable; do
  if command -v "$candidate" >/dev/null 2>&1; then
    CHROME="$candidate"
    break
  fi
done
if [ -z "$CHROME" ]; then
  echo "!! No Chromium or Chrome on PATH; cannot render cards." >&2
  exit 1
fi

# A card is either flat colour and type or a single photograph, and both survive
# a 256-colour palette with no visible loss at roughly a third of the bytes,
# which matters because the PNG is served as the og:image. pngquant does the
# better job; ImageMagick is the fallback, since the size guard below already
# depends on it. With neither, the card is still written, just uncompressed.
QUANT=""
for candidate in pngquant convert; do
  if command -v "$candidate" >/dev/null 2>&1; then
    QUANT="$candidate"
    break
  fi
done
if [ -z "$QUANT" ]; then
  echo ".. No pngquant or ImageMagick on PATH; writing cards uncompressed." >&2
fi

compress_png() {
  local f="$1"
  local tmp="$1.opt"
  case "$QUANT" in
    pngquant)
      pngquant --force --skip-if-larger --strip --quality=70-95 --speed 1 --output "$tmp" -- "$f" 2>/dev/null ||
        {
          rm -f "$tmp"
          return 0
        }
      ;;
    convert)
      convert "$f" -strip -colors 256 -define png:compression-level=9 "$tmp" 2>/dev/null ||
        {
          rm -f "$tmp"
          return 0
        }
      ;;
    *) return 0 ;;
  esac
  # Keep the result only if it actually saved something.
  if [ -s "$tmp" ] && [ "$(stat -c%s "$tmp")" -lt "$(stat -c%s "$f")" ]; then
    mv "$tmp" "$f"
  else
    rm -f "$tmp"
  fi
}

if [ $# -gt 0 ]; then
  sources=()
  for name in "$@"; do
    sources+=("$SRC_DIR/${name%.html}.html")
  done
else
  # A leading underscore marks a source that is not a card of its own, such as
  # _template.html; rebuilding everything skips those.
  sources=()
  for src in "$SRC_DIR"/*.html; do
    case "$(basename "$src")" in
      _*) continue ;;
      *) sources+=("$src") ;;
    esac
  done
fi

for src in "${sources[@]}"; do
  if [ ! -f "$src" ]; then
    echo "!! No such card source: $src" >&2
    exit 1
  fi
  name="$(basename "$src" .html)"
  out="$OUT_DIR/$name-card.png"

  "$CHROME" --headless --disable-gpu --no-sandbox --hide-scrollbars \
    --force-device-scale-factor=1 \
    --window-size="$WIDTH,$HEIGHT" \
    --screenshot="$out" \
    "file://$src" >/dev/null 2>&1 || true

  if [ ! -f "$out" ]; then
    echo "!! Chromium wrote no file for $name (see the snap note above)." >&2
    exit 1
  fi

  compress_png "$out"

  # Guard the size: the news listing pins aspect-ratio 1200/630 and crops anything else.
  if command -v identify >/dev/null 2>&1; then
    got="$(identify -format '%wx%h' "$out")"
    if [ "$got" != "${WIDTH}x${HEIGHT}" ]; then
      echo "!! $name rendered at $got, expected ${WIDTH}x${HEIGHT}." >&2
      exit 1
    fi
  fi

  echo ">> ${out#$ROOT/}  ($(du -h "$out" | cut -f1))"
done
