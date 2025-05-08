---
layout: event
title: "Developing an OML Co-Pilot - exploring AI-assisted Ontological Modeling"
author: "Ajay Sreekumar"
tag: [ontoNexus]
categories: [event]
image:
  feature: onto_Nexus_Forum_2025.png
  credit: openCAESAR
  url: /events/onto-Nexus-Forum-2025
---

## Abstract

This presentation will cover my research project exploring the development of an AI-powered co-pilot tool for the Ontological Modeling Language (OML). Drawing inspiration from GitHub Copilot's success in code generation, I investigated how large language models (LLMs) could be leveraged to assist systems engineers in creating valid OML vocabularies.

The talk will explore my journey through multiple approaches including zero-shot, few-shot, and fine-tuning experiments with various LLMs like ChatGPT-4, DeepSeek, Mistral, and CodeLLama. I'll discuss the challenges of training models to understand OML's precise grammar requirements and my experiments with Retrieval-Augmented Generation (RAG) using sentence transformers for improved similarity search.

A significant focus will be on my development of a structured workflow that incorporates grammar validation using ANTLR and Lark parsers, vocabulary extension validation, and an iterative feedback mechanism that guides LLMs toward grammatically correct OML code generation. I'll also share insights from my work creating JSON schema-based approaches for structured OML generation and the trade-offs between different model sizes and prompt engineering techniques.

This research demonstrates both the potential and limitations of AI assistants for specialized modeling languages, highlighting how combined approaches using RAG, grammar validation, and iterative feedback can overcome limitations of standalone LLMs when generating domain-specific code.

## Speaker

![Ajay Sreekumar](img/Sreekumar.jpeg){: style="float: left;margin-right: 1em; width: 15%"}

<h2><a href="mailto:ajaysreekumar@arizona.edu">Ajay Sreekumar</a></h2> is a passionate Data Scientist with a strong background in Data Analysis, Machine Learning, and Software Engineering. With hands-on experience in various domains, I aim to bridge the gap between data and actionable insights.

## Presentation

{% include youtube.html id="fleR6-Fiazo" %}
