# is-loading

![Node](https://img.shields.io/node/v/is-loading.svg?style=flat-square)
[![NPM](https://img.shields.io/npm/v/is-loading.svg?style=flat-square)](https://www.npmjs.com/package/is-loading)
[![Travis](https://img.shields.io/travis/hekigan/is-loading/master.svg?style=flat-square)](https://travis-ci.org/hekigan/is-loading)
[![David](https://img.shields.io/david/hekigan/is-loading.svg?style=flat-square)](https://david-dm.org/hekigan/is-loading)
[![Coverage Status](https://img.shields.io/coveralls/hekigan/is-loading.svg?style=flat-square)](https://coveralls.io/github/hekigan/is-loading)

> Small helper to give the user a visual feedback that something is happening 

### Usage

```js
import isLoading from 'is-loading';

```

### Installation

Install via [yarn](https://github.com/yarnpkg/yarn)

	yarn add is-loading (--dev)

or npm

	npm install is-loading (--save-dev)


### configuration

You can pass in extra options as a configuration object (➕ required, ➖ optional, ✏️ default).

```js
import isLoading from 'is-loading';

```

➖ **property** ( type ) ` ✏️ default `
<br/> 📝 description
<br/> ❗️ warning
<br/> ℹ️ info
<br/> 💡 example

### methods

#### #name

```js
isLoading

```

### Examples

See [`example`](example/script.js) folder or the [runkit](https://runkit.com/hekigan/is-loading) example.

### Builds

If you don't use a package manager, you can [access `is-loading` via unpkg (CDN)](https://unpkg.com/is-loading/), download the source, or point your package manager to the url.

`is-loading` is compiled as a collection of [CommonJS](http://webpack.github.io/docs/commonjs.html) modules & [ES2015 modules](http://www.2ality.com/2014/0
  -9/es6-modules-final.html) for bundlers that support the `jsnext:main` or `module` field in package.json (Rollup, Webpack 2)

The `is-loading` package includes precompiled production and development [UMD](https://github.com/umdjs/umd) builds in the [`dist` folder](https://unpkg.com/is-loading/dist/). They can be used directly without a bundler and are thus compatible with many popular JavaScript module loaders and environments. You can drop a UMD build as a [`<script>` tag](https://unpkg.com/is-loading) on your page. The UMD builds make `is-loading` available as a `window.isLoading` global variable.

### License

The code is available under the [MIT](LICENSE) license.

### Contributing

We are open to contributions, see [CONTRIBUTING.md](CONTRIBUTING.md) for more info.

### Misc

This module was created using [generator-module-boilerplate](https://github.com/duivvv/generator-module-boilerplate).
