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

The [OpenCAESAR](http://opencaesar.io) and [OpenMBEE](https://www.openmbee.org/) teams have frequently fielded questions about what the differences are between the two platforms. In this article we explain why that question was allowed to come up, but also a plan to collaborate around common principles going forward.

## History

[OpenCAESAR](http://opencaesar.io) and [OpenMBEE](https://www.openmbee.org/) are both open source projects supporting toolkits that can be used by modelers to help with various aspects of model expression/authoring, analysis, transformation, and storage. Both projects began at NASA's Jet Propulsion Laboratory (operated by the California Institute of Technology) as offshoots of model development work on flight projects. The separate platforms were developed under separate sponsorship and for separate customers but that's no reason to not work together. The teams recently got together and agreed to partner toward building complementary tool suites.

The two open source projects each include a suite of tools but also promote larger platform architectures that explain a vision for how descriptive and other kinds of models can be connected into engineering process -- most specifically, system engineering methodology. Method includes aspects such as change control, transformation of models into reports and other forms or views needed by other tools, or users, and various forms of model analysis that can compute things like completeness and detect mistakes.

## Complementary Platforms

OpenCAESAR is rooted in using the Web Ontology Language (OWL) and the Ontological Modeling Language (OML) which is just a concise transformation of a subset of OWL. The "platform" consists of a set of tools orchestrated through java and Gradle to perform model authoring, transformation and analysis. The platform also includes an eclipse-based IDE for authoring models and another IDE based on VSCode.

OpenMBEE includes several applications and utilities that support a modeling approach. These include: the Model Management System (MMS), a graph database that leverages standards APIS to enable queryable and graphical traceability of modeling data, View Editor, the web application that enables the creation of web-based editable model views, and Model Development Kits (MDKs) that handle the translations between COTS software and the OpenMBEE platform. The implementation of OpenMBEE focuses on the open source software projects being compatible to engineers' favorite language for modeling; it is a "bring your own modeling language" solution. 

Both platforms focus on the use of graph-based model information, and making this data accessible through queries to enable analysis and transformation.  Queries are supported through standard web APIs and languages such as SPARQL and can be accessed through a wide variety of scripting and programming languages. Both platforms have associations to SysML although neither specifically depends on SysML. 

Both platforms had their beginnings in engineering projects that were using Cameo System Modeler to author models and where users were frustrated that model data was inaccessible to analysis outside of the tool. Getting model data out into some external standards-based form to enable open analysis and transformation of model data has been the primary goal of both projects. Both project teams independently reached the conclusion that the senamtic web and W3C provides the most applicable set of standards for representing graph-based semantic information, specifically RDF and OWL.

Both open source projects are supported by communities of contributors and users and we hope that, through this partnership, we can better share the benefits of both platforms with our user communities.
