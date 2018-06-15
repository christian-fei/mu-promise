/* globals test */
const µ = require('.')
const {equal} = require('assert')

test('called with callback like new Promise((resolve, reject) => resolve(42))', () => {
  µ((resolve, reject) => {
    resolve(42)
  })
  .then(result => equal(42, result))
})

test('called with callback async', () => {
  µ((resolve, reject) => {
    setTimeout(() => resolve(42), 50)
  })
  .then(result => equal(42, result))
})

test('returns promise', () => {
  const p = µ((resolve, reject) => {})
  equal(Object.getPrototypeOf(p), Promise.prototype)
})
