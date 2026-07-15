---
layout: about
title: About
permalink: /
description: "Assistant Professor at Polytechnique Montréal researching Digital Twin engineering, model-driven engineering, and cyber-physical systems."
keywords: "digital twins, model-driven engineering, cyber-physical systems, Polytechnique Montréal, assistant professor"
og_image: https://bentleyoakes.com/assets/img/BentleyOakes-headshot.jpg
subtitle: >
  <em>I research and build tools and methods to assist engineers in transforming their expertise into Digital Twins for complex cyber-physical systems.</em>

profile:
  align: right
  image: BentleyOakes-headshot.jpg
  image_alt: "Dr. Bentley Oakes, Assistant Professor at Polytechnique Montréal"
  image_circular: false
  more_info: >
    <div style="display:flex;gap:0.4em;align-items:flex-start">
      <i class="fas fa-location-dot fa-fw" style="padding-top:2px;flex-shrink:0"></i>
      <div>
        <div>Office M-4107, Pavillons Lassonde</div>
        <div>Polytechnique Montréal</div>
        <div>2700 Chemin de la Tour</div>
        <div>Montréal, QC, Canada H3T 1J4</div>
      </div>
    </div>
    <div style="margin-top:0.4rem">
      <a href="mailto:bentley.oakes@polymtl.ca">
        <i class="fas fa-envelope fa-fw"></i> bentley.oakes@polymtl.ca
      </a>
    </div>

selected_papers: true
social: true

announcements:
  enabled: true
  scrollable: true
  limit: 5

latest_posts:
  enabled: false
  scrollable: true
  limit: 3
---

<div class="callout" style="--accent-color: #00BDF2;" markdown="1">
I am an Assistant Professor in the [Department of Computer and Software Engineering (GIGL)](https://www.polymtl.ca/gigl/) at Polytechnique Montréal, Canada, where I lead the OAKES Lab. I completed my Master's and PhD at McGill University, before becoming a post-doctoral researcher at both the University of Antwerp and the Université de Montréal. I am a researcher in the [artificial intelligence consortium IVADO](https://ivado.ca/en/), and Polytechnique Montréal is affiliated with the [Université de Montréal](https://www.umontreal.ca/) and the [Quebec Artificial Intelligence Institute (Mila)](https://mila.quebec/en).

My research focuses on tools and methods that help domain experts model, construct, and reason about complex systems, with a particular emphasis on Digital Twin engineering. Recent recognized work includes contributions on ontological service-driven engineering of Digital Twins and systematic reporting frameworks.
</div>

## Research interests

I enjoy working across a variety of research fields, in collaboration with academic and industrial partners:

<div class="callout" style="--accent-color: #25B34B;" markdown="1">
- [digital twins](/digital-twin-engineering-course/), including their structure, [construction](/publications/#Oakes2024ServiceDriven), and [reporting](/publications/#Gil2024towardssystematicreporting)
- representations of domain-specific knowledge, such as [ontologies and ontological reasoning](/publications/#Elaasar2023opencaesar)
- verification and validation of cyber-physical systems, including [formal verification](/publications/#Bernaerts2019)
- the application of [machine learning to cyber-physical systems](/publications/#Moradi2020)
- model-driven engineering techniques
- [model transformations and their verification](/publications/#Oakes2018)
- and others, as listed on my [expertise page](https://www.polymtl.ca/expertises/en/oakes-bentley)

See my [research page](/research/) for more detail on each area, and [Join Us](/join/) for open positions in these areas.
</div>

Across 40+ peer-reviewed papers, my research appears in flagship venues in two communities: in model-driven engineering, including {% assign mde_venues = "MODELS,SoSyM" | split: "," %}{% for v in mde_venues %}{% assign venue = site.data.venues[v] %}{% unless forloop.first %}{% if forloop.last %}, and {% else %}, {% endif %}{% endunless %}[{{ v }}]({{ venue.url }} "{{ venue.name }}"){% endfor %}; and in software engineering, including {% assign se_venues = "TOSEM,FSE,ASE,MSR,ICPC" | split: "," %}{% for v in se_venues %}{% assign venue = site.data.venues[v] %}{% unless forloop.first %}{% if forloop.last %}, and {% else %}, {% endif %}{% endunless %}[{{ v }}]({{ venue.url }} "{{ venue.name }}"){% endfor %}.

<p class="funding-caption">Our research is generously supported by:</p>

<div class="funding-logos">
  <a href="https://www.nserc-crsng.gc.ca/" target="_blank" rel="noopener" title="Natural Sciences and Engineering Research Council of Canada (NSERC)">
    <img src="{{ '/assets/img/funding/nserc-symbol.svg' | relative_url }}" width="115" height="55" alt="Natural Sciences and Engineering Research Council of Canada (NSERC / CRSNG) logo" />
  </a>
  <a href="https://www.mitacs.ca/" target="_blank" rel="noopener" title="Mitacs">
    <img src="{{ '/assets/img/funding/mitacs.png' | relative_url }}" width="500" height="84" alt="Mitacs logo" />
  </a>
</div>

## Service and teaching

I enjoy my time as reviewer and program committee member for software engineering journals, conferences, and workshops, and have been recognized for these contributions with multiple best reviewer awards.

<div class="callout" style="--accent-color: #F15A22;" markdown="1">
I am the lead organizer for the [Software Engineering at Montreal (SEMTL)](https://semtl.github.io/) meetings, a regular seminar series for software engineering researchers in Montreal.
</div>

<div class="callout" style="--accent-color: #ED1C24;" markdown="1">
{% include dte_course_blurb.liquid %}
</div>


## Academic background
Previously, I was a post-doctoral researcher at the [GEODES lab](https://geodes.iro.umontreal.ca) in the [Department of Computer Science and Operations Research](https://diro.umontreal.ca/english/home/) of the University of Montréal for two years. My research topic was on the modelling of [domain-specific machine learning workflows](https://doi.org/10.1145/3638243).

Before that, I was a post-doctoral researcher at the University of Antwerp in Belgium for three years. I worked on a variety of topics along with industrial partners as part of the [Flanders Make](https://www.flandersmake.be) strategic research centre, including verification of cyber-physical systems, configuring of co-simulations, and developing conceptual frameworks for digital twins.

I received my PhD at McGill University in 2019 on the topic of [model transformation verification](/assets/publications/Oakes2018%20-%20A%20Symbolic%20Execution-Based%20Approach%20To%20Model%20Transformation%20Verification%20using%20Structural%20Contracts.pdf). During this period, I was an instructor for the Introduction to Programming course at McGill for three terms. I also was a visiting researcher at the [General Motors Technical Center](https://www.gm.com/company/facilities/warren-tech-center) in Michigan, USA and the [fortiss research institute](https://www.fortiss.org/) in Munich, Germany.

During my bachelor's degree at the University of Manitoba, I held three internships as part of the co-operative program. The first internship was at [BlackBerry](https://www.blackberry.com) (formerly Research in Motion) in Waterloo, ON. The topic of this internship was on cryptographic communication protocols. The second and third internships were at [Electronic Arts](https://www.ea.com) in Montréal, QC. These internships focused on prototyping artificial intelligence solutions in video games.

