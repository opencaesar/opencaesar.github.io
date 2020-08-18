---
layout: post
title: "Release 0.7.3"
author: "Maged Elaasar"
author_image: maged.png
tag: [MBSE, IMCE, CAESAR, OML]
categories: [IMCE]
image:
  feature: openCAESAR.png
  credit: https://opencaesar.github.io/
---

## [OML](https://github.com/opencaesar/oml)
* Add the concept of `description bundle` to aggregate a set of descriptions models to reason on together as a dataset.
* Made some classes in the OML metamodel abstract since they should not be instantiated.
* Introduced `OmlCatalog` as a wrapper for Apache `Catalog` class with some utility functions.
* Fixed the textual syntax tokenizer to allow the ':' symbol to be surrounded by no whitespace space (reported by T-Systems, thanks!).
* Fixed typoes in the name of some APIs.
* Fixed a NPE with the `OMLWriter` API.
* Added an action to the OML tree editor to load an imported ontology from an import statement.
* Fixed an exception in the OML tree editor lwhen oading some elements types.
* Added description of graphical notation to the different element sections in the Concrete Syntax chapter of the [OML Specification](https://opencaesar.github.io/oml/). (contributed by Damian Rivas, thanks!)
	
## [Vocabularies](https://github.com/opencaesar/vocabularies)
* Added a Gradle build script that invokes OML analysis tools (DL reasoner and document generator) on the ontologies.
* Created a Travis CI script that invokes the Gradle build script on every commit.
* Published the source ontologies as a zip artifact to Bintray with a semantic version.

## [FireSat Example](https://github.com/opencaesar/example-firesat)
* Organized the ontologies in the example to attribute the descriptions to the proper level of authority: program (mission), project (spascecraft), workpackage (subsystems), etc.
* Added description of reequiements and functional decompositions, and allocated them to components in the spacecraft (based on work by Geoff Lecourtois, thanks!).
* Added a Gradle build script that invokes OML analysis tools (DL reasoner and document generator) on the ontologies.
* Made the Gradle script declare the vocabularies used as a dependency, as opposed to getting them by submoduling the vocabulary's Git repository.
* Created a Travis CI script that invokes the Gradle build script on every commit.
* Published the source ontologies as a zip artifact to Bintray with a semantic version.

## [OML Rosetta WB](https://github.com/opencaesar/oml-rosetta)
* Added Git and Gradle frameworks support to the workbench out of the box.
* Fixed the published Eclipse `p2` repo to install the OML as a dependency when Rosetta is intalled into an existing Eclipse.
* Added `EMF Compare` extensions to better support compare/merge for OML models expressed in XMI.
* Added creation wizards to make it easy to create new OML models.

## [OML Eclipse WB](https://github.com/opencaesar/oml-eclipse)
* Supported v0.7.3 of the OML Language Server.

## [OML Theia WB](https://github.com/opencaesar/oml-theia)
* Supported v0.7.3 of the OML Language Server.

## [OML VSCode/Gitpod WB](https://github.com/opencaesar/oml-vscode)
* Supported v0.7.3 of the OML Language Server.
* You can now click on a [link](https://gitpod.io/#https://github.com/opencaesar/vocabularies) to edit the vocabulary repo using Gitpod environment in the cloud (zero installation)!
	
## [OWL Adapter](https://github.com/opencaesar/owl-adapter)
* Fixed the mapping of RelationEntityPredicate to OWL.
* Added some missing dependencies to the Gradle build instructions.
* Added a Gradle Task interface as another way to invoke the adapter.
* Improved the mapping of the OML catalog to the OWL catalog.
* Ported the Bundle Closure algorithm to Java in anticipation of releasing it as an independent library in the [owl-tools](https://github.com/opencaesar/owl-tools) repo soon.
* Changed the adapter CLI to accept paths to OML/OWL catalogs instead of OML/OWL folders.

## [DocBook Tools](https://github.com/opencaesar/docbook-tools)
* Developed an initial version of a CLI that can process a DocBook template that has custom high-level tags and replace them by DocBook regular tags.
* Designed a library of XML tags that can pull information dynamically from OML models (contribution by David Truong, thanks!)
* Added the capability to render a dockbook to HTML or PDF and style it using a set of XSL/CSS sheets.
* Added a Gradle Task interface so the CLI can be invoked using a Gradle build script.
 	
## [OML Tools](https://github.com/opencaesar/oml-tools)
* Moved the Oml2Bikeshed CLI to the OML tools repo.
* Added a Gradle Task interface to Oml2Bikeshed so it can be invoked from Gradle scripts.
* Changed the CLI interface to take an OML catalog instead of an OML folder.
* Upgraded the dependency to the lastest Bikeshed tool.
* Added a new OmlMerge tool to merge two or more OML catalogs into one by making a union of the axioms. The tool can be used when integrating multiple datasets.
* Added a Gradle Task interface to OmlMerge so it can invoked from Gradle scripts.
	
## [OWL Tools](https://github.com/opencaesar/owl-tools)
* Developed OwlLoad and OwlQuery as CLIs to faciliate interfacing with a SPARQL endpoint published by a graph database (contribution by David Truong, thanks!) 
* Added Gradle Task interfaces to OwlLoad, OwlQuery and OwlReason tools to invoke them from Gradle build scripts.
* Changed the interface of OwlReason to take on ontology IRI as input, and specify the output ontology IRI where entailements will be saved.
* Made the OwlReason tool same the result of reasoning in the form of a Junit result file.
* Improved the analysis results with a concise one sentence explanation and added a minimal ontology that demonstrate the problem as the explanation details.
	
  
  For more information, please contact [Maged Elaasar](https://opencaesar.github.io/contributors/Maged%20Elaasar.html).