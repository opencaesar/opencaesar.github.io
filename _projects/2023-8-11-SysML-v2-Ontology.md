---
layout: project
title: "SysML v2 Ontology"
author: "Maged Elaasar"
author_image: maged.png
tag: [OML]
categories: [IMCE]
current: true
image:
  feature: sysmlv2.png
  credit: Object Management Group
---

## Summary

This project intends to develop an ontological representation of [SysML v2](https://www.omg.org/spec/SysML/20230201/SysML.xmi) in [OML](http://www.opencaesar.io/oml/). First, an OML vocabulary equivalent to the MOF-based metamodel of SysML v2 will be generated using a MOF2OML adapter. Second, another OML vocabulary that extends the first will be be (manually) developed to add the missing DL semantics (by setting flags and specifying rules) that are expressed in the specification but not encoded in the metamodel. Third, an OML vocabulary bundle will be developed to add disjointness axioms to the SysML v2 vocabulary. Fourth, some example SysML v2 models (from the SysML v2 working group) will be converted to OML descriptions conforming to the SysML v2 vocabulary. Fifth, some tools from [openCAESAR](https://www.opencaesar.io/) will be used to analyze and report on those models.

## Blogs

Insights gained by this project:

- [When Literal Boolean Is Unsatisfiable](/blog/2023/08/27/When-Literal-Boolean-Is-Unsatisfiable.html)
- [Two Unsatisfiable Metaclasses in SysML v2](/blog/2023/09/02/Two-Unsatisfiable-Metaclasses-In-SysML-v2.html)

## Issues

Specification issues reported by this project:

- [KERML-155](https://issues.omg.org/issues/KERML-155)
- [SYSML2-430](https://issues.omg.org/issues/SYSML2-430)

## Results

We are working as part of the Flexo-SysMLv2 team proposing an OWL representation for the abstract syntax of SysML v2 as normative. 
The following repo is used as a sandbox for publishing drafts of this representation (in OWL and OML) as it evolves based on the team's recommendations.

- [SysML v2](https://github.com/opencaesar/sandbox/tree/master/sysml2)

This presentation was given at the OpenMBEE Workshop along side INCOSE IW 2025:

<style>
.responsive-wrap iframe{ max-width: 100%;}
</style>
<div class="responsive-wrap">
<!-- this is the embed code provided by Google -->
  <iframe src="https://docs.google.com/presentation/d/1lAV_u5BefHnMDrQ3AOeieg6z9DiMxl_gFlPoaCMZrmM/edit?usp=sharing" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
<!-- Google embed ends -->
</div>

## Team

- [Maged Elaasar](/contributors/Maged%20Elaasar.html), Ph.D., Modelware

## Sponsors

[![Modelware](/assets/img/modelware.png)](https://modelware.io/)