---
layout: page
permalink: /publications/
title: Publications
description: >
  Peer-reviewed publications by Dr. Bentley Oakes on digital twins, model-driven engineering,
  model transformations, co-simulation, and cyber-physical systems verification.
keywords: digital twins, model-driven engineering, model transformations, co-simulation, cyber-physical systems, publications, Polytechnique Montréal
nav: true
nav_order: 1
---

<!-- _pages/publications.md -->

<div style="display: flex; flex-wrap: wrap; gap: 1em 2em; margin-bottom: 1.5em; align-items: center; justify-content: center;">
  <a href="https://dblp.org/pid/147/8495.html" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; gap: 0.4em; text-decoration: none; font-size: 1em;">
    <i class="ai ai-dblp ai-lg" style="color: #002f6c;"></i> DBLP
  </a>
  <a href="https://scholar.google.ca/citations?user=x9H9H4QAAAAJ" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; gap: 0.4em; text-decoration: none; font-size: 1em;">
    <i class="ai ai-google-scholar ai-lg" style="color: #4285F4;"></i> Google Scholar
  </a>
  <a href="https://www.researchgate.net/profile/Bentley-Oakes" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; gap: 0.4em; text-decoration: none; font-size: 1em;">
    <i class="ai ai-researchgate ai-lg" style="color: #00CCBB;"></i> ResearchGate
  </a>
  <a href="https://orcid.org/0000-0001-7558-1434" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; gap: 0.4em; text-decoration: none; font-size: 1em;">
    <i class="ai ai-orcid ai-lg" style="color: #A6CE39;"></i> ORCID
  </a>
</div>

## Selected Publications

{% include selected_papers.liquid %}

---

## All Publications {#all-publications}

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications publications-filterable">

{% include pub_filter.liquid %}

{% bibliography %}

</div>

<script>
  window.addEventListener('load', function () {
    if (window.location.hash) {
      const matches = document.querySelectorAll(window.location.hash);
      const el = Array.from(matches).find(e => !e.closest('.publications-selected')) || matches[0];
      if (el) el.scrollIntoView();
    }
  });
</script>
