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
* Made some concepts in OML metamodel abstract since they only represent capabilities to inherit from.
* Introduced OmlCatalog as a wrapper over Apache Catalog with some utilities.
* Fixed the textual syntax tokenizer to allow the ':' token to be surrounded by no whitespace space (reported by T-Systems, thanks!).
* Fixed typoes in the name of some APIs.
* Fixed a NPE with the OMLWriter API.
* Add an action to the OML tree editor to load an imported ontology from an import statement.
* Fixed a ClassCastException on the OML tree editor loading some elements.
* Added graphical notation sections to the Concrete Syntax chapter of the [OML Spec](https://opencaesar.github.io/oml/) (contributed by Damian Rivas, thanks!)
	
## [Vocabularies](https://github.com/opencaesar/vocabularies)
* Added a Gradle build script that invokes OML analysis tools (DL reasoner and document generator) on the ontologies.
* Created a Travis CI script that invokes the Gradle build script on every commit.
* Published the source ontologies as an zip archive to Bintray with a semantic version.

## [Firesat Example](https://github.com/opencaesar/example-firesat)
* Organized the example ontologies to attribute the descriptions to the proper level of authority: program, project, workpackage, etc.
* Added description of equiements and functional decompositions and allocated them to components (based on work by Geoff Lecourtois, thanks!).
* Added a Gradle build script that invokes OML analysis tools (DL reasoner and document generator) on the ontologies.
* The Gradle script also declares the vocabularies as a dependency (as opposed to getting them via git submodule).
* Created a Travis CI script that invokes the Gradle build script on every commit.
* Published the source ontologies as an zip archive to Bintray with a semantic version.

## [OML Rosetta WB](https://github.com/opencaesar/oml-rosetta)
* Added Git and Gradle frameworks support to the workbench out of the box.
* Fixed the published Eclipse p2 repo to install the OML as a dependency when Rosetta is intalled into an existing Eclipse.
* Added EMF Compare extensions to better support compare/merge for OML models expressed in XMI.
* Added creation wizards to make it easy to create new OML models.

## [OML Eclipse WB](https://github.com/opencaesar/oml-eclipse)
* Supported version 0.7.3 of the OML langiage server.

## [OML Theia WB](https://github.com/opencaesar/oml-theia)
* Supported version 0.7.3 of the OML langiage server.

## [OML VSCode/Gitpod WB](https://github.com/opencaesar/oml-vscode)
* Supported version 0.7.3 of the OML langiage server.
* Now you can click on a [link](https://gitpod.io/#https://github.com/opencaesar/vocabularies) to edit the vocabulary repo using Gitpod in the cloud!
	
## [OWL Adapter](https://github.com/opencaesar/owl-adapter)
* Fixed the mapping of RelationEntityPredicate to OWL.
* Added some missing dependencies to the Gradle build.
* Added a Gradle Task interface as another way to invoke the adapter.
* Improved the mapping of the OML catalog to the OWL catalog.
* Ported the Bundle Closure package to Java in anticipation of moving it to an independent library in the [owl-tools](https://github.com/opencaesar/owl-tools) repo soon.
* Replaced '/' by a platform agnostic path separator char.
* Changed the CLI to accept paths to OML/OWL catalogs instead of OML/OWL folders.

## [DocBook Tools](https://github.com/opencaesar/docbook-tools)
* Developed an initial version of a CLI that can process a DocBook template that has custom high-level tags that pull information from OML models (contribution by David Truong, thanks!)
* The CLI can rendder a dockbook to HTML or PDF and style it using a set of XSL sheets.
* Added a Gradle Task interface so the CLI can be invoked using a Gradle build script.
* Developed a few examples of custom high-level tags that can pull info from OML models and format them in various viewpoints.
 	
## [OML Tools](https://github.com/opencaesar/oml-tools)
* Moved the Oml2Bikeshed tool to the OML tools repo.
* Added a Gradle Task interface to Oml2Bikeshed so it can invoked from Gradle scripts.
* Changed the CLI interface to take OML catalog instead of OML folder.
* Upgraded the dependency to the lastest Bikeshed tool.
* Added a new OmlMerge tool to merge two or more OML catalogs into one by making a union of the axioms.
* Added a Gradle Task interface to OmlMerge so it can invoked from Gradle scripts.
	
## [OWL Tools](https://github.com/opencaesar/owl-tools)
* Developed OwlLoad and OwlQuery as tools to faciliate interfacing with a SPARQL endpoint (contribution by David Truong, thanks!) 
* Added Gradle Task interfaces to OwlLoad, OwlQuery and OwlReason tools to invoke them from Gradle build scripts.
* Changed the interface of OwlReason to take on ontology IRI as input, and specify the output ontology IRI where inferences will be stored.
* Made the OwlReason tool produce a reasoning report in the form of a Junit XML file that is stored in some path.
* Improved the analysis results with a concise explanation describinb the problem with a minimal ontology as explanation details.
	
  
  For more information, please contact [Maged Elaasar](https://opencaesar.github.io/contributors/Maged%20Elaasar.html).