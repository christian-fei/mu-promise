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
