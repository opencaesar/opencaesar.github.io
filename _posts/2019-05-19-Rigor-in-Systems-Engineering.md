---
layout: post
title: "Rigor in Systems Engineering"
author: "Steve Jenkins"
author_image: stevej.png
tag: [MBSE, IMCE, CAESAR]
categories: [IMCE]
image:
  feature: jpl.png
  credit: Jet Propulsion Laboratory
---

# The Objective is Rigor

Despite the prominence of Model in its name, the objective of Model Based Systems Engineering (MBSE) is not modeling.
Modeling is a technique, a means to an end. The objective is rigor, which is defined as "the quality or state of being very exact, careful, or strict," Merriam-Webster, 2017. Another definition of rigor is "scrupulous adherence to established standards for conduct of work," NASA Final Report of the Return to Flight Task Group, Appendix A.2, 2005. Rigor is a distinguishing characteristic of engineering. It requires no justification; it’s what good engineers do. Rigor nevertheless brings many benefits, all related to better understanding of the system under design: its requirements, performance, cost, schedule, etc.

# Three Manifestations of Rigor

## Language
A rigorous language allows us to describe things, like requirements, architecture, design, analysis techniques and results, with precision.

## Abstraction
Abstraction is key to engineering analysis. The archetypal engineering abstraction is the differential equation. There are many others: probability space, linear space, Hilbert space, Galois field, etc.

## Automation
Automated systems have highly repeatable effects. Properly-implemented automated systems, therefore, can exactly, carefully, strictly adhere to established standards for the conduct of work.

# Systems Engineering Language

There is no accepted standard systems engineering language. SysML is a start, but it’s not a mature language for knowledge representation because it has: a) limited SE vocabulary (everything is a Block), b) indefinite semantics, and c) limited tool-to-tool exchange capability. One of the primary functions of systems engineering is to capture facts about the system representing many viewpoints. We need a powerful extensible knowledge representation language with a strong semantic foundation. The state of practice in knowledge representation is embodied in the theory and technology of the Semantic Web and its standards: RDF, OWL, SPARQL, SWRL, etc.

# Systems Engineering Abstraction

There are many abstractions that are pertinent to systems engineering; graph theory is fundamental. Many SE constructs are directed graphs: work breakdown, product breakdown, fault tree, etc. The abstract syntax for OWL is a graph. Many SE procedures have graph algorithm implementations: mass rollup, root cause analysis, reachability analysis, etc. Knowledge representation theory is based on graphs. We need to construe our work, wherever possible, as operations on graphs to a) gain better understanding of problems from the viewpoint of a well-established field of theory, and b) benefit from high-quality software implementations of graph algorithms

# Systems Engineering Automation

The key idea is that the graph abstractions of systems engineering lend themselves naturally to the abstractions of computing (algorithms, data structures). The use of systems engineering formalisms leads to more principled and more reliable automation. We may save money and/or time when we automate, but only if we do so in a way that adheres scrupulously to established practices for the conduct of work. If you do it wrong (or unreliably), it doesn’t matter how fast you do it.