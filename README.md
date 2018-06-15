[![travis](https://img.shields.io/travis/christian-fei/mu-promise.svg?style=flat-square)](https://travis-ci.org/christian-fei/mu-promise) [![npm-version](https://img.shields.io/npm/v/mu-promise.svg?style=flat-square&colorB=007EC6)](https://www.npmjs.com/package/mu-promise) [![npm-dependencies](https://img.shields.io/badge/dependencies-none-blue.svg?style=flat-square&colorB=44CC11)](package.json) [![standard-js](https://img.shields.io/badge/coding%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/) [![npm-license](https://img.shields.io/npm/l/mu-promise.svg?style=flat-square&colorB=007EC6)](https://spdx.org/licenses/ISC)

# µ-promise

super light function to write promises! ✍️

you can see this package [literally as a wrapper](./index.js) for `module.exports = cb => new Promise((r, j) => cb(r, j))`


## usage

```
const µ = require('mu-promise')

µ((resolve, reject) => resolve(42))
.then(console.log)
```

## installation

```
npm i mu-promise
```

## development

```
npm i
npm t
```
