---
layout: project
title: "Query Bot"
author: "Maged Elaasar"
author_image: maged.png
tag: [OML]
categories: [IMCE]
image:
  feature: querybot.jpeg
  credit: https://querybot.net/
---

## Project Summary

Presently, we store massive amounts of information in servers that contain a variety of critical data. However, sifting or parsing through such entries can be time-consuming and unintuitive. AI and voice assistants have also grown increasingly prevalent in our digital diet. We propose a solution that will marry these two software entities in a way that makes it seamless for consumers to engage with niche data – as simple as a google search with your voice.

Say you are sitting in a board meeting discussing the current state of a project building a physical system. An Amazon Alexa voice assistant device is also sitting in the center of the table. While discussing one of your products, you forget the specifications at hand and urgently need these exact numbers. Rather than querying a database manually to obtain this information, you interact with Alexa which interfaces with our chatbot:
```
Bot: what can I help you with?
User: what is the mass of the system? // original question
Bot: Do you mean estimated mass or allocated mass? // clarification question
User: allocated mass // disambiguation
Bot: the system has an allocated mass of 50Kg // answer
```

Our chatbot enables any user regardless of technical background to query specific information from a graph database (RDF triple store) without learning the query language (SPARQL) nor the database schema (vocabulary). Through a frontend web application interface, the user can ask questions about our dataset in English via our web chatbot interface through text messages and receive a succinct response in return. Our chatbot will dissect the user’s questions using NLP and may ask clarifying questions for disambiguation if needed (e.g., a noun they used could be mapped to multiple nouns in the database schema). The end result in the backend is an internal query to the graph database using a query language. This allows an intuitive English conversation between a human and a chatbot that makes it easy to extract specific information from a database with explicit queries whatsoever.

## Project Team

- Developers: 5 UCLA CS undergraduage students
- Mentor: Maged Elaasar

If you like to contribute to, provide feedback on, enquire about, or sponsor this project, please contact [Maged Elaasar](https://opencaesar.github.io/contributors/Maged%20Elaasar.html).