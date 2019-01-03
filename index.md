CAESAR stands for **C**omputer **A**ided **E**ngineering for **S**ystems **AR**chitecture. It is a software platform that supports the transformation of Systems Engineering into a rigorous, integrated, and model-centric engineering practice. CAESAR supports the definition of a rigorous, multi-disciplinary, and tool-neutral methodology for Systems Engineering (SE). It adopts the semantic web approach of specifying knowledge with ontologies to specify a system architecture description. It also enables methodology-driven authoring of this system architecture description using a federated set of system engineering tools, provides a semantic data wareouse for continuously integrating fragments authored by each tool into a unified system architecture description, automates the analysis of that description using a variety of analysis tools that inspect it using ontology-based API and queries, faciliates keeping the fragments consistent by proposing changes based on insights gained from analyzing the integrated description, faciliates the review of the description status by generating gate products and organizing them into easy to browse dashboards, and configuration manages the system architecture description and protects its baseline using a change proposal process that allows peer-review, comments and approvals.

## Features

### Information Representation

CAESAR enables the creation, analysis and sustainment of system architectures through the use of architecture descriptions. A conceptual model of architecture description is first established using a set of vocabularies to codify the conventions and common practices of architecture description based on a given methodology. Then, the architecture of a system is described and analyzed based on that conceptual model.

CAESAR represents both the conceptual model and architecture descriptions using a set of ontologies expressed in the Ontology Modeling Language (OML). OML is a domain-specific language that facilitates expressing system architecture descriptions using the W3C standard Web Ontology Language (OWL). OML provides several benefits such as modular organization, expressive syntax, formal semantics, tool-neutrality, a query language, several sets of APIs, several exvhange formats, and several IDEs. For more information on OML, visit the OML project page.

### Information Authoring

CAESAR enables authoring vocabularies or architecture descriptions using one of its OML IDEs, which allow authoring information directly in OML using its textual syntax and visualizing it using its graphical syntax. The supported OML IDEs include Eclipse, VS Code, and Theia.

CAESAR also enables authoring system architecture descriptions using third party systems engineering tools that have been adapted to the methdology using a tool adapter. An adapte allows transforming information back and forth between the tool's native representation format and OML in a way that conforms to the methdology. 

CAESAR also enables authoring system architecture descriptions using its own System Architecture IDE, which can be extended with methdology-specific viewpoints that address functional or non-functional limitations of third party systems engineering tools. This IDE also has an adapter to transform the information back and forth between its native format and OML.

### Information Integration

CAESAR enables methdology-specific integration of fragments of vocabulary and system architecture descriptions, authored by possibly separate tools, into a unified system architecture description. The integration methodology is specified as a workflow graph, where the nodes represent the incrementally integrated fragments and the edges represent the data flow of integration. Each integration node is configured with one or more integration scripts, representing analyses to be (re-)run whenever one of the fragments to integrate changes. The integrations can be run manually or automatically based on events (changes to data sources, approvals, timers, etc).

CAESAR also helps maintain consistency between the integrated fragments by proposing changes to those fragments that help restore consistency. This often involves proposing change deltas in the OML representation of one fragment based on analyzing the intgerated system architecture description. The change deltas expressed in OML are then translated into tool-specific equivalents and proposed/applied using the authoring tool's adapter.

### Information Analysis

CAESAR allows vocabularies and system architecture descriptions to be analyzed using a Description Logic reasoner. This provides the ability to perform some default analyses on the dataset such as consistency checking (no contradictory axioms) and concept satisfiability (every class can be instantiated). 

CAESAR also allows vocabularies and system architecture descriptions to be queried using an expressive query language. Coupled with the ability to perform reasoning on the dataset, which adds new derived axioms, queries can be greatly simplified. These queries can be used to perform methdology-specific audits on the dataset to detect issues during integration.

CAESAR also allows vocabularies and system architecture descriptions to be analyzed using other registered analyses tools, by either transforming them into the expected input format of those tools, or by allowing these tools to query the datasets using published API or query endpoints. This effective decoupling of authoring and analysis tools, promotes reuse and reduces dependency on specific tools or vendors.

### Information Reporting

CAESAR allows reporting on vocabulary and system architecture descriptions in a variety of ways. This includes reporting on the datasets themselves or on results of analyses that have run on them. The reports can be static or interactive and can be produced using a variety of tools including analytics frameworks, notebooks, document generators, diagram visualizers, transformations, etc. 

CAESAR allows reports to be specified to address the needs of different stakeholders, such as systems developers, system testers, project management, etc. The reports are (re-)generated whenever a datasets is detected to have changed during integration. The new reports also get published to an online portal and organized in a way that faciliates finding them (through browse or search) by project stakeholders.

CARSAR allows stakeholders to review the reports and provide feedback on them by leaving comments and/or showing approvals. It also allows them to subscribe to some or all reports to get notified when new revisions become vailable.

### Information Configuration

CAESAR supports running the same integration workflow on different configurations of vocabularies and system architecture descriptions. This enables the integration of a baseline configuration, as well as configurations representing change proposals. A change proposal is first analyzed, using the same scripts run on the baseline, before it gets manually reviewed, accepted then merged into the baseline.

CAESAR also version controls of the artifacts resulting from running the integration workflows on those configurations. This enables the incremental execution of the integration workflows, i.e., rerunning the changed paths only. Also, by recording the complete history of integration, CAESAR enables the analysis of this history for audits and to gain insights on trends.
