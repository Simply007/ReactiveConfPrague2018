---
title: 10KB or Bust - The Delicate Power of Webpack and Babel
date: "2018-10-30T16:30:00.000Z"
---

Author: BRIAN HOLT

# Tips
* focus on your target audience
* comparing size of framework
* use @babel/preset-env against deprecated babel-preset-2015
* possibility to use different functionality embedded in browser depending on requesting browsers
* use only lodash method you need (i.e. **lodash-es/get**)
* `modules` setting for webpack to false
* Loose mode - using only polyfill you need
* node_env=production
* Code splitting
* Source maps - get rid of them on production code
* Image skeletons
  * **cool tip:** use SVG as a placeholder, animate it and load image on the background

Serve tips
* compress response
  * try [brotli](https://caniuse.com/#feat=brotli)


Sources:
* aka.ms/reactive-conf


