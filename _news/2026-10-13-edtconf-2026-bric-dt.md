---
layout: post
title: "BRIC-DT: Reliable Interfaces for Composable Digital Twins"
date: 2026-10-13 12:00:00-0400
inline: false
sitemap: true
related_posts: false
permalink: /publications/edtconf-2026-bric-dt-composable-digital-twins/
description: "EDTconf 2026 vision paper on contract-aware interfaces for digital twins: each component states what it assumes and what it guarantees, with evidence checked at design, deployment, and runtime."
thumbnail: /assets/img/publications/gomes2026-bricdt-card.png
og_image: https://bentleyoakes.com/assets/img/publications/gomes2026-bricdt-card.png
---

I presented our vision paper **['BRIC-DT: Building Reliable Interfaces for Composable Digital Twins'](/assets/publications/Gomes2026%20-%20BRIC-DT%20Building%20Reliable%20Interfaces%20for%20Composable%20Digital%20Twins.pdf)** at the [International Conference on Engineering Digital Twins (EDTconf 2026)](https://conf.researchr.org/home/edtconf-2026), held with MODELS 2026 in Málaga. Cláudio Gomes (Aarhus University) led the paper, with Thomas Wright, Peter Gorm Larsen, Lukas Esterle, Philipp Zech, Ana Cavalcanti, James Woodcock, me, and Hans Vangheluwe. I helped with the editing and connected the paper to our earlier work on [model qualities and their impact on digital twins](/publications/#Oakes2023examining).

Many digital twins are built from the same kinds of parts: models, simulators, state estimators, and optimizers. Building a new twin should then be like snapping these parts together. In the paper, our example is an incubator: a heater in a box that keeps its temperature at 37.5 °C. Its digital twin saves energy when the incubator changes, for example when a mass is added or the lid is opened. The figure below shows the three services of the twin, each built from these parts.

<figure class="figure-full">
  <img src="/assets/img/publications/gomes2026-bricdt-incubator.png" alt="Diagram of the incubator digital twin. A photo of the incubator, a heater in a box, sends temperature readings to the plant observer service (state estimator, simulator, and model). The plant observer sends state and uncertainty to the plant digital shadow (system identification and knowledge), which refits the model from history when uncertainty is too large. The new model goes to the energy saver (optimizer, simulator, and model coupling), which sends controller settings back to the incubator." loading="lazy" />
  <figcaption class="caption">The incubator digital twin from <a href="/assets/publications/Gomes2026%20-%20BRIC-DT%20Building%20Reliable%20Interfaces%20for%20Composable%20Digital%20Twins%20-%20Presentation.pdf">my slides</a>. Each service is built from recurring components, shown as coloured bricks.</figcaption>
</figure>

The plant observer simulates the temperature and corrects the estimate with sensor readings. When the uncertainty of that estimate is too large, the plant digital shadow fits a new model from the stored history. The energy saver then finds the controller settings that use the least energy under the new model.

We argue that the hard part is the behaviour of each part, and that its interface should state that behaviour. My talk ended with three points. First, **behaviour is harder to compose than structure**. Tools can already check that data types and connections match. They rarely check validity, fidelity, timing, or uncertainty. Second, each component should have an **assume-guarantee contract**: what it needs from its inputs, and what it then promises about its outputs. Two components fit together when the guarantee of one meets the assumption of the next. Third, the **evidence for each assumption** is gathered at design time, at deployment, or at runtime, and must be rechecked when a component is reused or the twin changes.

In the incubator, for example, the state estimator assumes that the sensor noise is known and that a temperature reading arrives at every time step. If the sensor is replaced, the contracts show that only these two assumptions need rechecking, and the rest of the twin keeps its evidence.

We end the paper with three research directions: specifying twins, perhaps in a small language for contracts that generates checks and monitors; composing twins with reusable operators; and keeping a composed twin correct as its sensors, models, and operating conditions change.

An author pre-print is [available here](/assets/publications/Gomes2026%20-%20BRIC-DT%20Building%20Reliable%20Interfaces%20for%20Composable%20Digital%20Twins.pdf), along with [my slides](/assets/publications/Gomes2026%20-%20BRIC-DT%20Building%20Reliable%20Interfaces%20for%20Composable%20Digital%20Twins%20-%20Presentation.pdf). At the same conference, Kérian Fiter's paper on [enterprise digital twins](/publications/edtconf-2026-enterprise-digital-twins/) won Best Short Paper. Our other digital twin work is on the [research page](/research/#digital-twins).

{% include abstract.liquid
  text="Digital twins (DTs) increasingly combine models, simulators, estimators, optimizers, and knowledge-management services to monitor and steer adaptive cyber-physical systems. Yet most DTs are still engineered as custom assemblies whose interfaces capture data exchange but not the assumptions and guarantees needed for safe reuse. This vision paper argues that DT engineering should move toward contract-aware interfaces: explicit contracts that state not only what data a component exchanges, but also the validity, timing, fidelity, robustness, and uncertainty assumptions governing its trustworthy use. We position BRIC-DT as a contract layer for recurring DT services, outline the gap between current interoperability mechanisms and correctness-preserving composition, and set out a research agenda around explicit correctness properties, reusable composition operators, and correctness-preserving evolution."
%}
