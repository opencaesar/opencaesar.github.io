---
layout: post
title: "Comparison Between openCAESAR and OpenMBEE"
author: "Maged Elaasar"
author_image: maged.png
tag: [MBSE, IMCE, CAESAR, OML, ASCEND]
categories: [IMCE]
image:
  feature: ascend2020.jpg
  credit: https://ascend2020.ascend.events/event/member/689666
---

## Introduction
This week, my colleague, Chris Schreiber (Lockheed Martin Space), and I co-chaired an [engagement session](https://ascend2020.ascend.events/event/member/689666) titled "Next-Generation Systems Engineering Approaches: Deep Dives" at the [ASCEND 2020](https://www.ascend.events/) virtual conference. The abstract of the session was:

> This engagement session will examine two innovative approaches to systems engineering of complex aerospace systems. NASA’s Jet Propulsion Laboratory has developed an ontological modeling language and methodology, and an associated software platform called OpenCAESAR (Computer Aided Engineering for Systems Architecture), which provides an ecosystem for developing and deploying tools for model authoring, integration, analysis, and reporting, as well as a semantic data warehouse system for managing SE information. The Lockheed-Martin Space Systems Company’s approach to digital engineering leverages a robust and flexible Digital Tapestry software infrastructure, a seamless digital environment driven by federating model-based engineering data across disciplines and managing data relationships from product conceptualization to realization. After each organization’s 30-minute presentation, the presenters will lead a discussion of the similarities and differences between the two approaches, and discuss plans for future development.

I went first and presented the [openCAESAR](https://opencaesar.github.io/) platform and how it is used at JPL to modernize the practice of systems engineering for two flight projects: [Europa Clipper](https://www.jpl.nasa.gov/missions/europa-clipper/) and Psyche (https://www.jpl.nasa.gov/missions/psyche). Chris went second and presented the Digital Tapestry work they do at Lockheed Martin Space, which heavily uses the OpenMBEE platform (https://www.openmbee.org/). In the last section of the session, we collaborated on comparing and contrasting the two approaches/platforms to modernizing systems engineering as of today. We first identified the relevant features to compare in a table, then each of us filled in their respective column. The resulting comparison is captured below.

# Open Access

|             | openCAESASR   | OpenMBEE |
| ----------- | ------------- | ------------- |
| Open Access | Platform capabilities are open sourced  | Platform capabilities are open sourced |

# Information Architecture

|                          | openCAESASR   | OpenMBEE |
| -------------------------| ------------- | ------------- |
| Information Architecture | Defined as a set of interrelated DSLs represented as OWL2-DL ontologies | Defined in conjunction with CM of CM’s construct |

# Information Authoring

|                              | openCAESASR   | OpenMBEE |
| ---------------------------- | ------------- | ------------- |
| Model Authoring (COTS tools) | Supports authoring using some COTS tools supported by a (CAESAR) adapter | Supports authoring using some COTS tools supported by a (Syndeia) adapter and custom development
| Model Authoring (custom tools) | Supports full authoring in the DSLs directly using standard authoring viewpoints in Eclipse or VSCode (desktop or web) or custom ones implemented declaratively | Supports some limited authoring out of the box using standard viewpoints in View Editor (part of OpenMBEE) or custom ones implemented imperatively |

# Authoring Tool Features

|                                   | openCAESASR   | OpenMBEE |
| ----------------------------------| ------------- | ------------- |
| Correct by Construction Authoring | Using custom authoring viewpoints built with declarative UI frameworks | Using methodology-specific profiles that are checked by rules |
| Automated Validation | Using live rules and batch DL reasoner and a rule based audit framework | Using custom-built live and batch rules executed upon editing models in MagicDraw |
| Automated Refactoring | Using custom refactorings in authoring viewpoints | Using refactorings built in COTS tool |
| Reusable Libraries | Using reusable class and instance ontologies | Using SysML profiles and model libraries |
| Collaborative Authoring | Possible in gitpod.io (web-based VSCode) and in Eclipse (using CDO Server) | Possible using ViewEditor and custom plugins |

# Information Management

|                                   | openCAESASR   | OpenMBEE |
| ----------------------------------| ------------- | ------------- |
Source of Authority | Information has a single authority that maintains it in a known repo, but can be imported as read-only in other repos | Information has a single-source, but can be federated and edited in multiple repos |
| Configuration Management | Models are configuration managed by their native authoring tools, and (in the normalized DSL format) in Git repositories with support for branches, pull requests, etc. | Models are configuration managed using their native authoring tools CM capabilities |
| Change Management | Models changes are (normalized and) pushed to a git branch, where they get analyzed by a CI/CD pipeline and the results are made available to peer reviewers | Models changes are made, analyzed, and reviewed in design environments, with extension for local and/or global CI/CD |
| Release Management | Models are published (in their ontology representation) to maven repositories with semantic versions | Models are published to the MBEE repository with semantic versions |
| Dependency Management | Models declare read-only dependencies on each other using maven dependencies with semantic version range (e.g., 1.2.+) | Models have version-aware (Syndeia)traceability links to each other |

# Information Federation

|                                   | openCAESASR   | OpenMBEE |
| ----------------------------------| ------------- | ------------- |
| Model Federation | Models are federated in repositories managed by different authoring tools | Models are federated in repositories managed by different authoring tools |
| Model Cross Links | Models cross links are created between the ontological representations and stored in separate ontological (integration) models | Model cross links are created using Syndeia and stored in the Syndeia link database |
| Model Integration | Models are normalized to common DSLs first, then their explicit or implicit cross links are used to analyze them continuously | Model have their native repositories directly linked using Syndeia links, which are used to analyze their consistency on demand. |
| Model Reconciliation | The ontology representations of both models are compared to calculate the deltas to apply to the target native model | The Syndeia representations of both models are compared to calculate the deltas to apply to the target native model |

# Information Analysis

|                                   | openCAESASR   | OpenMBEE |
| ----------------------------------| ------------- | ------------- |
| Model Analysis | Models analysis using a variety of analysis tools (including a logical reasoner) is orchestrated by a CI pipeline | Model analysis is run “locally” on various tools as part of domain process |
| Model Reporting | Various reporting tools are used to create reporting viewpoints (docs, diagrams, etc.) | Various reporting tools are used to create reporting viewpoints (docs, diagrams, etc.) |
| Report Accessibility | Historical reports are archived and organized in a (central) dashboard that allows searching and viewing all report versions by various stakeholders | Reports are generated from model on demand and archived |

For more information, please contact [Maged Elaasar](https://opencaesar.github.io/contributors/Maged%20Elaasar.html).