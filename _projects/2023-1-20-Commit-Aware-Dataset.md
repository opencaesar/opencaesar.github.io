---
layout: project
title: "Commit-Aware Dataset"
author: "Maged Elaasar"
author_image: maged.png
tag: [OML]
categories: [IMCE]
current: false
image:
  feature: commitaware.png
  credit: https://www.mdpi.com/2078-2489/9/11/285
---

## Project Summary

The Fuseki server allows storing datasets in RDF format and querying them with SPARQL. Such a server only provides users with the ability to query the current snapshot of the datasets. One way to extend this is allowing users to query the dataset’s history and see how the information has changed over time. 

Conveniently, Git stores versions of its files through commit-hashes, allowing users to roll-back to previous versions of files in the repository. Therefore, our goal is to provide an application whereby datasets managed in git repo are incrementally loaded to a Fuseki database annotated with repo's commit hashes. We would then allow users to specify a commit-hash or range of commit-hashes, when specifying dataset queries to inspect previous iterations of the dataset. The application will have a minimal command-line style interface where users can enter the Git repository URL and the target RDF dataset URL, then specify SPARQL queries.  With the query, a user can  provide a git commit-hash or commit-hash range to get the query results was or has changed over time. 

## Project Team

- Developers: 4 UCLA CS undergraduage students
- Mentor: Maged Elaasar

## Project Results

Click on the Slideshow button below to see a presentation with demos:

<style>
.responsive-wrap iframe{ max-width: 100%;}
</style>
<div class="responsive-wrap">
<!-- this is the embed code provided by Google -->
  <iframe src="https://docs.google.com/presentation/d/154OgqLC_zEqtdFAmmNy-m42jGNd_ENqlh1-FhWpkt_k/edit?usp=sharing" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
<!-- Google embed ends -->
</div>

## Sponsors

[![Modelware](/assets/img/modelware.png)](https://modelware.io/)