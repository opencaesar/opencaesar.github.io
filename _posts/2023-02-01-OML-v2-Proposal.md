---
layout: project
title: "OML v2 Proposal"
author: "Maged Elaasar"
author_image: maged.png
tag: [OML]
categories: [blog]
current: true
image:
  feature: oml.png
  credit: Jet Propulsion Laboratory
---

## Summary

The openCAESAR team is currently planning a major revision (v2) of OML that will feature:

>Note: you can read about the OML v2 release in May 2023 [here](/projects/2023-7-21-OML-v2.html).

#### Syntax Simplifications

Changes to the OML abstract syntax and its Java API that does not impact the textual syntax:

1. Merged (and removed) class `AnnotatedElement` into class `IdentifiedElement` (the impact is that `Import` statements can no longer be annotated).
1. Collapsed the `Import` class  hierarchy into a single `Import` class with an enumeration kind that has literals: `extends`, `uses`, and `includes`.
1. Renamed class `Feature` to `Property`, made the latter the supertype of classes `AnnotatedProperty` and `SemanticProperty`, and made class `Relation` extend from `SemanticProperty`.
1. Collapsed the `Restriction` class hierarchy into 3 subclasses restricting range, cardinality, or value of a property, and made class `Entity` has a single collection for restrictions.
1. Made class `LinkAssertion` a subclass of `PropertyValueAssertion` and made class `NamedInstance` has a single collection of property value assertions.
1. Moved the types collection from both classes `ConceptInstance` and `RelationInstance` into their superclass `NamedInstance`.
1. Made class `RelationEntityPredicate` a subclass of both `UniaryPredicate` and `BinaryPredicate`.
1. Removed the `Reference` class hierarchy entirely and merged it into the `Member` class hierarchy (a member can have either a name or a ref to another member).

---

#### Syntax Changes

Changes to the OML abstract syntax and its Java API that also impacts the textual syntax:


1. The specialization symbol `:>` will be changed into `<` to better align with the subset symbol (a subclass is a subset of its super class).

1. The specialization axiom `(<: superTerm (',' superTerm)*)` will now be expressed after the other-details ([..])? of the term, as opposed to before.

    For example:
    ```
    concept A < B, C

    concept D [
      key p1
    ] < E, F

    scalar property p1 [
      domain C
      range xsd:string
    ] < p2
    ```

1. The enumerated instances of a `Concept` can now be specified with the keyword `oneOf` instead of `enumerates`. For example:

    ```
    concept RockyPlanets [
      oneOf Earth, Mars, Venus, Mercury // these are concept instances
    ]
    ```

1. Both `FacetedScalar` and `EnumeratedScalar ` were eliminated and merged into a (now concrete) `Scalar` class. The enumerated literals can be specified as another facet called `oneOf` (along with the other facets like `minLength`). 

    For example:
    ```
    scalar RGBColor <: xsd:string {
      oneOf "Red", "Green", "Blue"
    }
    ```

1. A concept instance is now defined with the intuitive keyword `instance` instead of the keyword `ci`. It can now be typed by concepts or aspects (instead of concepts only before).

1. A relation instance is now defined with the intuitive keyword `relation instance` instead of the keyword `ri`. It can now be typed by relation entities or aspects (instead of relation entities only before).

---

#### New Features

New features to add to the expressivity of OML abstract syntax (and textual syntax):

1. Made `Annotation` have either a literal value or a reference (to a member) value. This would allow saying for ex.:
    ```
    @rdfs:label "Aggregates"
    @rdfs:seeAlso base:Contains
    relation entity Aggregtes
    ```
1. Added a new class `UnreifiedRelation` as a subclass of `Relation` and (unlike classes `Forward` and `Reverse`) it can be declared independently of a `RelationEntity`. This would allow defining for ex.:   
    ```
    relation performs [ // this is an unreified relation
      from Component 
      to Function 
      reverse isPerformedBy
      functional
    ]
    ```
1. Added a new class `BuiltIn` to represent a builtin function that can be called from a `Rule` as a predicate. Also, added a the standard vocabulary of SWRL builtins to the `core-vocabularies` set. This should allow saying for ex. 
    ```
    rule FullName [
          firstName(?x, ?first) ^ 
          lastName(?x, ?last) ^ 
          swrlb:stringConcat(?full, ?first, " ", ?last) 
          -> fullName(?x, ?full)
    ]
    ```

1. Added the Ability to add zero or more (comma-separated) `classifier equivalence axiom`(s) (intersection of named classifiers and/or restrictions) after an optional `specialization axiom`.

   Syntax: 
    ```
    Classifier ::= <keyword> NAME (`[`...`]`)? (`<` Specializations)? (`=` Equivalences)?
    Specializations ::= (REF (`,` REF)*)? (`[` Restriction*`]`)?
    Equivalences ::= Equivalence (`,` Equivalance)*
    Equivalence ::= (REF (`&` REF)*)? (`[` Restriction*`]`) 
    ```
    For example:
    ```
    concept SpicyPizza = Pizza [
      restricts some hasTopping to SpicyTopping
    ]

    aspect A = B & C & D [
        restricts p1 to max 1
        restricts p2 to exatly 5 P
    ]

    concept Z [
      key p1
    ] = M & N
    ```

1. Added the Ability to add zero or more (comma-separated) `property equivalence axiom`(s) after the optional `specialization axiom`.

    Syntax: 
    ```
    Property ::= <keyword> NAME (`[`...`]`)? (`<` Specializations)? (`=` Equivalences)?
    Specializations ::= REF (`,` REF)*
    Equivalences ::= REF (`,` REF)*
    ```
    For example:
    ```
    relation hasAunt [
      from Person
      to Woman
    ] = hasSisterOfParent

    scalar property p1 [
      domain D
      range xsd:string
    ] < p2 = p3, p4
    ```

---

#### Potential Features

Features under consideration that we appreciate your feedback on.

1. Add the ability to define nested concept instances with link assertions:
    ```
    ci c1 : mission:Component [
      mission:performs f1 : mission:Function
      mission:performs f2 : mission:Function [
            mission:invokes c1.f1 // or simply f1
      ]
    ]
    ```

1. Add the ability to define multiple (comma-separated) values for a property or link assertion in a description:
    ```
    ci c1 : mission:Component [
      mission:performs f1, f2
      base:hasName "123", "abc"
    ]
    ```

Please provide your feedback by posting a [discussion](https://github.com/opencaesar/community/discussions/2) thread, or by contacting [Maged Elaasar](https://opencaesar.github.io/contributors/Maged%20Elaasar.html) directly.