---
title: Actor Model in Javascript
date: "2018-10-30T10:30:00.000Z"
---

Author: ISMAIL MUHAMMAD

# Use case - chat room 
* user connect to the one room in the room group
  * **problem: switching users between room**
  * there is no specific order in the callbacks when user are changing the rooms
  * threads + blocking - expensive to create thread and they are limited

## Solution
1. assign ID to the subscription
    * not really scaling
2. Actor model
    * actor: entity(object) 
      * you send messages to the actor
      * all messages are queued in the actor
      * keeps local state and it is not accessible from the outside
    * how does it solve concurrency?
      * **using [Actrix](https://github.com/ismailhabib/actrix)** library implementing actor model
    * basically create the async processing to be sequential - badd response and UX
      * Solving
        * Short circuiting -> try to optimize the actor queue - not process old message whether there are some more recent updates
          * using cancellation strategy
            * using cancelable promises - different syntax - no async await, but `*` and `yield`  to be able to group cancellations

# Key notes
*  Actrix could be more efficient in specific scenarios


# Questions
* Testing app
  * just some tests in repository - by case to case - no framework  
