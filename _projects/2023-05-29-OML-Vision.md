---
layout: project
title: "OML Vision"
author: "Maged Elaasar"
author_image: maged.png
tag: [OML, VSCode]
categories: [IMCE]
current: true
image:
  feature: oml-vision-2.png
  credit: Jet Propulsion Laboratory
---

## Project Summary

The OML Vision project aims to develop a Visual Studio (VS) Code extension that provides modern user-friendly customizable webviews to edit OML files with. The extension can be installed on any VS Code IDE (Desktop, Codespaces, Gitpod, etc).

Our goal is to develop table-based and form-based (property sheet) views that are comparable to ones available in the Eclipse-based OML Roseeta IDE but using modern web-based UI frameworks. Our objective is to develop a prototype to assess the cost of a full implementation, but we will strive to complete the implementation in the project's timeframe.

Our extension's architecture consists of a backend and a frontend. The backend loads OML files, exposes SPARQL query/update endpoints, provide wrapper Typescript APIs, supports incremental reasoning on update, and saves the updated OML files. The frontend provides (table, diagram, treem, form) webviews developed using React.js that uses the provided APIs to query/update the OML data and can be customized using configuration files.

Ultimately, the project seeks to reimagine how system modelers interact with OML by abstracting its complexities behind a more accessible and user-friendly web-based interface.  This approach will empower users to effectively utilize the robust capabilities of OML for systems modeling without needing to master every detail of the language. By enhancing the user experience, we hope to encourage a broader adoption of OML.

## Results

We released an alpha version of the VS Code extension of OML Vision. This version loads an OML dataset to Fuseki and allows visualize and editing it using custom declaratively-defined UI viewpoints. We have configured the Fuseki triple to have an incremental rule-based reasoner. This means every time the description models are changed in Fuseki, the reasoner runs to generate/update entailments and make them available to queries made by the UI viewpoints during the authoring session. This simplies the queries and enables the design of interesting dynamic viewpoints. We also use the newly developed [OWL-to-OML](/projects/2024-03-29-OWL-to-OML) interface to convert the changed description models back to OML format.

{% include youtube.html id="chnKBsok-rY" %}

## Project Team

- [Maged Elaasar, Ph.D (PI)](/contributors/Maged%20Elaasar.html)
- [David Wagner (co-I)](/contributors/David%20Wagner.html)

## Sponsors

[<img width="400" src="https://www.opencaesar.io/assets/img/jpl-logo.png"/>](https://www.jpl.nasa.gov/)