---
layout: post
title: "The IMCE Principles"
author: "Steve Jenkins"
author_image: stevej.png
tag: [MBSE, IMCE, CAESAR]
categories: [IMCE]
image:
  feature: jpl.png
  credit: Jet Propulsion Laboratory
---

# The IMCE Implementation Principles

The principles of the Integrated Model Centric Engineering (IMCE) approach elaborate the two ideas in its name:

## 1. Integration

Integration is whatever enables us to execute a unified engineering process that, while tailored and adapted to particulars, does not fundamentally change character from one discipline to another, from one life-cycle phase to another, from one project to another. 

### Integrated Analysis

The key idea is the separation of structural and behavioral descriptions of systems. This allows multiple behavioral viewpoints for the same structure. It also allows use of general-purpose engines for analysis. Moreover, if we use common (graph) conventions to capture knowledge across disciplines, we can use standard procedures to synthesize a system viewpoint.

### Integrated Information

The key idea is that the theory and practice of the Semantic Web is designed to integrate information from across origins, disciplines, viewpoints, etc. Adherence to this theory and practice will help create a principled approach to managing information and knowledge, including how it is represented, who is responsible for it, and what are the proper uses for it. Extending a set of core concepts (e.g., component, function, interface, requirement, etc.) will help develop general-purpose libraries and applications that span origins, disciplines, viewpoints, etc. This is the purpose of the IMCE vocabularies.

### Integrated Processes

The key idea is that the engineering processes are construed, at least in part, as transformations on information artifacts. Many processes, e.g., conceptual design, are purely transformations on information. Others, e.g., manufacturing, produce information (e.g., records) as by-products of their intended purpose. Formally defining these artifacts (using integrated information practices) helps us compose process steps into workflows (some of which can be automated). Formal definition for artifacts enables validity checking on process start and reduces risk due tomalformed input.

### Integrated Technology

The key idea is that effective automation requires that technology agents invoke operations on each other. This necessitates common conventions for not only data, but also services, service discovery, authentication and authorization, invocation, etc. We need to settle on technology frameworks (the fewer the better) that provide mechanisms for interoperation across tools, platforms, disciplines, etc.

## 2. Model-Centricity

Model centricity means the engineering process is construed at least in part as operations on models.

### Single Source of Authority

The key idea is that every assertion in a model is traceable to the single authority who made it. Example: spacecraft mass is fundamentally unknowable, but we can estimate it by various techniques:
- Authority A1 may give a point estimate by CAD analysis
- Authority A2 may give a range by measurement
- Authority A3 may give a point estimate by historical analogy
The model should record, not only the estimates, but also their provenance: authorities, methods, calibrations, etc.

### Uniform Access

The key idea is that there should be a standard access point and standard query language to retrieve any information adhering to our integrated information principles. Knowing the name of any property should be sufficient to find its value, associated provenance, etc.
assuming proper authorization.

### Life Cycle Gates Bound to Model State Transitions

The key idea is that each life cycle gate should have a clear set of model state criteria, e.g., required content, validation, analyses, products, and concurrence. The life cycle is specified as a sequence of transformations that advance the model from one defined state to the next.