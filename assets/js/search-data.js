// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "dropdown-research-topics",
              title: "Research Topics",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/research/";
              },
            },{id: "dropdown-publications",
              title: "Publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/publications/";
              },
            },{id: "nav-community-building",
          title: "Community-Building",
          description: "Community-building activities by Dr. Bentley Oakes, including conference organization, program committees, invited talks, and outreach.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/community-building/";
          },
        },{id: "dropdown-teaching",
              title: "Teaching",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/teaching/";
              },
            },{id: "dropdown-dte-course",
              title: "DTE Course",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/dte_course/";
              },
            },{id: "dropdown-oakes-lab",
              title: "Oakes Lab",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/lab/";
              },
            },{id: "dropdown-join-us",
              title: "Join Us",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/join/";
              },
            },{id: "nav-contact",
          title: "Contact",
          description: "Contact Dr. Bentley Oakes, Assistant Professor at Polytechnique Montréal.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "news-i-will-be-a-co-chair-for-the-posters-at-the-international-conference-on-software-engineering-icse-2025-in-ottawa",
          title: 'I will be a co-chair for the posters at the International Conference on...',
          description: "",
          section: "News",},{id: "news-our-paper-rationale-dataset-and-analysis-for-the-commit-messages-of-the-linux-kernel-out-of-memory-killer-was-accepted-at-the-ieee-acm-international-conference-on-program-comprehension-icpc-2024",
          title: 'Our paper “Rationale Dataset and Analysis for the Commit Messages of the Linux...',
          description: "",
          section: "News",},{id: "news-i-m-excited-to-be-one-of-the-publicity-chairs-for-the-1st-international-conference-on-engineering-digital-twins-edtconf-2024-in-linz-austria",
          title: 'I’m excited to be one of the publicity chairs for the 1st International...',
          description: "",
          section: "News",},{id: "news-our-paper-towards-a-systematic-reporting-framework-for-digital-twins-a-cooperative-robotics-case-study-has-been-accepted-in-the-simulation-journal-a-pre-print-is-available",
          title: 'Our paper “Towards a Systematic Reporting Framework for Digital Twins: A Cooperative Robotics...',
          description: "",
          section: "News",},{id: "news-our-paper-towards-ontological-service-driven-engineering-of-digital-twins-has-been-accepted-at-the-1st-international-conference-on-engineering-digital-twins-edtconf-2024",
          title: 'Our paper “Towards Ontological Service-Driven Engineering of Digital Twins” has been accepted at...',
          description: "",
          section: "News",},{id: "news-we-have-contributed-to-the-book-the-engineering-of-digital-twins-which-is-now-available",
          title: 'We have contributed to the book “The Engineering of Digital Twins”, which is...',
          description: "",
          section: "News",},{id: "news-our-paper-towards-ontological-service-driven-engineering-of-digital-twins-has-won-the-best-short-paper-award-at-the-1st-international-conference-on-engineering-digital-twins-edtconf-2024-pre-print-video",
          title: 'Our paper “Towards Ontological Service-Driven Engineering of Digital Twins” has won the Best...',
          description: "",
          section: "News",},{id: "news-i-presented-our-sosym-paper-fault-localization-in-dsltrans-model-transformations-by-combining-symbolic-execution-and-spectrum-based-analysis-at-models-2024-and-won-the-sosym-journal-first-award",
          title: 'I presented our SoSyM paper “Fault localization in DSLTrans model transformations by combining...',
          description: "",
          section: "News",},{id: "news-i-presented-in-the-polytechnique-course-log8704-développement-logiciel-en-réalité-étendue-xr-software-development-my-presentation-was-titled-digital-twins-introductions-and-intersections",
          title: 'I presented in the Polytechnique course LOG8704 - Développement logiciel en réalité étendue...',
          description: "",
          section: "News",},{id: "news-i-m-thrilled-that-our-paper-building-domain-specific-machine-learning-workflows-a-conceptual-framework-for-the-state-of-the-practice-has-been-accepted-for-a-journal-first-presentation-at-icse-2025-in-ottawa",
          title: 'I’m thrilled that our paper Building Domain-Specific Machine Learning Workflows: A Conceptual Framework...',
          description: "",
          section: "News",},{id: "news-i-m-honoured-to-serve-on-the-program-committee-for-the-acm-ieee-international-conference-on-model-driven-engineering-languages-and-systems-models-2025",
          title: 'I’m honoured to serve on the Program Committee for the ACM/IEEE International Conference...',
          description: "",
          section: "News",},{id: "news-our-paper-comrat-commit-message-rationale-analysis-tool-has-been-accepted-in-the-international-conference-on-mining-software-repositories-msr",
          title: 'Our paper CoMRAT: Commit Message Rationale Analysis Tool has been accepted in the...',
          description: "",
          section: "News",},{id: "news-the-oakes-lab-will-be-welcoming-angelica-portocarrero-to-our-lab-this-summer-as-a-mitacs-globalink-intern-welcome-angelica",
          title: 'The Oakes Lab will be welcoming Angelica Portocarrero to our lab this summer...',
          description: "",
          section: "News",},{id: "news-i-had-the-opportunity-to-present-my-research-to-the-visiting-delegation-from-the-korea-aerospace-research-institute-kari-at-polytechnique-montréal-to-discuss-the-challenges-and-advancements-in-advanced-air-mobility-aam",
          title: 'I had the opportunity to present my research to the visiting delegation from...',
          description: "",
          section: "News",},{id: "news-our-simulation-special-issue-modeling-and-simulation-for-software-intensive-systems-from-iot-to-digital-twins-is-now-published",
          title: 'Our SIMULATION special issue Modeling and Simulation for Software Intensive Systems from IoT...',
          description: "",
          section: "News",},{id: "news-i-ve-accepted-the-student-volunteers-co-chair-position-for-the-foundations-of-software-engineering-fse-conference-2026-held-in-montréal",
          title: 'I’ve accepted the Student Volunteers Co-Chair position for the Foundations of Software Engineering...',
          description: "",
          section: "News",},{id: "news-i-will-be-student-volunteers-co-chair-for-the-acm-ieee-international-conference-on-model-driven-engineering-languages-and-systems-models-2025-held-in-ann-arbor-michigan",
          title: 'I will be Student Volunteers Co-Chair for the ACM/IEEE International Conference on Model-Driven...',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-entitled-accelerating-digital-twin-research-and-engineering-in-prof-istvan-david-s-engineering-digital-twins-course-at-mcmaster-university-the-slides-are-available-here-slides",
          title: 'I gave a talk entitled “Accelerating Digital Twin Research and Engineering” in Prof....',
          description: "",
          section: "News",},{id: "news-our-paper-automated-extraction-and-analysis-of-developer-s-rationale-in-open-source-software-has-been-accepted-at-fse-2025",
          title: 'Our paper Automated Extraction and Analysis of Developer’s Rationale in Open Source Software...',
          description: "",
          section: "News",},{id: "news-i-was-thrilled-to-see-the-student-presentations-in-my-digital-twin-engineering-class",
          title: 'I was thrilled to see the student presentations in my Digital Twin Engineering...',
          description: "",
          section: "News",},{id: "news-we-had-another-semtl-meeting-at-concordia-it-was-well-attended-by-participants-many-heading-to-icse",
          title: 'We had another SEMTL meeting at Concordia. It was well-attended by participants, many...',
          description: "",
          section: "News",},{id: "news-i-had-a-great-time-at-icse-the-premier-software-engineering-conference-i-was-poster-co-chair-presented-our-paper-on-building-domain-specific-machine-learning-workflows-a-conceptual-framework-for-the-state-of-the-practice-and-our-paper-titled-comrat-commit-message-rationale-analysis-tool-it-was-also-nice-to-see-the-semtl-community-at-icse",
          title: 'I had a great time at ICSE, the premier software engineering conference. I...',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-on-systematic-digital-twin-reporting-at-the-edt-community-talks-there-is-a-recorded-video",
          title: 'I gave a talk on Systematic Digital Twin Reporting at the EDT.Community talks....',
          description: "",
          section: "News",},{id: "news-i-went-to-concordia-university-s-next-generation-cities-institute-to-present-my-work-on-accelerating-digital-twin-research-and-engineering",
          title: 'I went to Concordia University’s Next-Generation Cities Institute to present my work on...',
          description: "",
          section: "News",},{id: "news-we-had-a-very-successful-software-engineering-for-machine-learning-applications-semla-event-i-was-poster-chair-chaired-a-panel-had-an-semtl-meeting-and-presented-a-tutorial-on-what-is-a-digital-twin-and-how-do-i-build-one",
          title: 'We had a very successful Software Engineering for Machine Learning Applications (SEMLA) event....',
          description: "",
          section: "News",},{id: "news-we-have-had-two-papers-accepted-at-the-international-conference-on-engineering-digital-twins-dtinsight-a-tool-for-explicit-interactive-and-continuous-digital-twin-reporting-and-engineering-a-digital-twin-for-the-monitoring-and-control-of-beer-fermentation-sampling",
          title: 'We have had two papers accepted at the International Conference on Engineering Digital...',
          description: "",
          section: "News",},{id: "news-our-paper-model-based-systems-engineering-perspectives-a-survey-of-practitioner-experiences-and-challenges-has-been-accepted-at-sam-2025",
          title: 'Our paper Model-Based Systems Engineering Perspectives: A Survey of Practitioner Experiences and Challenges...',
          description: "",
          section: "News",},{id: "news-we-had-a-very-successful-time-in-grand-rapids-mi-at-models-2025-and-edtconf-2025-i-was-also-lead-organizer-of-the-onto-nexus-workshop-2025-international-workshop-on-ontological-modeling-and-analysis-co-located-with-models-2025",
          title: 'We had a very successful time in Grand Rapids, MI at MODELS 2025...',
          description: "",
          section: "News",},{id: "news-i-was-honoured-to-present-a-guest-lecture-in-dr-maged-elaasar-s-raise-course-at-ucla-titled-what-is-a-digital-twin-and-how-do-i-build-one",
          title: 'I was honoured to present a guest lecture in Dr. Maged Elaasar’s RAISE...',
          description: "",
          section: "News",},{id: "news-i-have-been-awarded-a-best-reviewer-award-for-2025-from-the-international-journal-on-software-and-systems-modeling-sosym",
          title: 'I have been awarded a Best Reviewer Award for 2025 from the International...',
          description: "",
          section: "News",},{id: "news-i-presented-our-work-on-towards-ontology-based-digital-twin-service-construction-and-reporting-at-sig-llodia-lecture-3-i-appreciated-the-engaging-and-honest-discussion-we-had",
          title: 'I presented our work on Towards Ontology-based Digital Twin Service Construction and Reporting...',
          description: "",
          section: "News",},{id: "news-i-m-honoured-to-serve-on-the-program-committee-for-the-ieee-acm-international-conference-on-automated-software-engineering-ase-2026",
          title: 'I’m honoured to serve on the Program Committee for the IEEE/ACM International Conference...',
          description: "",
          section: "News",},{id: "news-it-was-a-pleasure-to-present-a-guest-lecture-in-prof-istvan-david-s-engineering-digital-twins-course-cas-782-at-mcmaster-university-titled-what-does-your-digital-twin-do-a-framework-and-tooling-for-systematic-dt-reporting-slides",
          title: 'It was a pleasure to present a guest lecture in Prof. Istvan David’s...',
          description: "",
          section: "News",},{id: "news-the-second-edition-of-the-onto-nexus-workshop-international-workshop-on-ontological-modelling-and-analysis-will-be-held-in-2026-all-details-are-available-at-the-workshop-website-please-consider-submitting-your-papers-and-i-hope-to-see-you-there",
          title: 'The second edition of the onto:Nexus Workshop (International Workshop on Ontological Modelling and...',
          description: "",
          section: "News",},{id: "news-as-general-chair-i-warmly-welcome-everyone-to-semla-2026-software-engineering-for-machine-learning-applications-on-the-theme-of-engineering-trustworthy-and-cost-effective-ai-multi-agents-join-us-june-1-3-2026-at-polytechnique-montréal",
          title: 'As General Chair, I warmly welcome everyone to SEMLA 2026 (Software Engineering for...',
          description: "",
          section: "News",},{id: "news-our-paper-model-based-digital-twin-engineering-insights-challenges-and-future-directions-has-been-published-in-the-journal-on-software-and-systems-modelling-sosym-it-was-co-authored-with-philipp-zech-souvik-barat-benjamin-nast-judith-michael-steffen-zschaler-balbir-barn-and-ruth-breu",
          title: 'Our paper Model-based Digital Twin Engineering: Insights, Challenges, and Future Directions has been...',
          description: "",
          section: "News",},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Bentley_Oakes_CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%62%65%6E%74%6C%65%79.%6F%61%6B%65%73@%70%6F%6C%79%6D%74%6C.%63%61", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=x9H9H4QAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/bentley-oakes", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-7558-1434", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Bentley-Oakes/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
