---
sidebar_position: 2
---
import TOCInline from '@theme/TOCInline';


# Introduction to Graph Neural Networks pack

This guide summarizes the projects included in the Graph Neural Network pack.

Graph Neural Networks operate on data structured as graphs.

Use this pack to jumpstart your Graph project development for applications such as social networks, chemical compounds, maps, transportation systems, recommender systems and many more.

![graphs](/img/graphs.png)

This pack includes the following projects related to Graphs and Graph Neural Networks :-

<TOCInline toc={toc} />

## Basics of Graph Theory

Graph is a combination of vertices (nodes) and lines (edges). Vertex is a point where the lines meet and Edge is the line connecting two vertices.

![graph](/img/graph.png)

Below is an example of visual representation of graphs. This is the character network for Harry Potter and the Goblet of Fire.

![harry_potter_graph](/img/harry_potter_graph.png)

This project in the Graph pack illustrates the shortest path distance graph between US airports from an airline flights dataset.

## Knowledge Graph

Data can be represented as graphs to make it more interpretable. Below figure is an example of knowledge graph which shows several entities like Putin, Russia, KGB, APEC and how they are linked to one another.

![putin](/img/putin.png)

Question and Answering, one of the popular NLP tasks used in dialogue interface, chatbots and other information retrieval systems can be created with the help of knowledge graphs.

E.g. KG allows to go beyond just the keyword matching and returns more relevant results like the google search result shown here :

![YODA](/img/YODA.png)


## Intro to Graph and Graph Neural Networks

Images and text are structured data.

Convolutional Networks, Recurrent Networks, Autoencoders etc. work well on the structured data as they can be converted to the matrix or the vector like format

But Graphs are unstructured data.

![unstructured](/img/unstructured.png)

GNNs are able to model the relationship between the nodes in a graph and produce a numeric representation of it. Social networks, chemical compounds, maps, transportation systems are some of the applications where graph neural networks are used.

A graph is transformed to an embedding representation, for further information processing. Embeddings may be created with help of a neural network transformation.

![embedding2](/img/embedding2.png)

Graph frameworks like DGL (Digital Graph Library) provide in-built functions that make training the graphs easier.

## Graph Convolution Network

Just like normal Convolutional Neural Networks, Graph Convolution Networks (GCN) aid in detecting local patterns.

![embedding](/img/embedding.jpg)

Use cases of GCN, include social networks or citation networks, ID Card digitalization etc.

![id_card](/img/id_card.png)

ID Card digitalization

For GCN, a graph convolution operation produces the normalized sum of the node features of neighbors.

Different network configurations in GCN include Spectral and Spatial Convolutions (spacial GCN are also called message passing neural networks as they rely on aggregating feature information from neighbors).

## Graph Attention Network

Graph Attention Network (GAT) is a variant of Graph Convolutional Network that uses the attention mechanism for feature dependent and structure free normalization. This helps in representing the graphs better.

![gat](/img/gat.png)

In GAT, Additive Attention with Softmax Normalization is used for finding the attention weights (unlike Dot Product Attention of Transformers).

Classification of CORA Dataset (citation network) can be done with the help of Graph Attention Network built with the framework of DGL.

![cora](/img/cora.png)

## Relational GCN

Knowledge graphs have triplets in the form of subject, relation and the object. Thus, we need to consider the edges for the relations

Example:

![obama](/img/obama.png)

Barack Obama – Subject
Occupation – Relation
Politician - Object

In a movie recommender system, User-Movie interactions can be marked with edges with user ratings.

![movie](/img/movie.png)

Relational learning tasks include Entity Classification and Link Predictions.

![link_prediction](/img/link_prediction.png)

## Generative Models for Graph

Graph completion by the generative models helps in finding new links useful in knowledge graph completion, social networks, map development, drug and material discovery etc.

![generative](/img/generative.gif)

Deep Generative Models of Graphs (DGMG) helps in structural generation that uses probability driven structure to sequentially add the nodes, edges and finally connect with the destination nodes.

![dgmg](/img/dgmg.png)

Molecular structures like cyclic molecules can be generated and validated with DGMG.

![molecules](/img/molecules.png)

## Giant Graphs

TODO

## Recommendation Using Graph

TODO

## Graph analysis with Neo4j

TODO
