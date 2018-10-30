---
title: Stay away from my path!
date: "2018-10-30T15:00:00.000Z"
---

Author:  ALEX MOLDOVAN

# Tips
* mind the geological difference for internet speed
* mind how expensive (or coverage) is the internet fo target audience
* possibility to make a progressive loading - define app shell, ...

# Life cycle phases of the app
* Phases
  1. display logo/ app shell
  1. time to display contentful paint
      * first CTA - link, button (still not interactive)
  1. first meaningful pain
  1. page interactive
  1. page loaded
* basically went through the interaction diagram of the Http discussion for fetching page
* critical rendering path 
  * path between request page by browser to first meaningful paint
  * tips:
    * get out js to use server site rendering - by server side rendering, sometime possible to use **script defer**
    * font loading - [font-display: swap/block/fallback](css-tricks.com/font-display-masses)
    * prioritize Above the Fold
      * inlining critical css
      * lazy load images
      * lazy load modules - i.e. dynamic imports - in webpack
    * image optimization
      * responsive images
      * modern encoding - webp (for chrome), ... => not supported ny standard
      * **https://github.com/aFarkas/lazysizes**
    * resource hints (possible to modify priority - network tab in dev tools) 
      * preload
      * importance
    * avoid 3rd party in the first meaningful paint
    * **use HTTP2**
      * possible to use more methods
      * possibility of parallel download things to achieve first meaningful paint


