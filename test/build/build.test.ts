import { readFile } from 'fs/promises'
import { expect, test } from 'bun:test'
import { build } from '../../src/build'

test('build', async () => {
  const dist = 'test/build/dist/index.js'
  await build('test/build/src/index.ts', dist)
  const str = await readFile(dist, 'utf8')
  expect(
    str.includes('function handler (event) { return main.default(event); }')
  ).toBe(true)
})
