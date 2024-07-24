---
layout: post
title: "openCAESAR and openMBEE Partnership"
author: "David Wagner, Marie Piette, Maged Elaasar"
author_image: wagner.jpg
tag: [MBSE, IMCE, OPENCAESAR, OPENMBEE]
categories: [blog]
image:
  feature: jpl.png
  credit: Jet Propulsion Laboratory
---

# OpenCAESAR and OpenMBEE Announce Partnership

The [openCAESAR](http://www.opencaesar.io) and [OpenMBEE](https://www.openmbee.org/) teams have frequently fielded questions about what the differences are between the two platforms. In this post, we explain why that question often came up. We also communicate a plan for the two teams to collaborate going forward.

## History

[openCAESAR](http://opencaesar.io) and [OpenMBEE](https://www.openmbee.org/) are both open source projects supporting tool suitss that can be used by modelers to help with various aspects of model expression/authoring, analysis, transformation, and storage. Both projects began at NASA's Jet Propulsion Laboratory (JPL) (operated by the California Institute of Technology) as offshoots of model development work on flight projects. The two projects had separate sponsors and supported separate customers. However, the two teams recently agreed to partner toward building complementary solutions.

Both solutions realize architectures where descriptive and other kinds of models can be connected into an engineering process -- most specifically, a system engineering method. The method includes aspects such as change control, transformation of models into reports and views needed by other users, or tools, and various forms of model analysis that can compute things like model consistency and completeness, and detect mistakes.

## Complementary Solutions

openCAESAR offers a framework that supports modeling and analysis with the Ontological Modeling Language (OML), which is a concise language that represents a subset of the Web Ontology Language (OWL) . The framework consists of a set of Java/Gradle tools that can be orchestrated to perform model authoring, transformation and analysis. It also includes an eclipse-based IDE for authoring models called OML Rosetta and another IDE based on VSCode called OML Vision. The framework allows modelers to define their own modeling vocabulary in OML then use it to describe systems also in OML. In this way, it is a "bring your own modeling language" solution.

OpenMBEE includes several applications and utilities that support a modeling approach. These include: the Model Management System (MMS), a graph database that leverages standards APIS to enable queryable and graphical traceability of modeling data, View Editor, the web application that enables the creation of web-based editable model views, and Model Development Kits (MDKs) that handle the translations between COTS software and the OpenMBEE platform. The implementation of OpenMBEE focuses on the open source software projects being compatible to engineers' favorite language for modeling; therefore, it is also a "bring your own modeling language" solution. 

Both solutions focus on the use of graph-based model information, and making this data accessible through queries to enable analysis and transformation.  Queries are supported through standard web APIs and languages such as SPARQL and can be accessed through a wide variety of scripting and programming languages. Both solutions have associations to SysML although neither specifically depends on or prescribe SysML. 

Both solutions had their beginnings in engineering projects that were using SysML tools to author models and where users were frustrated that model data was inaccessible to analysis outside of the tool. Getting model data out into some external standards-based form to enable open analysis and transformation of model data has been the primary goal of both projects. Both project teams independently reached the conclusion that the W3C standards for the senamtic web, specifically RDF and OWL, provide the most applicable set of standards for representing graph-based semantic information.

Both open source projects are supported by communities of contributors and users and we hope, through this partnership, that we can better share the benefits of both solutions with our user communities.
