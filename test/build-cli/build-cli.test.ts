import { readFile } from 'fs/promises'
import { expect, test } from 'bun:test'
import { build } from '../../src/build'

test('build-cli', async () => {
  const dist = 'test/build-cli/dist/index.js'
  await build('test/build-cli/src/index.js', dist)
  const str = await readFile(dist, 'utf8')
  expect(
    str.includes('function handler (event) { return main.default(event); }')
  ).toBe(true)
})
