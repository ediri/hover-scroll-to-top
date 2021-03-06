
hover-scroll-to-top
===================
Angular JS ScrollToTop Button

[![Coverage Status](https://coveralls.io/repos/ediri/hover-scroll-to-top/badge.svg?branch=master&service=github)](https://coveralls.io/github/ediri/hover-scroll-to-top?branch=master)
[![Build Status](https://travis-ci.org/ediri/hover-scroll-to-top.svg?branch=master)](https://travis-ci.org/ediri/hover-scroll-to-top)

**Requirements**: Angular 1.4+

### Features:
- Create a button only visible after scrolling down
- With click on button, screen scrolls to the top

### Installation:

#### via bower:

```
$ bower install hover-scroll-to-top --save
```

*please use either the minified or unminified file in the `build` directory*

### Usage:
To start add the  require the lib as a dependency for your angular app:

```js
angular.module('myApp', ['scrollToTop']);
```

```html
<a href='#' scrolltotop> Scroll To Top </a>
```

### Hint

Best usage is with the lib [Font Awesome](https://fortawesome.github.io/Font-Awesome/)

```html
<a href='#' scrolltotop> 
 <i class="fa fa-4x fa-chevron-circle-up></i>
</a>
```