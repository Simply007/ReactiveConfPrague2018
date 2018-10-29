---
title: End-to-end testing is hard - but it doesn't have to be
date: "2018-10-29T13:30:00.000Z"
---

Author: GLEB BAHMUTOV
[Twitter](https://twitter.com/bahmutov)


# Cypress
* basically testing environment runnong app in iframe
* now it is open source
* [testing tool/framework](https://www.cypress.io/) for testing e2e
    * similar as selenium for javascript
* using native API - framework agnostic


## Command retries
* using when app uses async callbacks to assert 
* selecting an element using multiple selectors `get(ul).get(li).get(a)` how about the li is removed when selection asynchronously..
* possibility to implement custom retry logic

## Jumping to the back-end from client test and back
* prepared data on back-end, run test loading data, get back to test 

## Easy syntax - single command queue
* no async confusing  syntax 
* **writing tests looks like they are synchronous - all commands are placed to the queue ans processed one by one**
* basically writing test is defining the queue of command pipeline - reactive stream like a `pipe()` method in javascript

## Comparison with other testing tools
* selenium is focusing on different use cases

## Customization
* by accessing parent/document object in the setup phase
 
 

