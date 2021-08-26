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

_Image credit: https://en.wikipedia.org/wiki/Vertex_(graph_theory)_

Below is an example of visual representation of graphs. This is the character network for Harry Potter and the Goblet of Fire.

![harry_potter_graph](/img/harry_potter_graph.png)

_Image credit: https://anthonybonato.com/2016/08/03/social-networks-in-novels-and-films/_

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

Giant graphs have usually millions or billions of nodes and edges as seen in real life examples. 

E.g. Reddit dataset constructed by Hamilton et al., wherein the nodes are posts and edges are established if two nodes are commented by a same user. This graph has 233,000 nodes, 114.6 million edges and 41 categories.

![reddit](/img/reddit.png)

Social Networks like Facebook, Twitter and LinkedIn has user graphs ranging from 10 million to billion nodes for the representation of the users.

![social_network](/img/social_network.png)

Due to the storage and computation needed for training these graphs in neural networks, we need sampling techniques. There are various ways in which sampling can be done from giant graphs. Two of the famous strategies are Neighbor Sampling and Control Variate Sampling.

GraphSage is a variant of Graph Convolutional Network used for finding inductive node embeddings. This particular technique can be used in finding the node classification for the Pubmed dataset by Neighbor Sampling.

![graphsage](/img/graphsage.png)

## Recommendation Using Graph

Two of the key recommendation models are Content based recommendations and Collaborative filtering.

Collaborative filtering models solve the matrix completion task by taking into account the collective interaction data to predict future ratings or purchases.

![collaborative_filtering](/img/collaborative_filtering.png)

Matrix completion can be considered as link predictions on graphs.

Graph Convolution Matrix Completion (GC-MC) is a graph based autoencoder framework for the matrix completion based on the deep learning for graphs.

Encoder produces the latent features of user and item nodes through message passing on bipartite interaction graph. Decoder is used to reconstruct the rating links from the latent features.

![recommendations](/img/recommendations.jpg)

## Graph analysis with Neo4j

A relational database is a collection of data items with pre-defined relationships between them. These items are organized as a set of tables with columns and rows. It can be queried by SQL.

Graph database is simply composed of dots and lines. Relational databases can easily handle direct relationships, but indirect relationships are more difficult to deal with in relational databases. Graph databases helps in storing these relations.

A graph database transcends storing data points, rather, it stores data relationships.

![graph_db](/img/graph_db.png)

Some of the most popular implementations of graph databases are :

Neo4j
Amazon Neptune
TigerGraph

![neo4j](/img/neo4j.png)

Neo4j is an Open-source graph database. It supports a wide range of programming languages including Python and OS including Windows, Linux. Cypher is its query language and helps to connect with Spark.

Neo4j finds use in fraud detection, real-time recommendations etc.

Graph Analysis can be done in Neo4j Sandbox, cloud based instance of Neo4j server by connecting it with CellStrat Hub notebooks.

![neo4j_nodes](/img/neo4j_nodes.png)

A query with Cypher might look like :

MATCH (:Person {name: 'Jennifer'})-[:WORKS_FOR]->(company:Company) RETURN company

Recommendations are done with querying the graph in Neo4j. Techniques used for the recommendations are - Collaborative Filtering, PageRank, Personalized PageRank, Topic Sensitive Search
