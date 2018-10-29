---
title: Modeling errors in Now CLI
date: "2018-10-29T16:00:00.000Z"
---

AUTHOR: JAVI VELASCO

# Now CLI
* allows to grab javascript/docker file to deploy 
* https://github.com/zeit/now-cli
* used for the use case example

## New alias
* use case example
* change URL of the deployed service
  * handle the price listing when you don!t own domain and allow to purchase it

# Use case and connection to error handling
* many of errors could happen when you want to alias you URL - **how to handle them + display what is exactly wrong**
  * Error when error is returned from the server
    * error contain only domain error and the message > **How to display the error how to find out the actual root cause of error**
  
## Solution
1. Encapsulate error to the objects 
2. Create a hierarchy of the error (prototype/class hierarchy)
3. Extend the error information by the context when the error was raised
4. do not throw error when we have known error -> return it 
    * it is possible to use static types (flow, typescript,...) and use it in Promise pipeline using generic inheritance - then is handled by generic inheritance and unknown ones by err statement of the promise
