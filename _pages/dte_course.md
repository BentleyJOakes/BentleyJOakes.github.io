---
layout: page
permalink: /dte_course/
title: LOG6310E - Digital Twin Engineering
description: "LOG6310E is a graduate course at Polytechnique Montréal on engineering Digital Twins, covering architecture, co-simulation, visualization, and formal verification."
keywords: "digital twin course, LOG6310E, Polytechnique Montréal, co-simulation, formal verification, digital twin engineering"
og_image: https://bentleyoakes.com/assets/img/new_incubator_dt.png
nav: false
---

## What is a Digital Twin?

A Digital Twin is a **dynamic virtual representation of a complex system**, connected and synchronized to the real system, for supporting its design and operation through insights and actions. In practice, the Digital Twin paradigm brings together modelling and simulation, visualization, real-time data and control, and an ever-expanding set of intelligent services across multiple engineering domains.

In this course, we examine a DT interacting with our running example of an incubator (a heater in a box). The figure below shows the [constellation diagram](https://doi.org/10.1177/00375497241261406), with the incubator on the left, the constellation of DT components on the right, and the feedback loop between them. The DT provides *insights* such as a visualization of the incubator state and warnings when anomalies are detected, and *actions* such as setting the desired temperature and system parameters.

<figure style="text-align: center; margin: 1rem 0;">
<img alt="Incubator Digital Twin constellation diagram" src="/assets/img/new_incubator_dt.png" style="width:100%;" />
</figure>

## How do I build a Digital Twin?

Building a Digital Twin starts with defining the physical system and the insights or actions you want from it. You then construct models of the system's behaviour, connect them to real-time data from sensors and actuators, and implement services (such as visualization, monitoring, or optimization) within a service-oriented software architecture. The result is a dynamic virtual representation that stays connected and synchronized to the physical system, supporting its design and operation over time.

### The Course

<div style="border-left: 4px solid #00BDF2; padding: 0.5em 1em; margin: 1rem 0;" markdown="1">
The [Digital Twin Engineering course (LOG6310E) at Polytechnique Montréal](https://www.polymtl.ca/programmes/cours/digital-twin-engineering-0) guides students through these stages of building a DT. Students learn through hands-on labs, real-world case studies, and team projects, building a working Digital Twin from the ground up. The course is offered every Winter term by [Dr. Bentley Oakes](https://www.polymtl.ca/expertises/en/oakes-bentley) (Department of Computer and Software Engineering), in English.

Each week features interactive lectures with real-world DT examples and discussions. Every second week, participants complete one of six [hands-on lab sessions](https://github.com/BentleyJOakes/IncubatorDTCourse) (small assignments to build familiarity with DT technologies and services). In team-based projects, participants apply their learning to develop their own DT with DT services ranging from machine learning, formal verification, to game-engine visualization. A final exam consolidates the theoretical concepts.
</div>

Parts of this course are based on the textbook [The Engineering of Digital Twins](https://link.springer.com/book/10.1007/978-3-031-66719-0) by John Fitzgerald, Cláudio Gomes, and Peter Gorm Larsen. Some slides and materials are from the [corresponding course](https://kursuskatalog.au.dk/en/course/138051/Engineering-Digital-Twins) at Aarhus University, Denmark.

<div style="border-left: 4px solid #25B34B; padding: 0.5em 1em; margin: 1rem 0;" markdown="1">
By the end of this course, participants will be able to define, design, build, and deploy a working Digital Twin, applying systems engineering theory directly to a complex system of their own choosing:
- Define what a Digital Twin (DT) is and their role in different domains
- Explain the processes of engineering DTs, their architecture, and components
- Understand the relation between the DT and the real system, including communication, sensing, and possible insights/actions
- Discuss DT services such as visualization and optimization, and their advantages
- Develop and deploy a DT service on a DT platform and/or build a custom DT
</div>

Past student projects have spanned many domains as shown below.

## Course Projects

The following are the course projects from the Winter 2025 edition of the class. One project was developed into a published scientific article at EDTconf, demonstrating the high quality of work produced by students.

<div class="row mb-4 align-items-start">
<div class="col-md-6">
<strong>Beer Fermentation DT</strong>
<p>Monitors and controls a beer fermentation process using Arduino sensors, a sampling chamber, and an electronic hydrometer. DT services include safety monitoring, closed-loop control, analysis, and Unity 3D visualization.</p>
<div style="border-left: 4px solid #F5A623; padding: 0.4em 1em; margin: 0.5rem 0;">
<strong>Published at EDTconf:</strong> <a href="/assets/publications/Goffi2025 - Engineering a Digital Twin for the Monitoring and Control of Beer Fermentation Sampling.pdf">Engineering a Digital Twin for the Monitoring and Control of Beer Fermentation Sampling</a>
</div>
<p><a href="https://drive.google.com/file/d/1nsA2t1DazQHxC8PHLst3X4VSaUu2PjEd/view?usp=sharing"><i class="fas fa-chalkboard"></i> Presentation</a> &nbsp;&nbsp; <a href="https://drive.google.com/file/d/1fN6vga63s1owDOk0K24ENrIBFdE-g-OZ/view?usp=sharing"><i class="fas fa-file-alt"></i> Report</a></p>
</div>
<div class="col-md-6">
<div class="ratio ratio-16x9">
<iframe src="https://www.youtube.com/embed/-EGl8y5Qlus?si=5H5r-fF26d1te-tz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>
</div>

<div class="row mb-4 align-items-start">
<div class="col-md-6">
<strong>Robotics DT</strong>
<p>A digital twin of a robotic arm with services for physics simulation, singularity detection, 3D visualization, deviation monitoring, and emergency stop, enabling safe real-time operation and anomaly detection.</p>
<p><a href="https://docs.google.com/presentation/d/1sQNAqGFcO64Qu18FmAuG-wpHG5EGpTuO/edit?usp=sharing&ouid=100435680662249649799&rtpof=true&sd=true"><i class="fas fa-chalkboard"></i> Presentation</a> &nbsp;&nbsp; <a href="https://drive.google.com/file/d/12d2txx8teChBn1qx9Rnln-9XQzmAAjyc/view?usp=sharing"><i class="fas fa-file-alt"></i> Report</a></p>
</div>
<div class="col-md-6">
<div class="ratio ratio-16x9">
<iframe src="https://www.youtube.com/embed/xF0SzGU1vgw?si=GGpn9RwaaK5SJIT-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>
</div>

<div class="row mb-4 align-items-start">
<div class="col-md-6">
<strong>Waste Twin: Smart Waste Collection DT</strong>
<p>A digital twin of a smart waste collection system-of-systems, modelling a city with truck fleets, adaptive traffic lights, and disturbance scenarios. Supports bidirectional feedback and adaptive behaviour.</p>
<p><a href="https://docs.google.com/presentation/d/1Cutvw6E-3BpHdPUUDMXhKgbPoDNaL5y-/edit?usp=sharing&ouid=100435680662249649799&rtpof=true&sd=true"><i class="fas fa-chalkboard"></i> Presentation</a> &nbsp;&nbsp; <a href="https://drive.google.com/file/d/1JrIK3UyJZ9G4b2vmjlf-YA_K1cyCHmk_/view?usp=sharing"><i class="fas fa-file-alt"></i> Report</a></p>
<p><i class="fas fa-video"></i> <a href="https://youtu.be/sqTI49OAOeY">Overview</a> &nbsp; <a href="https://youtu.be/uh0O6K9vKeg">Truck-stopping</a> &nbsp; <a href="https://youtu.be/5cdrYAZirWU">Smart traffic lights</a> &nbsp; <a href="https://youtu.be/EpAbdp7IuwM">City disturbance</a></p>
</div>
<div class="col-md-6">
<div class="ratio ratio-16x9">
<iframe src="https://www.youtube.com/embed/sqTI49OAOeY?si=MNbTGbVuzWuuGMT6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>
</div>



<div class="row mb-4 align-items-start">
<div class="col-md-6">
<strong>STM Bus Fleet DT</strong>
<p>Monitors the Société de Transport de Montréal (STM) bus fleet in real-time using live GPS data, with a 3D route visualization, telemetry validation service, and notification service for anomalies.</p>
<p><a href="https://drive.google.com/file/d/18c4WblJxL1lYbwn9XH1B3iolCi6BvoDA/view?usp=sharing"><i class="fas fa-chalkboard"></i> Presentation</a> &nbsp;&nbsp; <a href="https://drive.google.com/file/d/1m4yrmTdxiap-9h4gcycctqyRI6U2-ufC/view?usp=sharing"><i class="fas fa-file-alt"></i> Report</a></p>
</div>
<div class="col-md-6">
<div class="ratio ratio-16x9">
<iframe src="https://www.youtube.com/embed/ezhNTBHXkss?si=eRGGNmkgjw3Af1nQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>
</div>

<div class="row mb-4 align-items-start">
<div class="col-md-6">
<strong>Permafrost DT</strong>
<p>Models permafrost freeze/thaw dynamics using finite element methods (two-phase Stefan problem), with real sensor data, a monitoring service, and 3D visualization of subsurface temperature evolution.</p>
<p><a href="https://drive.google.com/file/d/1dLBnUXRYC3GCTc4LHgJFNmJjrR3ayYyk/view?usp=sharing"><i class="fas fa-chalkboard"></i> Presentation</a> &nbsp;&nbsp; <a href="https://drive.google.com/file/d/1uGvCLKiKExcBl61ufslmRi1YiAEkjGiN/view?usp=sharing"><i class="fas fa-file-alt"></i> Report</a></p>
</div>
<div class="col-md-6">
<div class="ratio ratio-16x9">
<iframe src="https://www.youtube.com/embed/y9hKJqjnLsc?si=BFYt3feCrW1AHVIe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>
</div>

<div class="row mb-4 align-items-start">
<div class="col-md-6">
<strong>Graph Database Failure Propagation DT</strong>
<p>Explores graph databases (Neo4j and TachosDB) for modelling and querying failure propagation in DT systems, with a RabbitMQ communication layer and Godot 3D visualization of building failures.</p>
<p><a href="https://drive.google.com/file/d/1OU8EqiBH-rnJmaYutY-wqzztyxDTE54N/view?usp=sharing"><i class="fas fa-chalkboard"></i> Presentation</a> &nbsp;&nbsp; <a href="https://drive.google.com/file/d/1lmimLGwZXmsT7bkiKocyn6gwinSDpwzc/view?usp=sharing"><i class="fas fa-file-alt"></i> Report</a></p>
</div>
<div class="col-md-6">
<div class="ratio ratio-16x9">
<iframe src="https://www.youtube.com/embed/9pK6ZKWzszM?si=XI7TcGlE6nsaMDEM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>
</div>

## Course Schedule

<div style="border-left: 4px solid #F15A22; padding: 0.5em 1em; margin: 1rem 0;">
<table>
<thead><tr><th style="text-align:center;">Lecture</th><th>Topic</th></tr></thead>
<tbody>
<tr><td style="text-align:center;">1</td><td>Introduction to Digital Twins</td></tr>
<tr><td style="text-align:center;">2</td><td>DT engineering and the Incubator case study</td></tr>
<tr><td style="text-align:center;">3</td><td>Modelling and simulation intro</td></tr>
<tr><td style="text-align:center;">4</td><td>Modelling control and physics</td></tr>
<tr><td style="text-align:center;">5</td><td>DT/Physical Twin communication</td></tr>
<tr><td style="text-align:center;">6</td><td>Visualization</td></tr>
<tr><td style="text-align:center;">7</td><td>DT intelligence</td></tr>
<tr><td style="text-align:center;">8</td><td><a href="https://journals.sagepub.com/doi/full/10.1177/00375497241261406">Systematic DT reporting</a></td></tr>
<tr><td style="text-align:center;">9</td><td>Formal verification</td></tr>
<tr><td style="text-align:center;">10</td><td>Realizing DTs</td></tr>
<tr><td style="text-align:center;">11</td><td>Student presentations</td></tr>
<tr><td style="text-align:center;">12</td><td>Course review</td></tr>
</tbody>
</table>
</div>

## Guest Lecturers

| Year | Name | Institution | Talk |
|:----:|------|-------------|------|
| 2026 | [Christophe Danjou](https://www.polymtl.ca/expertises/en/danjou-christophe) | Polytechnique Montréal | Industry 4.0 |
| 2026 | [Istvan David](https://istvandavid.com/) | McMaster University | [Architecting Digital Twins on Standardized Architectures](https://istvandavid.com/news/sticky/2026/03/14/i-reap-what-iso-guest-lecture-at-polytechnique-montreal-on-architecting-digital-twins-on-standardized-architectures/) |
| 2026 | [Pascal Archambault](https://pascalarchambault.ca/) | Université de Montréal | Digital Twin of a Natural Process |
| 2026 | [Prasad Talasila](https://pure.au.dk/portal/en/persons/prasad.talasila@ece.au.dk/) | Aarhus University | Digital Twin as a Service Software Platform |
| 2025 | [Istvan David](https://istvandavid.com/) | McMaster University | [Engineering Complex and Sustainable Systems Through Digital Twins](https://istvandavid.com/news/2025/03/17/guest-lecture-at-polytechnique-montreal-on-digital-twins/) |
| 2025 | [Pascal Archambault](https://pascalarchambault.ca/) | Université de Montréal | Digital Twins for Controlled Environment Agriculture |

<div style="margin-bottom: 2rem;"></div>

## Potential Students

<div style="border-left: 4px solid #ED1C24; padding: 0.5em 1em; margin: 1rem 0;" markdown="1">
LOG6310E welcomes _senior undergraduate students_, _graduate students_, and _researchers_ from any discipline, particularly software engineering, computer science, mechanical engineering, or any field where you model, simulate, or monitor complex systems. If you work with cyber-physical systems, robotics, manufacturing, or smart infrastructure and want to learn how to engineer a Digital Twin for it, this course is for you. No prior DT experience is needed; some familiarity with Python, Docker, and Git is useful for the lab sessions, but support is available for those newer to these tools.

For students from other Quebec universities, there is an established inter-university enrollment procedure. See the [BCI Québec application portal](https://aehe.bci-qc.ca/en) (select 'Applications' on the left) and the [BCI student transfer guide](https://aehe.bci-qc.ca/en/Documents/ShowLocalized?Document=ETU) for details.
</div>

## What Students Say

> *"The course is very engaging and hands-on."*
> (Winter 2026 student)

> *"The course project is one of the most valuable components of the course. It forces a deeper understanding of Digital Twin architecture by moving from conceptual discussion to system-level implementation, and provides a realistic view of how complex DT systems are built and analyzed."*
> (Winter 2026 student)

> *"The discussions and classes are very informational. It provides basis for the understanding the space of Digital Twins. Technologies can be learned quickly, but how to think about DTs and how they connect practically come from these discussions. It is terrific!"*
> (Winter 2026 student)
