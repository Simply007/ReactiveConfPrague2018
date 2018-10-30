---
title: Convenient data fetching with Higher Order Components
date: "2018-10-30T11:30:00.000Z"
---

Author: MARTIN PINTER

# Intro
* separation of data fetching and their rendering

# Show case - process of scaling and fetch architecure tuning process
1. fetch data directly in react component
    * how to setup architecture to fetch the data just in React - as a part of a component
2. fetch data outside of the component
    * i.e. create "data-fetcher" component for encapsulating
    * \- error handling, loading has to be implemented in display component
    * \- passing data through hierarchy 
3. How to solve issues - State management
    * cache
      * handle loading state, error state (even failing)
      * update all components - by pub-sub model
      * 
    * State management
    * Use HOC for extracting this business logic
4. How to solve issue  - HOC
    * ...possible to use hooks when they are released
      * https://reactjs.org/docs/hooks-intro.html
    * fetching - implement retry policy
    * handle errors eventually
    * cache data 
    * tip - extract Redux from context of React and use it "outside" of it
    * **benefit: it is possible to use the business logic outside and share it** between React and React native for example