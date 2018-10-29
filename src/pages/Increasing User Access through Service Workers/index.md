---
title: Increasing User Access through Service Workers
date: "2018-10-29T10:00:00.000Z"
---

Author: Necoline Hubner
* [Twitter](https://twitter.com/necolinehubner)


# Intro talk
How to track attendance on refugee camp in Kenya
* create an mobile app for tracking attendance
    * most of them is using mobile
    * performance, battery drain, responsive, 
    * **offline capabilities** - service workers

# Service worker support:
*  https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/ready

# Predecessor:
* AppCache - should be used the way it was meant to be used

# Service workers
* no access to DOM
* Features
    * API analytics
    * Push notification
    * Caching

## Steps
1. registration
    * https
2. installation
    * configuring caching
3. waiting
    * only one service worker is working at one time
        * not recommended to force activation
4. activated
    * 
5. idle
6. terminated
7. redundant
    * when error occurs

## Cache validation strategy 
* update service worker itself
* assets
* content requests 
* ...

* Cookbook for caching

# Notes:
* developer notes
    * update on reload
    * clear sit cache