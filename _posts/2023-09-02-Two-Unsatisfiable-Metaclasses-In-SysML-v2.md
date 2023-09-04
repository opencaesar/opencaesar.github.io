---
layout: post
title: "Two Unsatisfiable Metaclasses in SysML v2"
author: "Maged Elaasar"
author_image: maged.png
tag: [Ontology, openCAESAR, OML, SysML]
categories: [blog]
image:
  feature: sysmlv2.png
  credit: 2023-07.1 SysML v2 Release
---

## Introduction

Welcome to another analytical session exploring the KerML and SysML v2 metamodels using the openCAESAR tools. This analysis is part of an ongoing [project](projects/2023-8-11-SysML-v2.html) dedicated to implementing these metamodels as ontologies using the Ontological Modeling Language (OML). As a quick reminder, our project initially uncovered an instance of an [unsatisfiable metaclass](/blog/2023/08/27/When-Literal-Boolean-Is-Unsatisfiable.html) within the KerML metamodel. In our latest examination, we've identified a couple of cases of unsatisfiable metaclasses within the SysML v2 metamodel.

Before delving further into these findings, let's clarify what an unsatisfiable class signifies in logical terms. Essentially, an unsatisfiable class is one burdened with a set of constraints that cannot coexist harmoniously. Consequently, this predicament renders the class devoid of any instances, resulting in an empty extent. A prevalent factor contributing to classes becoming unsatisfiable is the presence of contradictory constraints.

## Case 1: Metaclass CaseUsage

![CaseUsage](http://www.plantuml.com/plantuml/png/NO-nZeCm38PtFuN5pGpt0WWEwUPALJSMDxYGAWJaE5tQldkXKLE99LA-_xFykmvAed5ouFYYg3EA7KR5tWeRjRC7Q2dmAT30M9QF2bjo9ZhQiZU5FKXQOxv6OtRXKNc1xKdVVoQDmW1_FDBDphBY2elEBoGqiR8KsSbjaXFY-Sf63nyHVpkFzvK6re1v_bbWghA_9c_y4Uu1QlPzdDmB)

In this case, we can observe a portion of the inheritance hierarchy for the metaclass `CaseUsage`, illustrated by the solid black inheritance arrows that trace all the way to metaclass `Feature`. Additionally, metaclass `CaseUsage` has property `CaseUsage::subjectParameter`, which is of type `Usage` and subsets property `Behavior::parameter`. However, this subsetting introduces an unintended constraint: it necessitates that every instance of `CaseUsage` must also be typed by `Behavior` (indicated by the red inheritance arrow). Regrettably, since these two metaclasses lack a shared subclass, they are further declared as disjoint due to OML's bundle closure algorithm. Consequently, this leads to a contradiction for every instance of metaclass `CaseUsage`, rendering the class unsatisfiable. This bug is likely an oversight and fortunately has a simple fix, which is to change the subsetted property to `Step::parameter` since metaclass `Step` is already a supertypes of `CaseUsage`.

## Case 2: Metaclass RequirementUsage

![RequirementUsage](http://www.plantuml.com/plantuml/png/VP31IWGn38RlVOemdlVW2opBYbuLnTjUOkTtjpAJZaagWlhkZbI7eQB7VFdeHxCpP_Ko3c70evDdqdGyEVL94Jrb2U4MpsMUHeZV6nz1cytxbYwoc2kdRnYQkKhNCHPLICG_qZxd0IoNhvF2x2lvYrHnPRIhEySKcbhTrF0AN86zA4BOuyGlAUkCjzGTP6Bb4Gxj5gVzUbMjF3mX-isFJ-S7eRUP6jneUUQZg_6_BhZqpnHzs47wCWwV)

The situation with metaclass `RequirementUsage` closely parallels that of metaclass `CaseUsage` above. The issue is that  the property `RequirementUsage::subjectParameter` subsets `Behavior::parameter` without `RequirementUsage` subclassing `Behavior`. The fix is also to switch the subsetting from `Behavior::parameter` to `Step::parameter` since `Step` is a transitive supertype of metaclass `RequirementUsage`. Again, another simple oversight that can hard to detect but easy to fix.

## Conclusion

Using a Description Logic (DL) reasoner can lead to enlightening discoveries in ontologies. As we author and maintain complex vocabularies like SysML v2, having such an analytical tool becomes a huge asset. This is due to its ability to discover inconsistencies without explicitly writing audit rules. Stay tuned for further insights and updates as we work towards a consistent vocabulary for SysML v2.

## Reported Issue

- [SYSML2-430](https://issues.omg.org/issues/SYSML2-430)

## Context Project

[OML Implementation of SysML v2](https://www.opencaesar.io/projects/2023-8-11-SysML-v2.html)