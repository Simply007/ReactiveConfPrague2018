---
title: Type-safe React with ReasonML
date: "2018-10-30T16:30:00.000Z"
---

Author: JARED FORSYTH
* [Twitter](https://twitter.com/jaredforsyth)

Source: jaredforsyth.com/type-safe-react

# Reason
* syntax & toolschain for OCaml
* OCaml - https://ocaml.org/
* BuckleScript - preformed and readable javascript
* why not flow/typescript
    * \- undefined is not a function
    * \- more errors that are raised in bigger app and hard to find the source
* why not Elm
    * it is an alternative
    * different syntax
    * it is haskell-like
    * \- no npm
    * \+ 100% safety
    * no mutation
    * focused on web UI
* possible to rewrite react app to reason continuously


## Local state with reducers
* nice composition of the state and action above it at one place, but still decomposable

Support of the Reason to try in browser
* sketch.sh
* repl.it
* codesandbox.io

# Bonus
* getType - https://github.com/cristianoc/genType

# What's next
* compilation reason to javaScript/iOS native/Android native