---
title: Optimizing GraphQL Applications
date: "2018-10-29T11:00:00.000Z"
---

Author: Ryan Chenkie

# Timeline
Specs was publish in 2015

# How to optimize

Do not use all of the optimization you are suggested. Think how does they influence each other.

## Tips
* group requests and alias them if som of the data are repeating
* React - in exchange to classic queries in the components use **apollo** and use `useBatching` option to `true`
    * **Batching would cost the request length same as th slowest sub-query**
* Try to shorter the query strings
    * use encoding for shortening 
        * server knows the hash - return response
        * does not know > server return tha does not know > client sends full query string > sever cache query string with hash and return request

# Apollo engine

* Analytics for graphql engine - like google analytic for graphql

# Smart resolvers
* query could be resolved by multiple resolvers 
    * sometime the does not share data/context event it could lead to more efficient data fetch
    * **Solve tip** 
        * Note - Hasura was optimizing we promote them on [hacktoberfest](https://hacktoberfest-event-brno-2018.herokuapp.com/resources) 
        * From abstract tree you got from ghrphql it is possible to change mapping to SQL query (or other datasource you use)
        * transformation result data to jsou could be also optimized

# Query splitting
Sometimes it is possible to split query to get more important part of data first and then wait for the rest

# Optimistic UI
 - same as for Rest API - show the result (i.e. data were saved) + and then send the request and in case of error notify user

# Key notes
* wait after you really feel that you app need to be optimized 
* expect the changes
* experiment with optimizations 

