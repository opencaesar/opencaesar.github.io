---
layout: post
title: "Ontological Modeling Language: Origin and Rationale"
author: "Steven Jenkinis"
author_image: stevej.png
tag: [MBSE, IMCE, CAESAR, OML]
categories: [IMCE]
image:
  feature: oml-full.svg
  credit: https://opencaesar.io/oml
---

## Background
Systems engineering is a knowledge enterprise. Almost everything systems engineers produce and manage is knowledge in some form: stakeholders and concerns, objectives, requirements, system breakdowns, scenarios, test results, etc. A great deal of what we have to say about these things can be expressed in the form of assertions about the types of things (e.g., *Requirement*), their properties (e.g., *requirementId "R.3.4.8”*), and their relationships (e.g., *R.3.4.8 refines R.3.4*).

There is a well-developed theory and a great deal of practical experience around how to manage and exploit knowledge in the form of assertions about types, properties, and relationships from a community that calls itself the Semantic Web. One key product of the [Semantic Web](https://www.w3.org/2001/sw/wiki/Main_Page) is a very general language for representing knowledge in that form, known as [OWL (Web Ontology Language)](https://www.w3.org/2001/sw/wiki/OWL).

OWL is designed to be readable and writable by humans (in the same way that programming languages are) but also to be amenable to machine reasoning. By reasoning here we simply mean drawing all conclusions (and only those conclusions) logically implied by what has been asserted. For example (in OWL Functional Syntax),

```java
SubClassOf(:Person :Mortal)       // all persons are mortal
ClassAssertion(:Person :Steve)    // Steve is a person
```
logically implies

```java
ClassAssertion(:Mortal :Steve)    // Steve is mortal
```

This is a trivial example but the breadth of things you can assert in OWL and the kinds of inferences drawn by OWL reasoners are by no means trivial.

## Knowledge Representation and OWL 2 DL
It is a fundamental fact that the more [expressive](https://en.wikipedia.org/wiki/Expressive_power_(computer_science)) a language, the more difficult the reasoning for it. If a language is sufficiently expressive, it may be possible to say things in it whose truth or falsity cannot be determined. Such a language is said to be [undecidable](https://en.wikipedia.org/wiki/Undecidable_problem). If we restrict expressivity to preserve decidability, we still may encounter reasoning whose complexity in time and/or space (memory) is such that we cannot expect to get answers to interesting questions from practical computers in a reasonable time.

The current version of OWL (2012) is known as OWL 2. The [OWL 2 Structural Specification](https://www.w3.org/TR/2012/REC-owl2-syntax-20121211/#Introduction) defines the subset of OWL 2 with favorable computational properties grounded in [Description Logic](https://en.wikipedia.org/wiki/Description_logic) (OWL 2 DL).  In a practical sense, OWL 2 DL is the most expressive knowledge representation language anyone knows how to design while still preserving practical reasoning. Real, practical, software [reasoners](https://www.w3.org/2001/sw/wiki/OWL/Implementations#Reasoners) exist for OWL 2 DL. We use them.

There are many things systems engineers care about that are beyond the reasoning power of Description Logic. DL reasoners cannot solve differential equations, for example. But a great deal of what we care about, including the structure of systems of differential-algebraic equations can be expressed in assertions about types, properties, and relationships, and OWL reasoning can help us. In these situations we may use a specialized reasoner (e.g., [Mathematica](https://www.wolfram.com/mathematica/)) to solve a problem, but a DL-based front end can help us construct the problem efficiently and with confidence in its correctness.

The expressivity of OWL 2 DL goes far beyond mere assertions about individuals. You can of course assert facts such as "pss5 is a PowerSwitchSlice" and "pss5 hasReferenceDesignator '2004PSS-5'", but also axioms or rules such as "every PowerSwitchSlice presents 26 2A switches" and "every PowerFunction joins only PowerEndCircuits". The axioms define rules of practice, enforced by reasoners, that help to ensure that what we have said is meaningful because it conforms to our practice doctrine.

There are two immediate benefits to such an approach:

- *reduction* in defects: any invariant that can be encoded in axioms can be checked by machine, as often as required;
- *enhanced reuse*: knowledge expressed using stable international standards with solid formal underpinnings retains its meaning across organizations and over time.

The Semantic Web also defines a powerful query language called [SPARQL](https://www.w3.org/TR/sparql11-query/). Knowledge expressed in OWL can be stored in databases and retrieved through such queries. The combination of reasoning and SPARQL makes it easy to answer questions like “What requirements may no longer be satisfied if this component fails?”, “How many heaters belong to each assembly in the flight system?”, and “What was the minimum state of charge of Battery B during EDL?”

In summary the Semantic Web provides both powerful theory and practical software technology for dealing with knowledge as a high-value resource.

## OWL and IMCE
OWL 2 DL (henceforth “OWL”) is extremely useful and we have years of experience using it. During that time we’ve gained some insights about how to use it more effectively.

### Insight 1: Concept vs Aspect
OWL defines a thing called Class; a Class is a set of individuals. We use Class to define things like Requirement and Interface. Although it’s implicit, what we mean when we define classes like Requirement and Interface is that nothing can be both a Requirement and an Interface. In OWL, if that’s what you mean, you have to say it, either explicitly

```java
DisjointClasses(:Requirement :Interface)
```

or implicitly via incompatible constraints.

We also use Class to define things like IdentifiedThing and AggregatedThing. In this case we do not mean that nothing can be both; it makes perfect sense for an aggregate to have an identifier. OWL gives us the low-level tools to distinguish between these use cases, but in practice it is tedious and error-prone to manage large taxonomies with only low-level tools.

In our practice we distinguish between what we call a Concept (e.g., Requirement, Interface) and what we call an Aspect (e.g. IdentifiedThing, AggregatedThing). For Concepts we apply a disjointness management policy that generates disjointness axioms by machine reasoning. For Aspects we do not. Formalizing this distinction has dramatically reduced the effort and error risk of managing taxonomies.

We have five such distinct use cases for OWL Class.

### Insight 2: Object Property Reification
In OWL we can say a camera acquires an image like this

```java
ObjectPropertyAssertion(:acquires :camera :image)
```

The assertion itself has no identity, which means we can’t say anything about it. It would be useful, however to be able to express "Requirement *R.x.y* specifies that the camera shall acquire an image", i.e., to state a functional requirement. It’s possible, using a technique called reification, to create a named individual to represent the condition that the camera acquires an image in such a way that implies the assertion above--in which  a reasoner will conclude that. Because the reification itself has an identity, and we can make that the target of another assertion like this

```java
ObjectPropertyAssertion(:specifies :R.x.y :camera_acquires_image)
```

This reification technique is extremely useful and we have incorporated it into our practice; nearly every relationship is reified.

There’s nothing particularly deep about reification. It’s using the standard expressivity of OWL in a repeatable pattern to convey the meaning we want. But it is, again, tedious and error-prone to do manually.

## Insights To Patterns and a Framework
The insights above led to our adopting patterns for modeling in OWL. In essence, adopting a pattern is an agreement to reject all models that do not conform to it. This is no different from adopting a coding style standard for a programming language. By doing so, an organization narrows the space of acceptable programs to those that are not only correct according to the language specification but also adhere to the prescribed style.

Over a period of years, with hard-won experience, we adopted a set of approximately fifty high-level patterns, along with a similar number of reusable sub-patterns. Taken together, these patterns represent the rules of our modeling practice. We want to ensure that our models always conform to our patterns; a good way to do that is to use software that ensures our models are correct by construction.

The obvious way to do this is to use object-oriented software practices and create a software class for each pattern. The methods of each pattern can enforce correctness, including the production of all required expressions when converting to OWL for reasoning and query. And in fact, we originally called our software OMF: Ontological Modeling Framework. It was just a set of APIs for building OWL models that conform to our patterns. This shouldn’t be in the least controversial. It’s a textbook example of object-oriented software in action.

## Ontological Modeling Language
Once we have all these useful classes, it turns out to be useful to persist them as external objects, not only in-memory code and data. This is precisely analogous to using JSON or YAML to externalize a software object.

We implemented OMF using well-established and widely-used software infrastructure, particularly the [Eclipse Modeling Framework (EMF)](https://www.eclipse.org/modeling/emf/). EMF provides various serializations for external persistence, including [XML Metadata Interface (XMI)](https://en.wikipedia.org/wiki/XML_Metadata_Interchange). XMI is not a human-friendly format, but using Eclipse [Xtext](https://www.eclipse.org/Xtext/), it is straightforward to add grammars for other representations that are more natural for humans to read and write. We did this and produced the language we call [Ontological Modeling Language (OML)](http://www.opencaesar.io/oml/).

Here's an illustration. In systems engineering it's often important to allocate function to performer. To define a relation to allow us to say *X performs Y* or *Y isPerformedBy X* in OWL Functional Syntax (using the reification pattern above) requires the following:

```
Declaration(Class(:Performs))
Declaration(ObjectProperty(:hasPerformsSource))
Declaration(ObjectProperty(:hasPerformsTarget))
Declaration(ObjectProperty(:isPerformedBy))
Declaration(ObjectProperty(:performs))
FunctionalObjectProperty(:hasPerformsSource)
ObjectPropertyDomain(:hasPerformsSource :Performs)
ObjectPropertyRange(:hasPerformsSource :PerformingElement)
FunctionalObjectProperty(:hasPerformsTarget)
InverseFunctionalObjectProperty(:hasPerformsTarget)
ObjectPropertyDomain(:hasPerformsTarget :Performs)
ObjectPropertyRange(:hasPerformsTarget :Function)
InverseFunctionalObjectProperty(:performs)
AsymmetricObjectProperty(:performs)
IrreflexiveObjectProperty(:performs)
ObjectPropertyDomain(:performs :PerformingElement)
ObjectPropertyRange(:performs :Function)
DLSafeRule(Annotation(rdfs:label "performs derivation") Body(ObjectPropertyAtom(:hasPerformsTarget Variable(<urn:swrl#r>) Variable(<urn:swrl#t>)) ObjectPropertyAtom(:hasPerformsSource Variable(<urn:swrl#r>) Variable(<urn:swrl#s>)))Head(ObjectPropertyAtom(:performs Variable(<urn:swrl#s>) Variable(<urn:swrl#t>))))
InverseObjectProperties(:isPerformedBy :performs)
```

To accomplish the same in OML text syntax requires merely:

```
relation entity Performs [
    from PerformingElement
    to Function
    forward performs
    reverse isPerformedBy
    inverse functional
    asymmetric
    irreflexive
]
```

## Conclusion
In summary, we did not design a new language in the ordinary sense of that phrase. We are committed, and have been from the beginning, to OWL 2 DL. We discovered that it was hard to conform to our modeling rules without tooling support. We developed that tooling, and it dramatically improved both the speed of modeling and the quality of our models. One feature of that tooling, which required little effort to develop, is a more concise and human-friendly high-level external representation we call [OML](http://www.opencaesar.io/oml/).