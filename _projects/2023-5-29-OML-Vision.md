---
layout: project
title: "OML Vision"
author: "Aaron Levitt, Aaron Minkov, Richie Wong"
author_image: aaron.jpeg
tag: [OML, VSCode]
categories: [IMCE]
current: true
image:
  feature: oml-vision.png
  credit: Jet Propulsion Laboratory
---

## Project Summary

The OML Vision project aims to develop a Visual Studio (VS) Code extension that provides modern user-friendly customizable webviews to edit OML files with. The extension can be installed on any VS Code IDE (Desktop, Codespaces, Gitpod, etc).

Our goal is to develop table-based and form-based (property sheet) views that are comparable to ones available in the Eclipse-based OML Roseeta IDE but using modern web-based UI frameworks. Our objective is to develop a prototype to assess the cost of a full implementation, but we will strive to complete the implementation in the project's timeframe.

Our extension's architecture consists of a backend and a frontend. The backend loads OML files, exposes SPARQL query/update endpoints, provide wrapper Typescript APIs, supports incremental reasoning on update, and saves the updated OML files. The frontend provides (table, diagram, treem, form) webviews developed using React.js that uses the provided APIs to query/update the OML data and can be customized using configuration files.

Ultimately, the project seeks to reimagine how system modelers interact with OML by abstracting its complexities behind a more accessible and user-friendly web-based interface.  This approach will empower users to effectively utilize the robust capabilities of OML for systems modeling without needing to master every detail of the language. By enhancing the user experience, we hope to encourage a broader adoption of OML.

### Namesake Origin

<https://www.futureengineers.org/nametherover/gallery/23269/>

## Project Team

- [Maged Elaasar, Ph.D (Mentor)](/contributors/Maged%20Elaasar.html)
- [David Wagner (Mentor)](/contributors/David%20Wagner.html)
- [Aaron Levitt (Software Systems Engineer)](/contributors/Aaron%20Levitt.html)
- [Aaron Minkov (Intern, UCLA)](https://www.linkedin.com/in/aaronminkov)
- [Richie Raymond Wong (Intern, CalPoly Pomona)](https://www.linkedin.com/in/raymond-exe)

---