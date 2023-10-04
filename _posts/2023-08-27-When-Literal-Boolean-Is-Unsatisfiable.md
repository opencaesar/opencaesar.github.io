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

At the core of the metamodel lies an intricate hierarchy of classes. `LiteralBoolean` is a subclass of `LiteralExpression`, which, in turn, is connected to `Expression`. This chain continues with `Expression` leading to Step and finally culminating with `Feature`.

## The Disjointness Dilemma

A noteworthy development occurs when `Behavior` becomes a subclass of `Class` and, by extension, `Classifier`. This addition prompts an interesting challenge. The absence of a common subclass between the concrete metaclasses `Classifier` and Expre`ssion leads to an inference of "disjoint" through a specialized algorithm in OML, known as the *bundle closure algorithm*. This situation results in a conflict between `Expression` and `Behavior`.

## The Property Relations

Property relations introduce additional layers of complexity. The `result` property connects `Expression` and `Feature` with a strict cardinality of exactly 1. Furthermore, the `result` property is a subproperty of the `template` property. The `template` property has `Behavior` as its domain and `Feature` as its range.

## The Conundrum Unveiled

Here is where our analysis takes an intriguing turn. Each instance of `Expression` must have a `result`. This strict cardinality requirement necessitates the presence of a parameter. Consequently, `Expression` assumes both `Expression` and `Behavior` roles, as indicated by the inferred <span style="color: red">red</span> inheritance arrow in the class diagram mentioned earlier. However, this dual role presents a conflict as `Expression` and `Behavior` are disjoint.

## The Unholy Union

This situation leaves metaclasses `Expression` and `Behavior` unsatisfiable (have no valid individuals). This transitively affects `LiteralBoolean`, which, as a subclass of `Expression`, making it unsatisfiable too.

## Conclusion

In this thorough examination of interconnected classes and underlying conflicts, DL reasoning emerges as a crucial tool for gaining a deeper understanding. As you navigate the world of metamodels and systems, it is essential to appreciate the role of DL reasoning. It transforms the concept of unsatisfiability into an exploration of the intricate web of class relationships. As you venture into the realm of KerML and SysML v2 metamodels, remember that DL reasoning serves as a guiding map, helping you navigate the complex and paradoxical terrain.

## Reported Issue

[KerML-155](https://issues.omg.org/issues/KERML-155)

## Context Project

[OML Implementation of SysML v2](https://www.opencaesar.io/projects/2023-8-11-SysML-v2.html)