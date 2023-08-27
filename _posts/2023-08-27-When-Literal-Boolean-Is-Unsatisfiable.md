---
layout: post
title: "When Literal Boolean Is Unsatisfiable"
author: "Maged Elaasar"
author_image: maged.png
tag: [Ontology, openCAESAR]
categories: [blog]
image:
  feature: unsatisfiable-literal-boolean.png
  credit: 2023-07.1 SysML v2 Release
---

## Introduction

Welcome to a mind-boggling journey through the tangled web of the KerML and SysML v2 metamodels. Buckle up as we delve into the intricacies of class relationships and constraints. Embark on an exhilarating expedition where the remarkable prowess of [OML](http://www.opencaesar.io/oml/) and its Description Logic (DL) reasoning brings to light a breathtaking revelation that class LiteralBoolean is unsatisfiable! Huh, isn't this the simplest metaclass in the metamodel? Prepare to be amused, bemused, and utterly confused.

## The Cast of Characters

Our story unfolds with an ensemble of metaclasses: LiteralBoolean, LiteralExpression, Expression, Step, Feature, Behavior, Class, and Classifier. These players each have their roles to play, but oh boy, do they take us for a wild ride.

## The Class Hierarchy Cha-Cha

At the heart of this metamodel is a dance of inheritance that rivals even the most intricate tango. LiteralBoolean struts its stuff as a subclass of LiteralExpression. Following suit, LiteralExpression sashays into the realm of Expression, which waltzes right into Step, and finally, Feature takes the stage.

## The Disjoint Dilemma

In a twist worthy of a daytime soap opera, Behavior decides to crash the party, subclassing Class and transitively Classifier. But, oh dear, we have a little feud on our hands! You see, concrete metaclass Classifier being unrelated to concrete metaclass Expression by a common subclass is grounds to infer the pair as "disjoint" by a special algorithm in OML (bundle closure algorithm). Drama alert! Expression and Behavior are now mortal enemies.

## The Property Puzzle

Just when you think things couldn't get any juicier, enter the property relations. Expression is linked to Feature through the property "result," with a strict cardinality of exactly 1. Not only that, but the "result" property is a subproperty of (subsets) the "template" property. The "template" property is like the overbearing parent, with Behavior as the domain and Feature as the range.

## The Conundrum Unveiled

Here's where it gets interesting, folks. Every instance of Expression is now a puppet dancing on the strings of "result." With the strict cardinality, Expression must have a result. And guess what? A result means a parameter is a must. Expression is suddenly wearing the Behavior hat (every Expression is also a Behavior - the *inferred* red inheritance arrow in the classs diagram above), but alas, Expression and Behavior are sworn enemies (remember the disjointness revelation above?) This means Expression's life is a lie, and the jig is up!

## he Unholy Union

With Expression now pulled between two worlds, the metamodel is screaming in agony. The house of cards collapses, and both Expression and Behavior become unsatisfiable. Oh, the tragedy! LiteralBoolean, who had a front-row seat to this madness (being a subclass of Expression), also joins the unsatisfiable club.

## Conclusion

In this gripping saga of interconnected classes and hidden conflicts, DL reasoning serves as the key that unlocks a universe of understanding. As you venture forth in your exploration of metamodels and systems, remember the awe-inspiring revelation that DL reasoning brings—a revelation that transformed unsatisfiability into a tangible revelation of the intricate fabric of class relationships. Step into the realm of KerML and SysML v2 metamodels armed with the knowledge that DL reasoning isn't just a tool—it's an adventurer's map, guiding you through the uncharted territories of complexity and contradiction.

## Reported Issue

[KerML-155](https://issues.omg.org/issues/KERML-155)

## Context Project

[OML Implementation of SysML v2](https://www.opencaesar.io/projects/2023-8-11-SysML-v2.html)