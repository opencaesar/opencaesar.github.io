---
layout: paper
title: "Towards Understanding and Analyzing Rationale in Commit Messages using a Knowledge Graph Approach"
author: ["Mouna Dhaouadi", "Bentley Oakes", "Michalis Famelis"]
author_image: mouna.png
tag: [openCAESAR, OML, Ontology]
categories: [MBSE]
---

## Abstract

Extracting rationale information from commit messages allows developers to better understand a system and its past development. Here we present our ongoing work on the Kantara end-to-end rationale reconstruction pipeline to a) structure rationale information in an ontologically-based knowledge graph, b) extract and classify this information from commits, and c) produce analysis reports and visualizations for developers. We also present our work on creating a labelled dataset for our running example of the Out-of-Memory component of the Linux kernel. This dataset is used as ground truth for our evaluation of NLP classification techniques which show promising results, especially the multi-classification technique XGBoost.