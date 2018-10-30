---
title: Crafting Web Comics with Ember
date: "2018-10-30T09:30:00.000Z"
---

Author: JESSICA JORDAN
* [Twitter](https://twitter.com/jjordan_dev)

# Ember
* https://www.emberjs.com/
* A framework for ambitious web developers.

# Use case
* **How to create a web site  that looks like a classic comic book**
* modeled page as a route - one chapter
* motion simulation
  * chapter split to the images and place them in the rows 
    * think on responsive
  * use browser features to create a scrolling experience
    * like [Phallaina](https://imm3rsive.com/en/2016/02/09/phallaina-a-gorgeous-scrolling-comic-book-experience/)
    * use Web animation API to use animation, or even multi-layer animations

# How to - web animation API
* using DOM element, keyframeEffect for effect definition and option for i.e. duration, ...
* extend base component to have chenged background and then use a components to create a groups of component and then display them on the top of each other with different animation
* https://caniuse.com/#search=web%20animation
  * there is polyfill [web animation js](https://github.com/web-animations/web-animations-js) (support sequence effect)
* basically access to css animation





