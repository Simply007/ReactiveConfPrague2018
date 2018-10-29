---
title: Typing Towards an Accessible Web
date: "2018-10-29T11:30:00.000Z"
---

Author: Tessa Kelly
* [Twitter](https://twitter.com/t_kelly9)
* [GitHub](https://github.com/tesk9)

# Intro
* Types for channels/user you would like to heave your site accessible
    * mouse users
    * keyboard users
    * users with epilepsy
    * ... many more

# POUR
* Perceivable
* Operable
* Understandable
* Robust

---
* A lot of maybes - more general that I have expected.
---

# Tips:
* Use tests - unit, integration, 
* [Capybara'S API](http://teamcapybara.github.io/capybara/)
    * for encouragin using semantic HTML
* Static code generation tools 
    * [ELM](https://elm-lang.org/)
        * A delightful language for reliable webapps.
Generate JavaScript with great performance and no runtime exceptions. 
        * [Interactive ELM](https://elm-lang.org/blog/interactive-programming) - interactivity for statically generated site.
* Use curated selection of elements
    * `divs` are not for semantic structure :-)
* Use descriptive attributes dor HTML
    * i.e. alt attribute for an img(picture) tag
        * possible to add description using AI
        * It could be defined in ELM for checking that all images gas its description

# Key notes
* It is possible to have accessibility integration tests
* Clickable div is not a solution for everything ;-)
* Accessibility is a UX/design work 

[Tessa Sources](http://slides.com/tessak/typing-web)