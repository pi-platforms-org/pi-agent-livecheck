import assert from 'node:assert/strict'
import { test } from 'node:test'
import { slug } from '../src/text.js'

test('slug lowercases and joins words', () => {
  assert.equal(slug('  Hello World '), 'hello-world')
})
