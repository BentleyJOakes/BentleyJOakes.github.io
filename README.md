# bentleyjoakes.github.io

Personal academic website for Dr. Bentley Oakes (Assistant Professor, Polytechnique Montréal) built on the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme.

## Tech Stack

- **Jekyll** static site generator with **al-folio** theme (Bootstrap/MDB, Font Awesome, Academicons)
- **jekyll-scholar** — BibTeX bibliography with APA style
- **jekyll-paginate-v2** — blog pagination
- **Docker** — local development via `amirpourmand/al-folio:v0.16.3`

## Local Development

```bash
docker compose pull && docker compose up
# Site runs at http://localhost:8080, LiveReload on 35729
```

## Key Files

| What | Where |
|------|-------|
| Site config | `_config.yml` |
| About/home page | `_pages/about.md` |
| Publications (BibTeX) | `_bibliography/papers.bib` |
| CV data | `_data/cv.yml` |
| Social links | `_data/socials.yml` |
| Navigation order | Frontmatter `nav_order` in each `_pages/*.md` |
| Blog posts | `_posts/` (currently empty) |
| Projects | `_projects/` (currently empty) |
| Books | `_books/` (currently empty) |
| Teachings | `_teachings/` (currently empty) |
| News items | `_news/` (30 items, 2023–2026) |
| CV page | `_pages/cv.md` (renders `_data/cv.yml` via rendercv format) |
| Lab page | `_pages/lab.md` |
| Teaching page | `_pages/teaching.md` |
| Community service | `_pages/community-building.md` |
| Contact page | `_pages/contact.md` |
| DTE course | `_pages/dte_course.md` |

## Site Structure

### Navigation (nav_order in frontmatter)
1. Publications (`_pages/publications.md`)
2. Community-Building (`_pages/community-building.md`)
3. Teaching (`_pages/teaching.md`)
4. Lab (`_pages/lab.md`)
5. Contact (`_pages/contact.md`)
6. CV (`_pages/cv.md`) — hidden from nav (`nav: false`)

### Collections (defined in `_config.yml`)
- `_news/` — announcements, layout: post, `inline: true` in frontmatter
- `_projects/` — project cards (empty)
- `_books/` — book collection (empty)
- `_teachings/` — teaching entries (empty)

### Layouts (`_layouts/`)
| Layout | Used for |
|--------|---------|
| `about.liquid` | Home page |
| `default.liquid` | Base wrapper |
| `page.liquid` | General pages |
| `post.liquid` | Blog posts & news |
| `cv.liquid` | CV page |
| `bib.liquid` | Publication entries |
| `profiles.liquid` | Lab members |
| `course.liquid` | Course pages |
| `book-shelf.liquid` | Books page |
| `archive.liquid` | Archive/collection pages |
| `book-review.liquid` | Book review articles |
| `distill.liquid` | Distill.pub-format articles |
| `none.liquid` | Minimal/no-chrome rendering |

### Data Files (`_data/`)
| File | Status | Content |
|------|--------|---------|
| `cv.yml` | Populated | CV structured data (name, headline, sections) |
| `socials.yml` | Populated | CV PDF, email, Scholar, LinkedIn, ORCID, ResearchGate |
| `coauthors.yml` | Template | Co-author profile format (no entries) |
| `repositories.yml` | Template | GitHub repos config (commented out) |
| `venues.yml` | Populated | Conference/journal abbreviations with colors (MODELS, SoSyM, TOSEM, etc.) |
| `citations.yml` | Empty | Citation tracking (empty papers array) |

## Content Notes

- **Publications:** 40+ BibTeX entries in `_bibliography/papers.bib`. Each entry can have custom fields: `abbr`, `bibtex_show`, `pdf`, `slides`, `poster`, `video`, `award`.
- **News:** Add new `.md` files to `_news/` with frontmatter: `layout: post`, `date: YYYY-MM-DD`, `inline: true`, and content as the announcement text.
- **Blog/Projects/Books/Teachings:** Sections are wired up and ready — just add files to the respective directories.
- **Lab members:** Managed via `_pages/lab.md` directly (not using the profiles collection currently).

## Pre-Commit

```bash
npx prettier . --write
docker compose up --build
```
