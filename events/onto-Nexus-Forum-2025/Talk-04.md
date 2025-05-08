---
layout: event
title: "Ontologies in Finance and Manufacturing"
author: "Elisa Kendall"
tag: [ontoNexus]
categories: [event]
image:
  feature: onto_Nexus_Forum_2025.png
  credit: openCAESAR
  url: /events/onto-Nexus-Forum-2025
---

## Abstract

The Identification of Medicinal Products (IDMP) is a set of ISO standards for uniquely
identifying and describing pharmaceutical and medicinal products and the substances they
contain throughout the product lifecycle [1-6]. The deadline for compliance with these standards
has been a moving target, due to challenges in implementation. In the European Union, there
have been several target dates for implementation, the most recent being Q1 2023 [7], but the
pharmaceutical companies have found it difficult to do so, and compliance is spotty as a
consequence. By 2023, marketing authorization holders and the European Medicines Agency
(EMA) were supposed to be able to submit and process data in IDMP format, but conformance is
only beginning to take hold, primarily due to the work to develop an ontology, Identification of
Medicinal Products Ontology (IDMP-O). In the United States, the FDA has not announced a
deadline, but they encourage usage and have published guidelines for adoption [8].
Pharmaceutical companies recognized a few years ago that the standards were ambiguous in
many ways, confusing in others, and that they were insufficient to meet the industry and
regulatory goals related to safety, accuracy, completeness and consistency in reporting, labeling
cost reduction, and others. A number of key stakeholders created a project through the Pistoia
Alliance, a pharmaceutical industry consortium, to develop an ontology to address the
shortcomings in the ISO standards and improve the likelihood that they would be successful in
compliance [9]. The project team, sponsored initially by six pharmaceutical companies for the
initial prototyping phase and many more for the development effort over the last 2+ years,
released IDMP-O 1.2 in 2024. The resulting ontology is open source and freely available from
the BioPortal. While coverage of the six ISO standards is incomplete, the current version of the
ontology addresses the primary use cases that stakeholders identified over the course of the
project.

The approach taken to manage the development effort includes not only adding content per use
case to the ontology but mapping to example, reference, and internal proprietary data, with
regression testing with every change made in order to guarantee that a high level of quality is
maintained. Policies for metadata, naming, and the consistent use of patterns for certain
constructs have also helped to ensure the quality of the resulting ontology. But, the content is
complex, including multilingual and cultural labeling differences in every jurisdiction world-
wide. Continuing efforts are focused on improving documentation, adding use cases that bridge
the regulatory to manufacturing environment(s), new examples, and ensuring that the ontology
continues to meet stakeholder goals.

The Financial Industry Business Ontology (FIBO) [10], was initiated in 2008 and has evolved
continuously since. FIBO’s initial focus was on the unambiguous representation of securities
master data as it relates to the broader financial marketplace. Coverage of master data for many
securities is largely complete and widely used by industry players. As a result, recent extensions
have focused on more complex use cases, such as enabling integration of metrics for emissions
improvements in order to provide better rates or collateral requirements for sustainability-linked
lending, representation of parameters needed for portfolio analyses, counterparty risk, and the
like as well as to drive machine-learning and improve results from large and custom language
model queries. Many of these use cases require very large data sets, management of change in
the data over time, and the ability to leverage the data for predictive analytics, among other
challenges for ontology work, not unlike challenges needed, for example, to support the
development of digital twins in manufacturing.

In this talk, Ms. Kendall, who is the lead ontologist for the EDM Council, including the IDMP-O
and FIBO projects, will provide a high-level overview of the issues leading to the development
of these projects, describe some of the use cases addressed to date and on the project roadmap,
present some of the insights with respect to patterns that have been codified in several Object
Management Group (OMG) standards, present a few lessons learned to date, describe some of
the tools used in our development efforts, and provide pointers for those that are interested in
learning more.

### References:
1. ISO 11238:2018 Health informatics - Identification of medicinal products - Data elements
and structures for the unique identification and exchange of regulated information on substances,
https://www.iso.org/standard/69697.html

2. ISO 11239:2023 Health informatics - Identification of medicinal products - Data elements
and structures for the unique identification and exchange of regulated information on
pharmaceutical dose forms, units of presentation, routes of administration and packaging,
https://www.iso.org/standard/81133.html

3. ISO 11240:2012 Health informatics - Identification of medicinal products - Data elements
and structures for the unique identification and exchange of units of measurement,
https://www.iso.org/standard/55033.html

4. ISO 11615:2017 Health informatics - Identification of medicinal products - Data elements
and structures for the unique identification and exchange of regulated medicinal product
information, https://www.iso.org/standard/70150.html

5. ISO 11616:2017 Health informatics - Identification of medicinal products - Data elements
and structures for the unique identification and exchange of regulated pharmaceutical product
information, https://www.iso.org/standard/70044.html

6. ISO 21090:2011 Health informatics - Harmonized data types for information interchange,
https://www.iso.org/standard/35646.html

7. See https://www.ema.europa.eu/en/human-regulatory-overview/research-and-development/
data-medicines-iso-idmp-standards-overview

8. See Identification of Medicinal Products — Implementation and Use | FDA.

9. See https://www.pistoiaalliance.org/projects/current-projects/idmp-ontology/

10. See https://spec.edmcouncil.org/fibo/ and https://github.com/edmcouncil/fibo, and
https://www.ontotext.com/blog/the-power-of-ontologies-and-knowledge-graphs-for-the-
financial-industry/ for a vendor example

## Speaker

![Elisa Kendall](img/Kendall.jpg){: style="float: left;margin-right: 1em;"}

<h2><a href="mailto:ekendall@thematix.com">Elisa Kendall</a></h2> is a Partner in Thematix Partners LLC and graduate-level lecturer in computer science, focused on data management, data governance, knowledge representation, and decisioning systems. Her consulting practice includes business and information architecture, knowledge representation strategies, and ontology design, development, and training for clients in financial services, government, manufacturing, media, pharmaceutical, and retail domains. Recent projects have focused on use of ontologies to drive natural language processing, machine learning, interoperability, and other knowledge graph-based applications. Elisa represents knowledge representation, ontology, information architecture, and data management concerns on the Object Management Group (OMG)’s Architecture Board, and is co-editor of the Ontology Definition Metamodel (ODM), Commons Ontology Library (COMMONS), APIs for Knowledge Platforms (API4KP), Multiple Vocabulary Facility (MVF), and Languages, Countries, and Codes (LCC) standards. Ms. Kendall is currently lead ontologist for the EDM Council and a number of leading pharmaceutical companies. She is also on the technical oversight board for and participates in the NIST-sponsored Industrial Ontology Foundry activity developing standardized ontologies for manufacturing. Ms. Kendall also team-teaches Ontology Engineering at Rensselaer Polytechnic Institute biannually. She holds a B.S. in Mathematics and Computer Science from UCLA, and an A.M in Linguistics from Stanford University.

## Presentation

{% include youtube.html id="Yq3OCXbNNwc" %}
