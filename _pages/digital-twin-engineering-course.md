---
layout: page
permalink: /digital-twin-engineering-course/
redirect_from:
  - /dte_course/
title: LOG8421E — Digital Twin Engineering at Polytechnique Montréal
description: "LOG8421E is a Digital Twin Engineering course for engineers and graduate students at Polytechnique Montréal, covering architecture, modelling, simulation, visualization, and DT services."
keywords: "digital twin course, LOG8421E, LOG6310E, Polytechnique Montreal, Polytechnique Montréal, graduate course, undergraduate course, co-simulation, formal verification, digital twin engineering, DT services"
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
The [Digital Twin Engineering course (LOG8421E) at Polytechnique Montréal](https://www.polymtl.ca/programmes/cours/digital-twin-engineering-1) guides students through these stages of building a DT. Students learn through hands-on labs, real-world case studies, and team projects, building a working Digital Twin from the ground up. The course is offered every Winter term by [Dr. Bentley Oakes](https://www.polymtl.ca/expertises/en/oakes-bentley) (Department of Computer and Software Engineering), in English.

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

<p>Past student projects have spanned many domains as shown below. One project was developed into a published scientific article at EDTconf, demonstrating the high quality of work produced by students.</p>

## Course Projects

<div id="courseProjectsAccordion" class="mb-4">

<div class="card mb-0">
<div class="card-header" id="heading2026" style="cursor:pointer; display:flex; justify-content:space-between; align-items:center;" data-toggle="collapse" data-target="#collapse2026" aria-expanded="false" aria-controls="collapse2026">
<strong>Winter 2026</strong>
<span style="font-size:0.85em; color:#666;">(click to expand) <i class="fas fa-chevron-down"></i></span>
</div>
<div id="collapse2026" class="collapse" aria-labelledby="heading2026">
<div class="card-body">

<div class="row mb-4 align-items-start">
<div class="col-md-6">
<strong>AvalanCH: A Digital Twin of the Swiss Alps</strong>
<p>A regional-scale digital shadow of the Swiss Alps for avalanche risk management, using real-time meteorological data from IMIS weather stations and the Alpine3D physics-based snow simulation model. Services include avalanche risk prediction and what-if scenario visualization to support avalanche prevention, search-and-rescue planning, and ski resort management.</p>
<p><a href="https://github.com/BentleyJOakes/DTCourseProjects/raw/main/2026/2026_AvalanCH/AvalanCHPresentation.pdf"><i class="fas fa-chalkboard"></i> Presentation</a> &nbsp;&nbsp; <a href="https://github.com/BentleyJOakes/DTCourseProjects/raw/main/2026/2026_AvalanCH/AvalanCHReport.pdf"><i class="fas fa-file-alt"></i> Report</a> &nbsp;&nbsp; <a href="https://github.com/KevinPeymani/AvalanCH-DT"><i class="fab fa-github"></i> Code</a> &nbsp;&nbsp; <a href="https://afymer.github.io/avalanchDT-report/"><i class="fas fa-file-invoice"></i> Reporting Page</a></p>
</div>
<div class="col-md-6">
<div class="ratio ratio-16x9">
<iframe src="https://www.youtube.com/embed/TzLxHhmUvXw" title="AvalanCH Digital Twin demo" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>
</div>

<div class="row mb-4 align-items-start">
<div class="col-md-6">
<strong>MonDTreal: Digital Shadow of Montreal's Road Network</strong>
<p>A digital shadow of Montreal's road network that applies machine learning models (logistic regression, random forest, and gradient boosting) to predict road conditions from open city data. Services include a prediction service, what-if simulation across road segments, and a real-time dashboard, built on an Angular/Flask/PostgreSQL stack containerized with Docker.</p>
<p><a href="https://github.com/BentleyJOakes/DTCourseProjects/raw/main/2026/2026_MonDTreal/MonDTrealPresentation.pdf"><i class="fas fa-chalkboard"></i> Presentation</a> &nbsp;&nbsp; <a href="https://github.com/BentleyJOakes/DTCourseProjects/raw/main/2026/2026_MonDTreal/MonDTrealReport.pdf"><i class="fas fa-file-alt"></i> Report</a> &nbsp;&nbsp; <a href="https://github.com/HamzaGiTX786/LOG6310-Course-Project-Road-System-DT"><i class="fab fa-github"></i> Code</a> &nbsp;&nbsp; <a href="https://pennyghael.github.io/DTInsight_MontrealRoad_DT/"><i class="fas fa-file-invoice"></i> Reporting Page</a></p>
</div>
<div class="col-md-6">
<div class="ratio ratio-16x9">
<iframe src="https://www.youtube.com/embed/LWQldlsj-DE" title="MonDTreal Digital Shadow demo" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>
</div>

<div class="row mb-4 align-items-start">
<div class="col-md-6">
<strong>ShadowSpindle: Orthogonal Turning Digital Shadow</strong>
<p>A digital shadow of an orthogonal turning (CNC lathe) machining process, using a Simulink 1-DOF model and InfluxDB for sensor data capture. Services include FFT-based vibration analysis, cut stability checking, tool wear prediction, process parameter reconfiguration, three formal verification services for warning and emergency states, Godot 3D visualization, and a Python/Dash dashboard.</p>
<!-- <p><a href="https://github.com/BentleyJOakes/DTCourseProjects/raw/main/2026/2026_ShadowSpindle/ShadowSpindlePresentation.pdf"><i class="fas fa-chalkboard"></i> Presentation</a> &nbsp;&nbsp; <a href="https://github.com/BentleyJOakes/DTCourseProjects/raw/main/2026/2026_ShadowSpindle/ShadowSpindleReport.pdf"><i class="fas fa-file-alt"></i> Report</a></p> -->
<p><span style="display:inline-block; padding:0.2em 0.7em; background:#f0f0f0; border-radius:3px; font-size:0.82em; color:#888;"><i class="fas fa-clock"></i> Links available soon</span></p>
</div>
<div class="col-md-6">
<div class="ratio ratio-16x9">
<div style="background:#f5f5f5; display:flex; align-items:center; justify-content:center; border:1px dashed #ccc; border-radius:4px;">
<div style="text-align:center; color:#aaa;">
<i class="fas fa-video" style="font-size:1.5rem; display:block; margin-bottom:0.3rem;"></i>
<small>Video coming soon</small>
</div>
</div>
</div>
</div>
</div>

<div class="row mb-4 align-items-start">
<div class="col-md-6">
<strong>WoodTwin: Wood Kiln Drying DT</strong>
<p>A digital twin of an industrial wood kiln drying process, modelling moisture content dynamics to reduce energy waste and quality defects in lumber production. Services include batch loading optimization, Monte Carlo moisture content estimation, intelligent control, real-time monitoring, and 3D kiln visualization, with an architecture aligned to the ISO 23247 DT standard.</p>
<!-- <p><a href="https://github.com/BentleyJOakes/DTCourseProjects/raw/main/2026/2026_WoodTwin/WoodTwinPresentation.pdf"><i class="fas fa-chalkboard"></i> Presentation</a> &nbsp;&nbsp; <a href="https://github.com/BentleyJOakes/DTCourseProjects/raw/main/2026/2026_WoodTwin/WoodTwinReport.pdf"><i class="fas fa-file-alt"></i> Report</a></p> -->
<p><span style="display:inline-block; padding:0.2em 0.7em; background:#f0f0f0; border-radius:3px; font-size:0.82em; color:#888;"><i class="fas fa-clock"></i> Links available soon</span></p>
</div>
<div class="col-md-6">
<div class="ratio ratio-16x9">
<div style="background:#f5f5f5; display:flex; align-items:center; justify-content:center; border:1px dashed #ccc; border-radius:4px;">
<div style="text-align:center; color:#aaa;">
<i class="fas fa-video" style="font-size:1.5rem; display:block; margin-bottom:0.3rem;"></i>
<small>Video coming soon</small>
</div>
</div>
</div>
</div>
</div>

</div>
</div>
</div>

<div class="card mb-0">
<div class="card-header" id="heading2025" style="cursor:pointer; display:flex; justify-content:space-between; align-items:center;" data-toggle="collapse" data-target="#collapse2025" aria-expanded="false" aria-controls="collapse2025">
<strong>Winter 2025</strong>
<span style="font-size:0.85em; color:#666;">(click to expand) <i class="fas fa-chevron-down"></i></span>
</div>
<div id="collapse2025" class="collapse" aria-labelledby="heading2025">
<div class="card-body">


<div class="row mb-4 align-items-start">
<div class="col-md-6">
<strong>Beer Fermentation DT</strong>
<p>Monitors and controls a beer fermentation process using Arduino sensors, a sampling chamber, and an electronic hydrometer. DT services include safety monitoring, closed-loop control, analysis, and Unity 3D visualization.</p>
<div style="border-left: 4px solid #F5A623; padding: 0.4em 1em; margin: 0.5rem 0;">
<strong>Published at EDTconf:</strong> <a href="/assets/publications/Goffi2025 - Engineering a Digital Twin for the Monitoring and Control of Beer Fermentation Sampling.pdf">Engineering a Digital Twin for the Monitoring and Control of Beer Fermentation Sampling</a>
</div>
<p><a href="https://github.com/BentleyJOakes/DTCourseProjects/raw/main/2025/2025_fermentation/BrewersPresentation.pdf"><i class="fas fa-chalkboard"></i> Presentation</a> &nbsp;&nbsp; <a href="https://github.com/BentleyJOakes/DTCourseProjects/raw/main/2025/2025_fermentation/BrewersReport.pdf"><i class="fas fa-file-alt"></i> Report</a></p>
</div>
<div class="col-md-6">
<div class="ratio ratio-16x9">
<iframe src="https://www.youtube.com/embed/-EGl8y5Qlus?si=5H5r-fF26d1te-tz" title="Beer Fermentation Digital Twin demo" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>
</div>

<div class="row mb-4 align-items-start">
<div class="col-md-6">
<strong>Robotics DT</strong>
<p>A digital twin of a robotic arm with services for physics simulation, singularity detection, 3D visualization, deviation monitoring, and emergency stop, enabling safe real-time operation and anomaly detection.</p>
<p><a href="https://github.com/BentleyJOakes/DTCourseProjects/raw/main/2025/2025_robotics/RoboticsPresentation.pdf"><i class="fas fa-chalkboard"></i> Presentation</a> &nbsp;&nbsp; <a href="https://github.com/BentleyJOakes/DTCourseProjects/raw/main/2025/2025_robotics/RoboticsReport.pdf"><i class="fas fa-file-alt"></i> Report</a> &nbsp;&nbsp; <a href="https://github.com/alient12/DTProject/"><i class="fab fa-github"></i> Code</a></p>
</div>
<div class="col-md-6">
<div class="ratio ratio-16x9">
<iframe src="https://www.youtube.com/embed/xF0SzGU1vgw?si=GGpn9RwaaK5SJIT-" title="Robotics Digital Twin demo" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>
</div>

<div class="row mb-4 align-items-start">
<div class="col-md-6">
<strong>Waste Twin: Smart Waste Collection DT</strong>
<p>A digital twin of a smart waste collection system-of-systems, modelling a city with truck fleets, adaptive traffic lights, and disturbance scenarios. Supports bidirectional feedback and adaptive behaviour.</p>
<p><a href="https://github.com/BentleyJOakes/DTCourseProjects/raw/main/2025/2025_smart_waste/SmartWastePresentation.pdf"><i class="fas fa-chalkboard"></i> Presentation</a> &nbsp;&nbsp; <a href="https://github.com/BentleyJOakes/DTCourseProjects/raw/main/2025/2025_smart_waste/SoSReport.pdf"><i class="fas fa-file-alt"></i> Report</a> &nbsp;&nbsp; <a href="https://github.com/meriemsmt/wasteTwin"><i class="fab fa-github"></i> Code</a></p>
<p><i class="fas fa-video"></i> <a href="https://youtu.be/sqTI49OAOeY">Overview</a> &nbsp; <a href="https://youtu.be/uh0O6K9vKeg">Truck-stopping</a> &nbsp; <a href="https://youtu.be/5cdrYAZirWU">Smart traffic lights</a> &nbsp; <a href="https://youtu.be/EpAbdp7IuwM">City disturbance</a></p>
</div>
<div class="col-md-6">
<div class="ratio ratio-16x9">
<iframe src="https://www.youtube.com/embed/sqTI49OAOeY?si=MNbTGbVuzWuuGMT6" title="Waste Twin: Smart Waste Collection Digital Twin demo" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>
</div>

<div class="row mb-4 align-items-start">
<div class="col-md-6">
<strong>STM Bus Fleet DT</strong>
<p>Monitors the Société de Transport de Montréal (STM) bus fleet in real-time using live GPS data, with a 3D route visualization, telemetry validation service, and notification service for anomalies.</p>
<p><a href="https://github.com/BentleyJOakes/DTCourseProjects/raw/main/2025/2025_stm/STMPresentation.pdf"><i class="fas fa-chalkboard"></i> Presentation</a> &nbsp;&nbsp; <a href="https://github.com/BentleyJOakes/DTCourseProjects/raw/main/2025/2025_stm/STMReport.pdf"><i class="fas fa-file-alt"></i> Report</a> &nbsp;&nbsp; <a href="https://github.com/oakeslabmtl/Society_de_Transport_Montreal_DT"><i class="fab fa-github"></i> Code</a></p>
</div>
<div class="col-md-6">
<div class="ratio ratio-16x9">
<iframe src="https://www.youtube.com/embed/ezhNTBHXkss?si=eRGGNmkgjw3Af1nQ" title="STM Bus Fleet Digital Twin demo" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>
</div>

<div class="row mb-4 align-items-start">
<div class="col-md-6">
<strong>Permafrost DT</strong>
<p>Models permafrost freeze/thaw dynamics using finite element methods (two-phase Stefan problem), with real sensor data, a monitoring service, and 3D visualization of subsurface temperature evolution.</p>
<p><a href="https://github.com/BentleyJOakes/DTCourseProjects/raw/main/2025/2025_permafrost/PermafrostPresentation.pdf"><i class="fas fa-chalkboard"></i> Presentation</a> &nbsp;&nbsp; <a href="https://github.com/BentleyJOakes/DTCourseProjects/raw/main/2025/2025_permafrost/PermafrostReport.pdf"><i class="fas fa-file-alt"></i> Report</a> &nbsp;&nbsp; <a href="https://github.com/AbdelhamidRouatbi/permafrost-digital-twin"><i class="fab fa-github"></i> Code</a></p>
</div>
<div class="col-md-6">
<div class="ratio ratio-16x9">
<iframe src="https://www.youtube.com/embed/y9hKJqjnLsc?si=BFYt3feCrW1AHVIe" title="Permafrost Digital Twin demo" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>
</div>

<div class="row mb-4 align-items-start">
<div class="col-md-6">
<strong>Graph Database Failure Propagation DT</strong>
<p>Explores graph databases (Neo4j and TachosDB) for modelling and querying failure propagation in DT systems, with a RabbitMQ communication layer and Godot 3D visualization of building failures.</p>
<p><a href="https://github.com/BentleyJOakes/DTCourseProjects/raw/main/2025/2025_graph_database/FinalProjectPresentation.pdf"><i class="fas fa-chalkboard"></i> Presentation</a> &nbsp;&nbsp; <a href="https://github.com/BentleyJOakes/DTCourseProjects/raw/main/2025/2025_graph_database/DatabaseReport.pdf"><i class="fas fa-file-alt"></i> Report</a></p>
</div>
<div class="col-md-6">
<div class="ratio ratio-16x9">
<iframe src="https://www.youtube.com/embed/9pK6ZKWzszM?si=XI7TcGlE6nsaMDEM" title="Graph Database Failure Propagation Digital Twin demo" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>
</div>

</div>
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
LOG8421E welcomes _senior undergraduate students_, _graduate students_, and _researchers_ from any discipline, particularly software engineering, computer science, mechanical engineering, or any field where you model, simulate, or monitor complex systems. If you work with cyber-physical systems, robotics, manufacturing, or smart infrastructure and want to learn how to engineer a Digital Twin for it, this course is for you. No prior DT experience is needed; some familiarity with Python, Docker, and Git is useful for the lab sessions, but support is available for those newer to these tools.

For students from other Quebec universities, there is an established inter-university enrollment procedure. See the [BCI Québec application portal](https://aehe.bci-qc.ca/en) (select 'Applications' on the left) and the [BCI student transfer guide](https://aehe.bci-qc.ca/en/Documents/ShowLocalized?Document=ETU) for details.
</div>

## What Students Say

> *"The course is very engaging and hands-on."*
> (Winter 2026 student)

> *"The course project is one of the most valuable components of the course. It forces a deeper understanding of Digital Twin architecture by moving from conceptual discussion to system-level implementation, and provides a realistic view of how complex DT systems are built and analyzed."*
> (Winter 2026 student)

> *"The discussions and classes are very informational. It provides basis for the understanding the space of Digital Twins. Technologies can be learned quickly, but how to think about DTs and how they connect practically come from these discussions. It is terrific!"*
> (Winter 2026 student)

<script>
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('#courseProjectsAccordion [data-toggle="collapse"]').forEach(function (header) {
    var target = document.querySelector(header.getAttribute('data-target'));
    var label = header.querySelector('span');
    target.addEventListener('show.bs.collapse', function () {
      label.innerHTML = '(click to collapse) <i class="fas fa-chevron-up"></i>';
    });
    target.addEventListener('hide.bs.collapse', function () {
      label.innerHTML = '(click to expand) <i class="fas fa-chevron-down"></i>';
    });
  });
});
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "LOG8421E — Digital Twin Engineering",
  "description": "An undergraduate and graduate course at Polytechnique Montréal on engineering Digital Twins: architecture, modelling, simulation, visualization, and DT services.",
  "url": "https://bentleyoakes.com/dte_course/",
  "courseCode": "LOG8421E",
  "inLanguage": "en",
  "educationalLevel": ["Undergraduate", "Graduate"],
  "provider": {
    "@type": "Organization",
    "name": "Polytechnique Montréal",
    "url": "https://www.polymtl.ca"
  },
  "instructor": {
    "@type": "Person",
    "name": "Bentley Oakes",
    "url": "https://bentleyoakes.com"
  }
}
</script>
