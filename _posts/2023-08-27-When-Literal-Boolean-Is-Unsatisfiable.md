---
layout: post
title: "When Literal Boolean Is Unsatisfiable"
author: "Maged Elaasar"
author_image: maged.png
tag: [Ontology, openCAESAR, OML, KerML, SysML]
categories: [blog]
image:
  feature: unsatisfiable-literal-boolean.png
  credit: 2023-07.1 SysML v2 Release
---

## Introduction

Welcome to an in-depth exploration of the KerML and SysML v2 metamodels. Join us as we delve into the complexities of class relationships and constraints. We will examine the role of [OML](http://www.opencaesar.io/oml/) and its Description Logic (DL) reasoning in shedding light on the challenge presented by class `LiteralBoolean`, despite its apparent simplicity.

## The Cast of Characters

Our discussion revolves around various metaclasses: `LiteralBoolean`, `LiteralExpression`, `Expression`, `Step`, `Feature`, `Behavior`, `Class`, and `Classifier`. Each of these metaclasses plays a significant role in our analysis.

## The Class Hierarchy

At the core of the metamodel lies an intricate hierarchy of classes. `LiteralBoolean` is a subclass of `LiteralExpression`, which, in turn, is connected to `Expression`. This chain continues with `Expression` leading to `Step` and finally culminating with `Feature`. On the other hand, metaclass `Behavior` is a subclass of `Class` and, by extension, `Classifier`. 

## The Disjointness Dilemma

The class hierarchy above induces an interesting challenge. The absence of a common subclass between metaclasses `Classifier` and `Expression` leads to an inference that they are "disjoint" (through a special algorithm in OML known as the *bundle closure algorithm*). Moreover, the `result` property connects metaclasses `Expression` and `Feature` with a strict cardinality of exactly 1. This means each instance of `Expression` must have a `result` property value. Since the `result` property is a subproperty of the `parameter` property, this also means that each `Expression` must have a value for the `parameter` property. Since the `parameter` property has metaclass `Behavior` as its domain, the reasoner concludes that metalass `Expression` must also be a subclass of `Behavior`, as indicated by the <span style="color: red">red</span> inheritance arrow in the class diagram above. However, this new inference conflicts with the earlier one that metaclasses `Expression` and `Behavior` are disjoint.

## The Unholy Union

This situation leaves metaclasses `Expression` and `Behavior` unsatisfiable (have no valid individuals). This transitively affects `LiteralBoolean`, which, as a subclass of `Expression`, making it unsatisfiable too.

## Conclusion

In this thorough examination of interconnected classes and underlying conflicts, DL reasoning emerges as a crucial tool for gaining a deeper understanding. As you navigate the world of metamodels and systems, it is essential to appreciate the role of DL reasoning. It transforms the concept of unsatisfiability into an exploration of the intricate web of class relationships. As you venture into the realm of KerML and SysML v2 metamodels, remember that DL reasoning serves as a guiding map, helping you navigate the complex and paradoxical terrain.

## Reported Issue

[KerML-155](https://issues.omg.org/issues/KERML-155)

## Context Project

[OML Implementation of SysML v2](https://www.opencaesar.io/projects/2023-8-11-SysML-v2.html)