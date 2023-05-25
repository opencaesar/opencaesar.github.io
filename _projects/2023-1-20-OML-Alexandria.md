---
layout: project
title: "OML Alexandria"
author: "Maged Elaasar"
author_image: maged.png
tag: [OML]
categories: [IMCE]
current: false
image:
  feature: omlalexandria.png
  credit: https://worldvectorlogo.com/zh/logo/alexandria
---

## Project Summary

Systems Engineering is an important subfield of engineering that focuses on integrating complex systems together. An important aspect of any engineering practice, especially systems engineering, is problem definition and analysis. [OML (Ontological Modeling Language)](https://github.com/opencaesar/oml) is a language that defines systems engineering vocabularies and uses them to describe systems, which is critical for capturing knowledge. To enable widespread support of OML and streamline the process of writing, validating, and tracking OML files, it is critical to have language support tooling integrated into popular development platforms. 

Microsoft Visual Studio Code is one such popular source-code editor for development in many languages. VS Code is one of the most popular editors in the world. It is cross-platform and even supports browser-based instances like [vscode.dev](https://vscode.dev/), [gitpod](http://gitpod.io/) and [codespaces](https://github.com/features/codespaces). Among the benefits of cloud-based editors are that they require no installation, update automatically, can easily sync across devices, perform better on low-powered hardware, standardize the editing experience across heterogeneous devices, and can be accessed from almost anywhere.

One of the reasons for VS Code’s widespread popularity is that it can support development in nearly any language through the use of extensions that implement the
[Language Server Protocol (LSP)](https://microsoft.github.io/language-server-protocol/). LSP defines an application-neutral interface for editors like VS Code to communicate with a language server that provides helpful features like auto complete, go to definition, and code linting. Implementing such a language server used to be a tedious task. However, new frameworks like [Langium](https://www.typefox.io/blog/langium-1.0-a-mature-language-toolkit/) have made this significantly easier. Langium can generate a language server with many features implemented by default for any language defined with a BNF-like grammer (including OML). Since Langium is implemented in TypeScript, the server can be easily wrapped in a VS Code extension and run on the client instead of requiring a separate server.

OML currently has an Eclipse-based editor called [Rosetta](https://github.com/opencaesar/oml-rosetta) and a VS Code extension called [Luxor](https://github.com/opencaesar/oml-luxor). Both of these development environments require the OML language server to run as a separate process on the client machine or on a separate server, which makes using browser-based editors difficult or impossible for OML development. Our project is to develop a proof of concept cloud-friendly OML development extension for VS Code that works with web-based editors natively. It will implement common language server functionality through the use of Langium. We also intend to implement logical validation for OML files (beyond syntax validation). If time permits, we will strive for feature parity with the existing editor implementations.

One of the primary features of the extension is to enable users to visualize their OML descriptions using diagrams. This is a critical feature of the existing OML Luxor extension, and we intend to replicate this functionality.

## Project Team

- Developers: 5 UCLA CS undergraduage students
- Mentor: Maged Elaasar

## Project Repository

[Github](https://github.com/0x65-e/oml-alexandria)

## Project Results

Click on the video below to see a demo:

{% include youtube.html id="iWXTjC5SzmY" %}
