---
sidebar_position: 2
---
import TOCInline from '@theme/TOCInline';


# Introduction to Graph Neural Networks pack

This guide summarizes the projects included in the Graph Neural Network pack.

Graph Neural Networks operate on data structured as graphs.

Use this pack to jumpstart your Graph project development for applications such as social networks, chemical compounds, maps, transportation systems, recommender systems and many more.

This pack includes the following projects related to Graphs and Graph Neural Networks :-

<TOCInline toc={toc} />;

## Basics of Graph Theory

Graph is a combination of vertices (nodes) and lines (edges). Vertex is a point where the lines meet and Edge is the line connecting two vertices.

![graph](/img/graph.png)

Below is an example of visual representation of graphs. This is the character network for Harry Potter and the Goblet of Fire.

![harry_potter_graph](/img/harry_potter_graph.png)

The project (filename "Graph 1- Graph Theory (1)") illustrates the shortest path distance graph between US airports from an airline flights dataset.

## Knowledge Graph

You can use the upload button on the top-right bar of the JupyterLab interface to upload files.

![upload](/img/upload.jpg)

If you have multiple files and folders, the best way would be to zip your files and upload the zip to hub. Once you upload it to hub you can unzip it using the terminal. The steps to unzip are as follows:

1. Open a terminal tab in JupyterLab
2. Change directory to `SageMaker/` with `cd SageMaker`
3. Unzip your file with the `unzip` command which looks something like this: `unzip my_file.zip`

:::note
If you uploaded your zip in any other location apart from the root of the file explorer then put that path while running the unzip command. Let's say I have a folder called code in my instance and I uploaded the zip file inside the code folder, then the command in terminal to unzip would be
:::

```bash
cd SageMaker
unzip code/my_file.zip
```


## Intro to Graph and Graph Neural Networks

Yes, you can install new libraries inside the notebook itself. Notebook cells can run all terminal commands by prefixing the command with `!`. So to install a new library with `pip` run the command in the following format inside a code cell in your notebook

```bash
!pip install <name of library>
```

## Graph Convolution Network

You can run python scripts also with the `!` in the notebook cell. So running a python file would look something like this

```bash
!python my_file.py
```

## Graph Attention Network

TODO

## Relational GCN

TODO

## Generative Models for Graph

TODO

## Giant Graphs

TODO

## Recommendation Using Graph

TODO

## Graph analysis with Neo4j

TODO
