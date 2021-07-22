---
layout: post
title: "Getting Started with OML"
author: "Steven Jenkins"
author_image: sjenkins.jpg
tag: [MBSE, IMCE, CAESAR, OML]
categories: [IMCE]
image:
  feature: oml-full.svg
  credit: https://opencaesar.io/oml
---

## Installing Rosetta

The [OML Rosetta Workbench](https://github.com/opencaesar/oml-rosetta) is our [Eclipse](https://www.eclipse.org/)-based desktop application for working with OML. Install it by following [these instructions](https://github.com/opencaesar/oml-rosetta#install-rcp).

## Copying the OML Template Repository

We have provided a [template](https://github.com/opencaesar/oml-template) for an OML project to help you get started on your own.

If you want to create a new project under your GitHub account starting with the template, click the button that says _Use this template_:
![this]({{site.url}}/assets/img/2021-07-08-Getting-Started/use-this-template.png)

If you just want to make a quick copy for experimenting, click the button that says _Code_:
![this]({{site.url}}/assets/img/2021-07-08-Getting-Started/code.png)

Clone into a convenient location or download the zip file and unzip it. You'll probably want to change the name of the top-level folder from `oml-template` to something meaningful to you. For this example I called it `getting-started-with-oml`.

## Importing Into Rosetta

Select the _File/Import..._ menu item. Then select _Existing Gradle Project_:
![this]({{site.url}}/assets/img/2021-07-08-Getting-Started/existing-gradle-project.png)

If Eclipse shows you the Gradle Welcome dialog, click _Next_:
![this]({{site.url}}/assets/img/2021-07-08-Getting-Started/gradle-welcome.png)

Navigate to the folder where you placed the renamed template and click _Finish_:
![this]({{site.url}}/assets/img/2021-07-08-Getting-Started/import-gradle-project.png)

You should now see `oml-template` in the Project Explorer:
![this]({{site.url}}/assets/img/2021-07-08-Getting-Started/project-explorer.png)

## Update the Project Name

Select `oml-template` in the Project Explorer. Select the _File/Rename..._ menu item, and rename the project for your purposes. In this example, we're changing the name to `getting-started-with-oml`.

The template name appears in three other places: `.fuseki.ttl`, `build.gradle`, and `settings.gradle`.

## A Simple Vocabulary and Vocabulary Bundle
## A Simple Description and Description Bundle
## Some Simple Analyses
