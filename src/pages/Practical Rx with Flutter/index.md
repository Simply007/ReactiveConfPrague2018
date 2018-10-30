---
title: Practical Rx with Flutter
date: "2018-10-29T14:00:00.000Z"
---

Authors: 
* BRIAN EGAN
* FILIP HRACEK

* reactive vs proactive approach
    * proactive - listening on stream of events and get the data and display results (just by the functional transformation)


# Use case - search screen with listing app implemented ba Flutter
* [Flutter](https://flutter.io/)
  * Reactive framework to build app
* Using stream design pattern for filtering the list of data in listing by the search string
* reactive 
    * problem - with race condition - return from search for short patter would take longer than longer prefix (app - longer vs apple - shorter) -> search would return more accurate result and the the search for less specific pattern is returned and return more vague results
    * solution - use RX* for flutter
      1. wait for all promises to be finished (asyncmap)
          * \- search last the longest search :/
      2. use `switchmap` 
      3. use dbounce - same as example for SDK RX for .NET
      4. use combiner for in-memory merging

## Recap
* async => out of order 
  * use switchMap to solve from functional input to functional output

# Use case
* infinite scrolling - how to solve when to load another data
  * exhaustMap

# Other map
There are al lot of types specialized for the specific scenario

# Combining streams
* Like Spotify Radio and thumbs up and thumbs down button when listening and listing future music

# Concatenation of streams
* concat / concatEager
* searching for data by first and the second word and combination of these words

# Wrap-up
* RX is created to combine many strategies, how to combine, filer and process data for specific use cases.


# Examples
* RxDart Repo
  * https://github.com/ReactiveX/rxdart/tree/master/example/flutter/github_search
* Flutter Architecture Samples
  * https://github.com/brianegan/flutter_architecture_samples