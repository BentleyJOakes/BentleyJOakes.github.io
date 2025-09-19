---
layout: page
title: Publications
permalink: /publications/
---

| [DBLP](https://dblp.org/pid/147/8495.html) | [Google Scholar](https://scholar.google.ca/citations?user=x9H9H4QAAAAJ) | [ResearchGate](https://www.researchgate.net/profile/Bentley-Oakes) | [ORCID](https://orcid.org/0000-0001-7558-1434)|


### Selected papers:
<ul class="publications">

<li>
    <strong>DTInsight: A Tool for Explicit, Interactive, and Continuous Digital Twin Reporting</strong><br>
    Fiter, Malassigné-Onfroy, <em>Oakes</em><br>
    Conference on Engineering Digital Twins (EDTconf)<br>
    <a href="/assets/publications/Fiter2025 - DTInsight A Tool for Explicit, Interactive, and Continuous Digital Twin Reporting.pdf" class="paper" target="_blank" rel="noopener noreferrer">Paper</a>
    <a href="/assets/publications/Fiter2025 - DTInsight poster.pdf" class="poster" target="_blank" rel="noopener noreferrer">Poster</a>
</li>

  <li>
    <strong>Towards Ontological Service-Driven Engineering of Digital Twins</strong><br>
    <em>Oakes</em>, Gomes, Kamburjan, Abbiati, Bas, Engelsgaard<br>
    International Conference on Engineering Digital Twins (EDTconf) 🏆 <b>Best Short Paper Award</b><br>
    <a href="/assets/publications/Oakes2024-Towards_Ontological_Service-Driven_Engineering_of_Digital_Twins.pdf" class="paper" target="_blank" rel="noopener noreferrer">Paper</a>
    <a href="/assets/publications/bib/Oakes2024ServiceDriven.bib" class="bib" target="_blank" rel="noopener noreferrer">Bib</a>
    <a href="/assets/publications/Oakes2024-Towards_Ontological_Service-Driven_Engineering_of_Digital_Twins_presentation.pdf" class="presentation" target="_blank" rel="noopener noreferrer">Presentation</a>
    <a href="https://www.youtube.com/watch?v=eOTbvIJvfwg&list=PL5_r5D9dG-fdkhDut56KVw01umNdZFsH9" class="video" target="_blank" rel="noopener noreferrer">Video</a>
    <a href="https://doi.org/10.1145/3652620.3688261" class="doi" target="_blank" rel="noopener noreferrer">DOI</a>  
</li>

  <li>
    <strong>Towards a Systematic Reporting Framework for Digital Twins: A Cooperative Robotics Case Study</strong><br>
    Gil, <em>Oakes</em>, Gomes, Frasheri, Larsen<br>
    SIMULATION<br>
    <a href="/assets/publications/Gil2024-Towards_a_Systematic_Reporting_Framework_for_Digital_Twins.pdf" class="paper" target="_blank" rel="noopener noreferrer">Paper</a>
    <a href="/assets/publications/bib/gil2024towardssystematicreporting.bib" class="bib" target="_blank" rel="noopener noreferrer">Bib</a>
    <a href="https://www.youtube.com/watch?v=sfs1TGG-Mf4" class="video" target="_blank" rel="noopener noreferrer">Video</a>
    <a href="https://doi.org/10.1177/00375497241261406" class="doi" target="_blank" rel="noopener noreferrer">DOI</a>  
</li>

  <li>
    <strong>Building Domain-Specific Machine Learning Workflows: A Conceptual Framework for the State-of-the-Practice</strong><br>
    <em>Oakes</em>, Famelis, Sahraoui<br>
    ACM Transactions on Software Engineering and Methodology (TOSEM)<br>
    <a href="/assets/publications/Oakes2023%20-%20Building Domain-Specific Machine Learning Workflows: A Conceptual Framework for the State-of-the-Practice.pdf" class="paper" target="_blank" rel="noopener noreferrer">Paper</a>
    <a href="/assets/publications/bib/Oakes2024BuildingDomainSpecific.bib" class="bib" target="_blank" rel="noopener noreferrer">Bib</a>
    <a href="https://doi.org/10.1145/3638243" class="doi" target="_blank" rel="noopener noreferrer">DOI</a>  
</li>

  <li>
    <strong>openCAESAR: Balancing Agility and Rigor in Model-Based Systems Engineering</strong><br>
    Elaasar, Rouquette, Wagner, <em>Oakes</em>, Hamou-Lhadj, Hamdaqa<br>
    SAM 2023, ACM/IEEE MODELS Companion<br>
    <a href="/assets/publications/Elaasar2023%20-%20openCAESAR%20Balancing%20Agility%20and%20Rigor%20in%20Model-Based%20Systems%20Engineering.pdf" class="paper" target="_blank" rel="noopener noreferrer">Paper</a>
    <a href="/assets/publications/bib/elaasar2023opencaesar.bib" class="bib" target="_blank" rel="noopener noreferrer">Bib</a>
    <a href="https://doi.org/10.1109/MODELS-C59198.2023.00051" class="doi" target="_blank" rel="noopener noreferrer">DOI</a>  
</li>

</ul>


### All papers:

<noscript>
  <p><em>Note: Sorting and search require JavaScript. The table below is static.</em></p>
</noscript>

{% include publications_table.html %}

<link href="https://cdn.datatables.net/v/dt/dt-2.3.4/datatables.min.css" rel="stylesheet" integrity="sha384-pmGS6IIcXhAVIhcnh9X/mxffzZNHbuxboycGuQQoP3pAbb0SwlSUUHn2v22bOenI" crossorigin="anonymous">

<!-- jQuery + DataTables -->
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="https://cdn.datatables.net/v/dt/jq-3.7.0/dt-2.3.4/datatables.min.js" integrity="sha384-mtJ3+H/dkUyvhmcXYSyIZyaeG0TnEkh91c1JwFkrkBLHBv8oQ3lFjUp8xfDan41b" crossorigin="anonymous"></script>
<script>
  new DataTable('#pubs', {
    paging: false,
    order: [[0, 'desc'], [2, 'asc']],
    columnDefs: [
      { orderable: true, targets: [0,1,2] },
      { orderable: false, targets: [3,4,5] }
    ]
  });
</script>



