
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

---

## Watching for changes

### `webpack --watch`

```js
"scripts": {
  "build:dev": "webpack --watch"
}
```

---

```
Webpack is watching the files…

Hash: c09c87fc891968a374a6
Version: webpack 2.1.0-beta.26
Time: 103ms
  Asset     Size  Chunks             Chunk Names
main.js  2.63 kB       0  [emitted]  main
   [0] ./src/main.js 194 bytes {0} [built]
Hash: d9aad0a1ca8f706975ad
Version: webpack 2.1.0-beta.26
Time: 11ms
  Asset    Size  Chunks             Chunk Names
main.js  2.6 kB       0  [emitted]  main
   [0] ./src/main.js 163 bytes {0} [built]
```

---

## Refreshing is so much effort

### `npm install --save-dev webpack-dev-server@v2.1.0-beta.11`

---

## `webpack-dev-server`

```
Project is running at http://localhost:8080/
webpack output is served from /dist/
Hash: 1d366a627611ba06845c
Version: webpack 2.1.0-beta.26
Time: 947ms
  Asset    Size  Chunks             Chunk Names
main.js  247 kB       0  [emitted]  main
chunk    {0} main.js (main) 233 kB [entry] [rendered]
    [0] ./~/inherits/inherits_browser.js 672 bytes {0} [built]
    [1] (webpack)/buildin/global.js 506 bytes {0} [built]
    [2] ./~/debug/browser.js 3.76 kB {0} [built]
    [3] ./~/process/browser.js 5.3 kB {0} [built]
    ...
```

---

![fit autoplay loop](dev-server1.mov)

---

```js
"scripts": {
  "build:dev": "webpack --watch",
  "start": "webpack-dev-server"
},
```

---

## Loaders

```js
fetch('https://api.github.com/users/jackfranklin')
  .then(function(d) { return d.json() })
  .then(function(data) {
    console.log('Got github data', data)
  })
```

```js
const username = 'jackfranklin'
fetch(`https://api.github.com/users/${username}`)
  .then(d => d.json())
  .then(data => console.log('Got github data', data))
```

---

## Babel

```
npm install --save-dev babel-core
npm install --save-dev babel-preset-es2015
npm install --save-dev babel-loader
```

---

## `webpack.config.js`


```js
module.exports = {
  entry: path.resolve('src', 'main.js'),
  output: { ...  },
  module: {
    rules: [
    ]
  }
}
```

---

## Webpack Rules

- `test`: criteria for which files this rule should apply to
- `include`: which folder Webpack will look in to find files to apply the rule to
- `use`: which loaders should be run for these files

---

```js
{
  // apply this rule to any files that end in ".js"
  test: /\.js$/,
  // only look for files in the src directory
  include: path.resolve('src'),
  // configure the loaders for this rule
  use: [{

  }]
}
```

---

```js
{
  test: /\.js$/,
  include: path.resolve('src'),
  use: [{
    // for files that this rule applies to
    // run the babel-loader against them
    loader: 'babel-loader',
    // specific options for the babel loader
    options: {
      presets: ['es2015']
    }
  }]
}
```

---

## `src/main.js`

```js
const username = 'jackfranklin'

fetch(`https://api.github.com/users/${username}`)
  .then(d => d.json())
  .then(d => console.log('Got Github data', d))
```

---

## Restart dev server

---

![fit](webpack-babel.png)

---

![fit](safari-fetch.png)

---

## `npm install --save whatwg-fetch`

---

## `src/main.js` => `dist/main.js`

## `whatwg-fetch, src/main.js` => `dist/main.js`

---

## Entry points

```js
entry: {
  main: ['whatwg-fetch', path.resolve('src', 'main.js')]
},
```

---

![fit](safari-fetch-works.png)

---

## Let's make it a bit more interactive

---

```html
<div id="app">
  <form id="github-form">
    <input type="text" id="input-box" value="jackfranklin" />
    <button type="submit">Go!</button>
  </form>
  <div id="results"></div>
</div>
<script src="dist/main.js"></script>
```

---

```js
const form = document.getElementById('github-form')
form.addEventListener('submit', e => {
  e.preventDefault()
  const username = document.getElementById('input-box').value
  fetchPerson(username)
})
```

---

```js
const fetchPerson = username =>
  fetch(`https://api.github.com/users/${username}`)
    .then(d => d.json())
    .then(displayPerson)
```

--- 

```js
const displayPerson = user =>
  document.getElementById('results').innerHTML = `
    <h1>${user.name}</h1>
    <h3>${user.company}</h3>
    <p>${user.bio || 'No Bio :('}</p>
  `
```

---

![fit autoplay loop](github-demo.mov)

---

## Let's get some CSS in here

Remember, the goal of Webpack is for it to manage _all_ our assets, CSS included.

This is weird at first but stick with me...

(Also I suck at design, please forgive)

---

```css
form {
  width: 200px;
  margin: 10px auto;
}

#results {
  width: 300px;
  margin: 0 auto;
  border: 1px solid #111;
  background: #ddd;
}
```

---

```js
import './style.css'

const username = 'jackfranklin'
...
```

---

```
ERROR in ./src/style.css
Module parse failed: /github-app/src/style.css Unexpected token (1:5)
You may need an appropriate loader to handle this file type.
| form {
|   width: 200px;
|   margin: 10px auto;
 @ ./src/main.js 3:0-22
 @ multi main
```
---

```
npm install --save-dev css-loader
npm install --save-dev style-loader
```

- CSS Loader: parses CSS files
- Style Loader: dynamically inserts stylesheets into HTML

---

## Add another rule

```js
{
  test: /\.css$/,
  include: path.resolve('src'),
  use: [{
    loader: 'style-loader',
  }, {
    loader: 'css-loader',
  }]
}
```

__Loaders are applied from right to left, or bottom to top__

---

## Restart webpack-dev-server

---

![fit](css.png)

---


