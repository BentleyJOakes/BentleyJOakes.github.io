import { highlightSearchTerm } from "./highlight-search-term.js";

function initPublicationFilters() {
  const container = document.querySelector(".publications-filterable");
  if (!container) return;

  const input = document.getElementById("bibsearch");
  const buttons = Array.from(container.querySelectorAll(".pub-filter-btn"));
  const items = Array.from(container.querySelectorAll("ol.bibliography > li"));
  // textContent also includes collapsed abstracts and works for hidden entries.
  // Matching must not depend on whether the browser supports CSS highlights.
  // The raw BibTeX and the venue badge are left out: field names like
  // "booktitle" would match nearly every entry.
  const searchableText = (item) => {
    const clone = item.cloneNode(true);
    clone.querySelectorAll(".bibtex, .abbr").forEach((element) => element.remove());
    return clone.textContent.toLowerCase();
  };
  const entries = items.map((item) => ({
    item,
    text: searchableText(item),
    tags: (item.querySelector("[data-tags]")?.dataset.tags || "").split(",").map((tag) => tag.trim()),
  }));
  const notice = document.getElementById("pub-filter-notice");
  const clearButton = document.getElementById("pub-filter-clear");
  const empty = document.getElementById("pub-filter-empty");
  const urlTag = new URLSearchParams(window.location.search).get("tag");
  let activeTag = buttons.some((button) => button.dataset.tag === urlTag) ? urlTag : "all";
  let timeoutId;

  function applyFilters() {
    const query = input?.value.trim() || "";
    const searchTerm = query.toLowerCase();
    let visible = 0;

    entries.forEach(({ item, text, tags }) => {
      const show = (activeTag === "all" || tags.includes(activeTag)) && text.includes(searchTerm);
      item.classList.toggle("unloaded", !show);
      if (show) visible++;
    });

    container.querySelectorAll("h2.bibliography").forEach((heading) => {
      let sibling = heading.nextElementSibling;
      let hasVisible = false;
      while (sibling && sibling.tagName !== "H2") {
        if (sibling.matches("ol.bibliography")) {
          const show = Array.from(sibling.children).some((item) => !item.classList.contains("unloaded"));
          sibling.classList.toggle("unloaded", !show);
          hasVisible ||= show;
        }
        sibling = sibling.nextElementSibling;
      }
      heading.classList.toggle("unloaded", !hasVisible);
    });

    buttons.forEach((button) => button.classList.toggle("active", button.dataset.tag === activeTag));
    const filtered = activeTag !== "all" || query !== "";
    notice.textContent = filtered ? `${visible} of ${items.length} publications` : `${items.length} publications`;
    // Reserve the button's space so clearing does not shift the toolbar.
    clearButton.style.visibility = filtered ? "visible" : "hidden";
    clearButton.disabled = !filtered;
    empty.style.display = visible === 0 ? "" : "none";

    if (window.CSS?.highlights) {
      highlightSearchTerm({ search: searchTerm, selector: ".publications-filterable ol.bibliography > li" });
    }
  }

  function hashTarget() {
    try {
      return decodeURIComponent(window.location.hash.slice(1));
    } catch {
      return "";
    }
  }

  function applyHash() {
    clearTimeout(timeoutId);
    const hash = hashTarget();
    const target = hash && document.getElementById(hash);
    if (target && container.contains(target)) {
      const entry = entries.find(({ item }) => item.contains(target));
      // A direct paper link takes precedence over filters that conceal it.
      if (entry) {
        if (input) input.value = "";
        if (activeTag !== "all" && !entry.tags.includes(activeTag)) activeTag = "all";
      }
    } else if (hash && !target && input) {
      // Preserve older links that use a search phrase as the fragment.
      input.value = hash;
    }
    applyFilters();
  }

  function scrollToPaper() {
    const target = document.getElementById(hashTarget());
    if (!target || !entries.some(({ item }) => item.contains(target))) return;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        container.querySelectorAll(".pub-anchor-highlight").forEach((element) => element.classList.remove("pub-anchor-highlight"));
        target.scrollIntoView({ block: "center" });
        target.classList.add("pub-anchor-highlight");
      });
    });
  }

  clearButton.addEventListener("click", () => {
    const scrollPosition = { top: window.scrollY, left: window.scrollX, behavior: "instant" };
    clearTimeout(timeoutId);
    if (input) input.value = "";
    activeTag = "all";
    // Remove filter state from deep links without navigating or moving the page.
    const url = new URL(window.location.href);
    url.searchParams.delete("tag");
    if (url.hash && !document.getElementById(hashTarget())) url.hash = "";
    window.history.replaceState(window.history.state, "", url);
    input?.focus({ preventScroll: true });
    applyFilters();
    // Restoring results can trigger browser scroll anchoring, especially on mobile.
    window.scrollTo(scrollPosition);
    requestAnimationFrame(() => window.scrollTo(scrollPosition));
  });

  input?.addEventListener("input", () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(applyFilters, 300);
  });
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      clearTimeout(timeoutId);
      activeTag = button.dataset.tag;
      applyFilters();
    });
  });
  window.addEventListener("hashchange", () => {
    applyHash();
    scrollToPaper();
  });
  applyHash();
  if (document.readyState === "complete") scrollToPaper();
  else window.addEventListener("load", scrollToPaper, { once: true });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPublicationFilters, { once: true });
} else {
  initPublicationFilters();
}
