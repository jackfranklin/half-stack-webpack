
![fit](https://raw.githubusercontent.com/webpack/media/master/logo/logo-on-white-bg.jpg)

---


## The modern developer's webpack workflow

---

## 1. Google: "how to do X in webpack"

---

## 2. Find StackOverflow post

---

## 3. Copy and paste

---

## 4. It works, for now

---

## 5. But then you need to tweak it

---

# Ah.

---

![](http://lucasturaro.space/wp-content/uploads/2015/06/chalkboard-logo.jpg)

---

# It doesn't have to be like this

---

# Firstly: do you _actually_ need Webpack?

---

![inline](frontendcenter.png)

Glen Madern: https://frontend.center/

---

# What is Webpack?

---

## "An ahead of time compiler for the browser"

---

## Webpack does what the browser would do if given your app:

- find all images in your CSS and download them
- parse your JavaScript dependencies and download them
- parse all CSS for imports and download them

---

## Webpack can do this right at the beginning

And create a more optimised bundle, saving the browser (and user) time

---

## Webpack is not just for JavaScript

---

![fit](diagram1.png)

---

![fit](boom.png)

---

![fit](unicorn.png)

---

## Webpack Terminology to tell your friends

---

## A module

Any file that your application uses. __Not__ just JavaScript. CSS, images, text files, anything.

---

## Chunk

A file, or a group of files that Webpack has squashed together

---

## Entry point

A file webpack will search from to find dependencies and modules

---

## A loader

A Webpack plugin that can parse certain types of files and do something to them

---

![fit](loader.png)

---

## Let's do it

---

## `npm install --save-dev webpack@2.1.0-beta.26`

---

## `index.html`

```html
<!DOCTYPE html>
<html>
  <head><title>Github</title></head>
  <body><script src="dist/main.js"></script></body>
</html>
```

---

## `src/main.js`

```js
var username = 'jackfranklin'

fetch('https://api.github.com/users/jackfranklin')
  .then(function(d) { return d.json() })
  .then(function(data) {
    console.log('Got github data', data)
  })
```

---

## Configuring Webpack

- Where should Webpack start looking?
- Where should it output to?

---

`webpack.config.js`

```js
var path = require('path')

module.exports = {
  // where should it look?
  entry: path.resolve('src', 'main.js'),

  // where should it output to?
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  }
}
```

---

## run `webpack`

```
Hash: c09c87fc891968a374a6
Version: webpack 2.1.0-beta.26
Time: 70ms
  Asset     Size  Chunks             Chunk Names
main.js  2.63 kB       0  [emitted]  main
   [0] ./src/main.js 194 bytes {0} [built]
```

---


![fit](app1.png)


