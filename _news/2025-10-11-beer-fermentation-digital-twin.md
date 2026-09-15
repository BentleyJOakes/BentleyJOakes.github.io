---
layout: post
title: "A Safety-Critical Digital Twin for Beer Fermentation"
date: 2025-10-11 00:00:00-0400
inline: false
sitemap: true
related_posts: false
permalink: /publications/beer-fermentation-digital-twin/
description: "EDTconf 2025 paper on a student-built digital twin that monitors beer fermentation and safely controls high-pressure sampling equipment."
thumbnail: /assets/img/publications/goffi2025-card.png
og_image: https://bentleyoakes.com/assets/img/publications/goffi2025-card.png
---

I presented our paper **['Engineering a Digital Twin for the Monitoring and Control of Beer Fermentation Sampling'](/assets/publications/Goffi2025%20-%20Engineering%20a%20Digital%20Twin%20for%20the%20Monitoring%20and%20Control%20of%20Beer%20Fermentation%20Sampling.pdf)** at the [International Conference on Engineering Digital Twins (EDTconf 2025)](https://conf.researchr.org/home/edtconf-2025) in Grand Rapids, Michigan. Pierre-Emmanuel Goffi and Raphaël Tremblay led the work as a project in my [Digital Twin Engineering course](/digital-twin-engineering-course/). They built on equipment made by [Polybroue](https://www.instagram.com/polybroue/), the brewing club at Polytechnique Montréal.

<figure class="figure-narrow">
  <img
    src="/assets/img/publications/goffi2025-presenting.jpg"
    alt="Bentley Oakes presenting beside a slide about beer fermentation monitoring and manual sampling at EDTconf 2025."
    style="aspect-ratio: 16 / 10; object-fit: cover; object-position: center 45%;"
    loading="lazy"
  />
  <figcaption class="caption">Presenting the paper at EDTconf 2025 in Grand Rapids.</figcaption>
</figure>

I'm very proud that students in my course built a true digital twin (one that can also control the equipment) of such an interesting and complex system, and that the work was accepted at a solid venue like EDTconf.

The paper describes how they turned a fermentation monitor into a digital twin that can also control the equipment. Brewers normally take samples by hand every day while a fermentation runs, which can take weeks. The digital twin cut the time spent on this by **91%**.

There are two main lessons. First, since the equipment works at high pressure, **safety has to be built in at every level** (the hardware, the software, and the digital twin) right from the start. Second, digital twins bring together **many disciplines**, which makes it hard to get everyone on the same page. That is why a **visual representation** like our [digital twin constellation](/publications/#Gil2024towardssystematicreporting) is so important.

A pre-print is [available here](/assets/publications/Goffi2025%20-%20Engineering%20a%20Digital%20Twin%20for%20the%20Monitoring%20and%20Control%20of%20Beer%20Fermentation%20Sampling.pdf) and on [arXiv](https://arxiv.org/abs/2508.18452). Related work includes [DTInsight](/publications/#Fiter2025), a tool for reporting on digital twins.

{% include video.liquid
  path="https://www.youtube.com/watch?v=f_TO3kpDPdQ"
  title="Engineering a Digital Twin for the Monitoring and Control of Beer Fermentation Sampling, recorded at EDTconf 2025"
  caption="The recorded EDTconf 2025 talk. A separate <a href=\"https://youtu.be/-EGl8y5Qlus\">demo video</a> shows the sampling cycle and the Unity model."
%}

{% include abstract.liquid
  text="Successfully engineering interactive industrial DTs is a complex task, especially when implementing services beyond passive monitoring. We present here an experience report on engineering a safety-critical digital twin (DT) for beer fermentation monitoring, which provides continual sampling and reduces manual sampling time by 91%. We document our systematic methodology and practical solutions for implementing bidirectional DTs in industrial environments. This includes our three-phase engineering approach that transforms a passive monitoring system into an interactive Type 2 DT with real-time control capabilities for pressurized systems operating at seven bar. We contribute details of multi-layered safety protocols, hardware-software integration strategies across Arduino controllers and Unity visualization, and real-time synchronization solutions. We document specific engineering challenges and solutions spanning interdisciplinary integration, demonstrating how our use of the constellation reporting framework facilitates cross-domain collaboration. Key findings include the critical importance of safety-first design, simulation-driven development, and progressive implementation strategies. Our work thus provides actionable guidance for practitioners developing DTs requiring bidirectional control in safety-critical applications."
%}

## The project

As members of Polybroue, Raphaël and Pierre-Emmanuel designed the sampling equipment in 2023 and built it in 2024. In Winter 2025, they took it on as their course project. They wrote the software that connects the equipment to the digital twin (a server, a database, a dashboard, and a 3D view in Unity), and added control of the equipment along with the safety measures it needs.

<figure class="figure-narrow">
  <img
    src="/assets/img/publications/goffi2025-physical-twin.jpg"
    alt="Raphaël Tremblay, wearing a Polybroue hoodie, stands beside the sampling equipment in a clear acrylic case, with the digital twin dashboard showing fermentation history on the screen behind him."
    loading="lazy"
  />
  <figcaption class="caption">Raphaël showing the equipment and dashboard at the end of the course, April 2025.</figcaption>
</figure>

## How it works

A pump draws beer from the fermentation tank into a small steel chamber, where sensors measure temperature, pH, conductivity, and dissolved oxygen. A floating hydrometer in the tank measures density. Each sample goes through the same steps:

1. Fill the chamber with beer from the tank.
2. Pressurise the chamber with nitrogen. The oxygen sensor needs high pressure to read accurately.
3. Take the readings and send them to the digital twin.
4. Slowly release the pressure.
5. Return the beer to the tank.

After five samples, the beer flows through the chamber in the other direction, to ensure representative sampling. Brewers see the readings on a dashboard or on the 3D model, and can send changes back to the equipment, such as how often to take a sample.

The constellation below shows the whole system in four layers: the physical equipment, the communication, the services, and the models and data.

<figure class="figure-full">
  <img
    src="/assets/img/publications/goffi2025-constellation.png"
    alt="The digital twin constellation for the brewing system. On the left, the physical twin: the brewery, the fermentation monitor attached to the tank, its actuators and sensors, and an operator. Sensor readings (temperature, pH, oxygen, pressure, and density from the iSpindle) flow right through communication enablers (Wi-Fi, HTTPS, WebSockets) to the digital side. There, a models and data layer (DT schemas, 3D models, fermentation models) feeds an enablers layer (Unity, DT Manager, PostgreSQL database), which supports four services: visualisation, analysis, safety, and control. Arrows back to the physical side carry visualisations and alarms to the operator, and parameter changes to the actuators."
    loading="lazy"
  />
  <figcaption class="caption">The digital twin constellation for the brewing system, from the paper.</figcaption>
</figure>

## Safety, challenges, and results

With software controlling equipment under pressure, a bug or a lost connection could damage the equipment or hurt someone. So they built in safety at three levels. In the hardware, a mechanical valve releases the pressure as a last resort. In the software, the system shuts down if the pressure gets too high, and watchdog timers put the equipment in a safe state if the controller fails or the connection drops. In the digital twin, operations are sorted by risk. Small changes, such as how often to sample, can be made remotely. Some operations must be confirmed both in the digital twin and at the equipment. The most dangerous operations need someone at the equipment.

After testing with water, power cuts, network loss, and sensor failures, the system has run over 500 pressure cycles without incident, though it has not been formally safety certified.

The physical side brought leaks, electrical noise, and water damage to the electronics, which took new seals, shielding, and waterproof cases to fix. Getting people from brewing, mechanical, electrical, and software backgrounds to understand each other was also hard. In their final presentation, they said interdisciplinary work "takes time and a lot of communication".

Readings can be taken as often as every five seconds, or 17,280 a day, compared to a few by hand. The system sent 23 automatic alerts across the batches it monitored. On the other hand, the system is expensive, needs technical knowledge to maintain, and some checks, like yeast health, are still done by hand. Next steps include monitoring several tanks and predicting how a fermentation will go.

To see the other student projects, or to take the course yourself, see the [Digital Twin Engineering course page](/digital-twin-engineering-course/#course-projects).
