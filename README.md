# is-loading

![Node](https://img.shields.io/node/v/is-loading.svg?style=flat-square)
[![NPM](https://img.shields.io/npm/v/is-loading.svg?style=flat-square)](https://www.npmjs.com/package/is-loading)
[![Travis](https://img.shields.io/travis/hekigan/is-loading/master.svg?style=flat-square)](https://travis-ci.org/hekigan/is-loading)
[![David](https://img.shields.io/david/hekigan/is-loading.svg?style=flat-square)](https://david-dm.org/hekigan/is-loading)
[![Coverage Status](https://img.shields.io/coveralls/hekigan/is-loading.svg?style=flat-square)](https://coveralls.io/github/hekigan/is-loading)
![Downloads](https://img.shields.io/npm/dm/is-loading.svg)

[![NPM](https://nodei.co/npm/is-loading.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/is-loading/)

> Simple script to show visual feedback when loading data or any action that would take time.
> Vanilla script built with ES2015.
> Exported as CommonJS, ES2015 and UMD. So it should work everywhere.

### Usage

Vanilla javascript

```js
import isLoading from 'is-loading';

```

### Examples and Demo

http://hekigan.github.io/is-loading/

### Installation

Install via [yarn](https://github.com/yarnpkg/yarn)

	yarn add is-loading

or npm

	npm install is-loading


### configuration

You can pass in extra options as a configuration

*Parameters:*

By default all modes accept a DOM element as the first parameter, and an `option` object as the second.

```js
isLoading(targetElement, options);
```

Full overlay mode is an exception with either *no parameters* or 1 parameter for the `option` object.

```js
isLoading(options);
```

```js
import isLoading from 'is-loading';
```

➖ **targetElement** ( DOMElement )
<br/> 📝 The first parameter is expected to be a DOMElement.
<br/> 💡 example

```js
import isLoading from 'is-loading';

const $elt = document.querySelector('input[type="submit"]');

// Start the script
isLoading($elt).loading();

// Stop the script
isLoading($elt).remove();
```
➖ **options** ( Object )
<br/> 📝 The second parameter is an Object to set options.
<br/> 💡 default
```js
const optionsDefault = {
    'type': 'switch',        // switch | replace | full-overlay | overlay
    'text': 'loading',       // Text to display in the loader
    'disableSource': true,   // true | false
    'disableList': []
};
```
<br/> 💡 example

```js
import isLoading from 'is-loading';

// Assuming that we have a login form
const $button = document.querySelector('input[type="submit"]');
const $username = document.querySelector('#username');
const $password = document.querySelector('#password');

options = {
    'type': 'switch',        // switch | replace | full-overlay | overlay
    'text': 'login...',      // Text to display in the loader
    'disableSource': true,   // true | false
    'disableList': [$username, $password]
};

// using a variable
const loader = isLoading($button, options);
loader.loading(); // Start the script
loader.remove(); // Stop the script

// no variable
isLoading($button, options).loading(); // Start the script
isLoading($button, options).remove(); // Stop the script
```

### methods

#### #loading

Show the loader

```js
const loader = isLoading($elt, options);
loader.loading();

// or

isLoading($elt, options).loading();
```

#### #remove

Remove the loader

```js
const loader = isLoading($elt, options);
loader.remove();

// or

isLoading($elt, options).remove();
```

### Builds

If you don't use a package manager, you can [access `is-loading` via unpkg (CDN)](https://unpkg.com/is-loading/), download the source, or point your package manager to the url.

`is-loading` is compiled as a collection of [CommonJS](http://webpack.github.io/docs/commonjs.html) modules & [ES2015 modules](http://www.2ality.com/2014/09/es6-modules-final.html) for bundlers that support the `jsnext:main` or `module` field in package.json (Rollup, Webpack 2)

The `is-loading` package includes precompiled production and development [UMD](https://github.com/umdjs/umd) builds in the [`dist` folder](https://unpkg.com/is-loading/dist/). They can be used directly without a bundler and are thus compatible with many popular JavaScript module loaders and environments. You can drop a UMD build as a [`<script>` tag](https://unpkg.com/is-loading) on your page. The UMD builds make `is-loading` available as a `window.isLoading` global variable.

### License

The code is available under the [MIT](LICENSE) license.

### Contributing

We are open to contributions, see [CONTRIBUTING.md](CONTRIBUTING.md) for more info.
