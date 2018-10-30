---
title: Reactive iOS App Development
date: "2018-10-30T10:30:00.000Z"
---

Author: CHRIS FUENTES

* Working on AR in iOS reactive way

* Examples on [Realm (DB)](https://realm.io/)
  * what you need is the query observation support

# Usecase - killing bugs in AR by pointing to them by camera
* communication is made to sync score of the play
* app has local db and this is a single point of true for the game and on the background it is synchronized to the server db
  * solve network problems
  * conflict solving should be implemented - no out of the box - most easiest - last record wins
* all updates after fired in main thread - to make a showcase it has quite great performance

## Disadvantages
* onboarding on Realm is low
* object nesting update - the callbacks for rendering would not be efficient
