---
layout: post
title: "What is Ontological Analysis?"
author: "David Wagner, Maged Elaasar"
author_image: wagner.jpg
tag: [MBSE, IMCE, CAESAR, ONTOLOGY]
categories: [blog]
image:
  feature: jpl.png
  credit: Jet Propulsion Laboratory
---

We talk a lot about the importance of Ontological Analysis in CAESAR, but what does that actually mean, and why is it so important?

First, let's step back and note that CAESAR's approach to descriptive modeling leverages [semantic web](https://www.w3.org/standards/semanticweb/) technologies that are based on a standard way of representing information. 

## History

Earlier database standards introduced the idea of a *schema* as a formal description of the structure of a database. Languages such as SQL emerged to express and query this structure. SQL (relational) databases define tables to represent instances of things that have shared properties. While these technologies were extremely successful, it became apparent that they were incomplete because they did not fully express the way the information stored in different tables was related. A database application still relied heavily on external logic to join information in different tables, and specify rules that govern the logical consistency of the information. Although SQL helped standardize how information was represented, it didn't help that much when it came to describing how information in different tables is related or the rules governing good structure of information. More recently, a new genre of databases called graph databases have emerged that allows relations to be explicitly represented in the data, with vocabulary ontologies defining not only the structure, but also the logical semantics, of these graphs.

## Web Ontology Language

In general, an ontology or a vocabulary-based approach to describing information just means that the description language allows a more complete description of things, allowed relations between those things, and rules governing the semantics of those things. The web ontology language [OWL](https://www.w3.org/OWL/) was developed by the Worldwide Web Consortium for precisely this purpose.

Ontological analysis generally refers to the analysis of information descriptions in the context of their defining vocabularies with the intention to deduce logical inferences, that are enabled by the semantic rules of the language, and using them to assess the logical consistency of the information.

## Consistency

Consistency analysis is intended to verify the logical consistency of a vocabulary or description model. Natural language is rife with logical inconsistencies largely derived from words having multiple ambiguous meaning. CAESAR uses a particular dialect of OWL that limits the expressivity using the rules of [description logic](https://en.wikipedia.org/wiki/Description_logic) (DL) to avoid ambiguities that can make inferences undecidable. Before you can use a vocabulary to describe things unambiguously, you need to first ensure that the vocabulary itself is satisfiable. Satisfiability here means that the types defined by a vocabulary are not over constrained to the point that there exists no valid instance of those types.

The second kind of analysis checks whether descriptions expressed in a given vocabulary are actually consistent with the vocabulary and with each other. Syntactic checks include making sure that all of the words used are defined in a given vocabulary and relations used are among those permitted by the vocabulary.

## Entailments

Another interesting aspect of consistency analysis is the production of *entailments* or axioms reflecting inferences that can be drawn from the explicitly asserted (modeled) information. Such inferences are implied by the vocabulary, and a query language like SPARQL or a database engine like Neptune will not intrinsically make these inferences for you. You need to generate those inferences explicitly from the data with the help of a logical reasoner first, before a generic query tool will be able to use them.

For example, if the description says that A is an Assembly and the vocabulary says that all Assemblies are also Components, it can be inferred that A is also a Component. A generic query tool will not automatically return A if you ask for things that are Components unless you have explicitly put that inference in the data.  Fortunately, another generic tool, a logical reasoner, can produce all these entailed inferences from a given dataset and add them to the data.

## Bundle Closure

One characteristic of the semantic web way of describing information is the use of [the open world assumption](https://en.wikipedia.org/wiki/Open-world_assumption). While very helpful to enable extensibility of information, it unfortunately also makes reasoning on the information a bit surprising. For example, a reasoner may infer that object A is both a Component and a Function in the same time, if you did not specify that these two concepts are disjoint. CAESAR addresses this by allowing a convenient way of using closed-world assumptions to reason on descriptions by declaring that the vocabularies they use are part of a bundle. This stops a reasoner from inferring axioms that specify that, e.g., an object is a Component and Function in the same time.

## Conclusion

The result of all his analysis is a dataset that has been proven to be consistent based on a satisfiable closed-world vocabulary bundle. CAESAR, using a combination of off-the-shelf reasoners and open-source utilities, packages all of this analysis into a single process that can be executed as a workflow step.

There may still be other rules that either cannot be expressed easily in the vocabulary, or that, for practical reasons, you choose not to express that way. In system modeling there can be rules describing the completeness of the model that cannot be strictly enforced until the model is complete that you choose to measure through other means. CAESAR can express these rules as downstream queries and reports.
