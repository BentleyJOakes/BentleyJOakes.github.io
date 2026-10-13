---
layout: post
title: "Building Trustworthy Enterprise Digital Twins with Michelin"
date: 2026-10-13 00:00:00-0400
inline: false
sitemap: true
related_posts: false
permalink: /publications/edtconf-2026-enterprise-digital-twins/
description: "EDTconf 2026 Best Short Paper on engineering trustworthy Enterprise Digital Twins with Michelin: involve stakeholders with a prototype first, federate departmental models through an ontology, and make long-loop decisions traceable."
thumbnail: /assets/img/publications/fiter2026-edt-card.png
og_image: https://bentleyoakes.com/assets/img/publications/fiter2026-edt-card.png
---

Our paper **['Involving before Evolving: A Vision for Trustworthy Enterprise Digital Twin Engineering'](/assets/publications/Fiter2026%20-%20Involving%20before%20Evolving%20A%20Vision%20for%20Trustworthy%20Enterprise%20Digital%20Twin%20Engineering.pdf)** won the **Best Short Paper** award at the [International Conference on Engineering Digital Twins (EDTconf 2026)](https://conf.researchr.org/home/edtconf-2026), held with MODELS 2026 in Málaga. The authors are Kérian Fiter, Adil Lagrou, Franck Dervault (Michelin Canada), and me.

<figure class="figure-narrow">
  <img src="/assets/img/publications/fiter2026-edt-talk.jpg" alt="Kérian Fiter presenting the approach summary slide at EDTconf 2026 in Málaga" loading="lazy" />
  <figcaption class="caption">Kérian presenting the paper at EDTconf 2026 in Málaga.</figcaption>
</figure>

This paper is a new direction for us. Most digital twins represent a machine or a process. An Enterprise Digital Twin represents an organisation: its marketing, finance, and sales departments, and how their decisions affect each other. I'm proud of Kérian for this award, which reflects his ideas for the paper and his presentation in Málaga. I'm also grateful to Michelin for the collaboration.

In most digital twins, the loop between the twin and the real system is short, and the twin can act on the system directly. In an Enterprise Digital Twin, people close the loop by making decisions, over days, months, or years. We call this a _long-loop_ digital twin. A prediction might lead to restructuring a supply chain or opening a new market, and such decisions are hard to undo. For that reason, people must trust the twin before they act on it. We propose three steps toward that trust. First, **involve before evolving**: build a quick prototype with the people who will use it, and formalise their knowledge later. Second, **let each department own its models**, and connect those models through a shared ontology. Third, **make each what-if result traceable**, so that people can check where a prediction came from.

<figure class="figure-full">
  <img src="/assets/img/publications/fiter2026-edt-architecture.png" alt="Diagram of the three steps (prototype creation, federation backbone, trustworthiness) above the actual enterprise, whose marketing, sales, and finance departments exchange data and predictions with the Enterprise Digital Twin" loading="lazy" />
  <figcaption class="caption">The three steps of our approach (top). Each department of the enterprise (bottom left) has its own models in the Enterprise Digital Twin (bottom right), connected through a shared ontology.</figcaption>
</figure>

An author pre-print is [available here](/assets/publications/Fiter2026%20-%20Involving%20before%20Evolving%20A%20Vision%20for%20Trustworthy%20Enterprise%20Digital%20Twin%20Engineering.pdf), along with the [slides from Kérian's talk](/assets/publications/Fiter2026%20-%20Involving%20before%20Evolving%20A%20Vision%20for%20Trustworthy%20Enterprise%20Digital%20Twin%20Engineering%20-%20Presentation.pdf). The trustworthiness step builds on Kérian's tool [DTInsight](/publications/#Fiter2025), and the shared ontology uses the Ontological Modeling Language from our [ISWC 2026 paper](/publications/iswc-2026-bridging-semantic-web-systems-engineering/). Our other digital twin work is on the [research page](/research/#digital-twins).

{% include abstract.liquid
  text="Enterprise Digital Twins (EDTs) promise data-driven decision support at organizational scale, but realizing them requires navigating siloed departments, tacit knowledge, and high-stakes decisions with long-horizon consequences. Existing approaches involve domain experts during model development but focus less on early organizational buy-in in EDTs. We present a vision for trustworthy EDT engineering grounded in an ‘involving before evolving’ paradigm: rapidly involving stakeholders through a working prototype before evolving toward federation and full interoperability. Our three-stage approach combines foundation models for rapid prototyping, an ontological backbone for federated interoperability, and observability tooling for stakeholder trust. We ground our vision in an ongoing collaboration with Michelin, a multinational manufacturer, where an initial prototype has helped support stakeholder buy-in."
%}
