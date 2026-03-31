---
layout: page
permalink: /lab/
title: Oakes Lab
description: >
  The Oakes Lab at Polytechnique Montréal researches knowledge engineering for complex cyber-physical systems and digital twins.
nav: false
---

<div style="display: grid; grid-template-columns: 140px 1fr; grid-template-rows: auto auto; gap: 0.75em 1.5em; margin-bottom: 1.5rem;">
  <img alt="Oakes Lab logo" src="/assets/img/logo_colours_new.png" style="width: 140px; grid-row: 1; grid-column: 1;" />
  <div style="grid-row: 1; grid-column: 2; align-self: center;">
    <p style="font-size: 0.85em; font-style: italic; margin-bottom: 0.5rem;"><b>O</b>bjective: <b>A</b>ccelerating <b>K</b>nowledge <b>E</b>ngineering for Complex <b>S</b>ystems</p>
    <p style="margin-bottom: 0;">We start with the expert's domain knowledge, capture it in models, and then utilize it to better construct, optimize, verify, and validate complex systems.</p>
  </div>
  <div class="pub-filter-bar" style="grid-row: 2; grid-column: 1 / -1; margin-top: 0;">
    {% for tag in site.data.pub_tags limit: 4 %}
    <a href="/publications/?tag={{ tag.id }}#all-publications" class="pub-filter-btn" style="--card-color: {{ tag.color }}; text-decoration: none; border-left: 3px solid {{ tag.color }};">
      <span class="filter-label">{{ tag.label }}</span>
      <span class="filter-desc">{{ tag.description }}</span>
    </a>
    {% endfor %}
  </div>
</div>

## Lab Members

<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; text-align: center;">
  <div>
    <img src="/assets/img/students/kfiter_small.png" alt="kerian_fiter" style="width:150px; height:150px; object-fit:cover; border-radius:50%;"><br>
    <a href="https://kerianfiter.github.io/"><b>Kérian Fiter</b></a><br>
    PhD Student · Since 2024<br>
    <i>Systematic DT reporting &amp; visualization</i><br>
    <a href="/assets/publications/Fiter2025 - DTInsight A Tool for Explicit, Interactive, and Continuous Digital Twin Reporting.pdf">DTInsight paper</a>
  </div>
  <div>
    <img src="/assets/img/students/adil.png" alt="adil_lagrou" style="width:150px; height:150px; object-fit:cover; border-radius:50%;"><br>
    <a href="https://www.linkedin.com/in/adil-lagrou/"><b>Adil Lagrou</b></a><br>
    PhD Student · Since 2026<br>
    <i>DT interoperability</i>
  </div>
  <div>
    <img src="/assets/img/students/carlos_small.jpeg" alt="carlos_pambo" style="width:150px; height:150px; object-fit:cover; border-radius:50%;"><br>
    <a href="https://www.linkedin.com/in/carlos-pambo/"><b>Carlos Pambo</b></a><br>
    PhD Student · Since 2024<br>
    <i>Recommendations and patterns for accelerated DT construction</i>
  </div>
</div>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; text-align: center; margin-top: 20px;">
  <div>
    <img src="/assets/img/students/gabrielle.jpeg" alt="gabrielle_gallant" style="width:150px; height:150px; object-fit:cover; border-radius:50%;"><br>
    <a href="https://www.linkedin.com/in/gabrielle-gallant-cpi-b-ing-bba6751a9/"><b>Gabrielle Gallant</b></a><br>
    Master's Student · Since 2025<br>
    <i>Live model updating in DTs</i><br>
    Co-supervised with <a href="https://www.polymtl.ca/expertises/en/tuysuz-oguzhan">Oguzhan Tuysuz</a>
  </div>
  <div>
    <img src="/assets/img/students/angelica_small.JPEG" alt="angelica_portocarrero" style="width:150px; height:150px; object-fit:cover; border-radius:50%;"><br>
    <a href="https://www.linkedin.com/in/angelica-portocarrero/"><b>Angelica Portocarrero</b></a><br>
    Master's Student · Since 2026<br>
    Previously MITACS Globalink Intern — 2025<br>
    <i>LLMs for DT engineering</i>
  </div>
</div>

<div style="border-left: 4px solid rgb(0, 142, 62); padding: 0.4em 1em; margin-bottom: 1.25em;">
  Interested in <strong>joining the lab</strong>? See the <a href="/join/">Join Us</a> page for open opportunities and how to contact me.
</div>

<div style="margin-top: 2.5rem;"></div>

### Alumni Students/Interns

| **Name** | **Role** | **Years** | **Topic** |
| -------- | -------- | --------- | --------- |
| *[Mikkel Schmidt Andersen](https://scholar.google.com/citations?user=egH56LUAAAAJ)* | Research intern | 2025 | Probabilistic DT update scheduling |
| *[Louis Malassigne-Onfroy](https://www.linkedin.com/in/louismalaonfr/)* | Research assistant | 2024 | Visualization of DT architectures — [DTInsight paper](/assets/publications/Fiter2025 - DTInsight A Tool for Explicit, Interactive, and Continuous Digital Twin Reporting.pdf) |
| *[Amélie Bosphore](https://www.linkedin.com/in/am%C3%A9lie-bosphore-1a5997227/)* | Research assistant | 2024 | Implementation of modelled machine learning pipelines |
| *[Justin Caisse](https://www.linkedin.com/in/justin-caisse/)* | Research assistant | 2023–2024 | Ontological modelling of machine learning pipelines |

<div style="margin-top: 2.5rem;"></div>

## Resources

#### At Polytechnique
- [New graduate student journey](https://www.polymtl.ca/gopoly/en/new-student-journey/new-student-journey-graduate-studies)
- [Requirements for the PhD degree](https://www.polymtl.ca/programmes/programmes/doctorat-en-genie-informatique)
- Polytechnique Montréal's Student Services (SEP): [english](https://etudiant.polymtl.ca/sep/en/) / [french](https://etudiant.polymtl.ca/sep/)
- [Polytechnique student bourses/grants](https://www.polymtl.ca/aide-financiere/bourses/recherche)

#### Interesting reading and advice
- [Behind the scenes: the struggle for each paper](https://jeffhuang.com/struggle_for_each_paper/)
- The largest problem in academia is discoverability: [Be Findable](https://registerspill.thorstenball.com/p/be-findable)
- How to write a thesis: [Thesis Projects - A Guide for Students in Computer Science and Information Systems](https://link.springer.com/book/10.1007/978-1-84800-009-4)
- Fantastic advice on writing: [Writing for Computer Science](https://link.springer.com/book/10.1007/978-1-4471-6639-9)
