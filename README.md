<!----- BEGIN GHOST DOCS HEADER ----->

# cf2-builder

[![npm-version](https://img.shields.io/npm/v/cf2-builder)](https://npmjs.com/package/cf2-builder) [![npm-license](https://img.shields.io/npm/l/cf2-builder)](https://npmjs.com/package/cf2-builder) [![npm-download-month](https://img.shields.io/npm/dm/cf2-builder)](https://npmjs.com/package/cf2-builder) [![npm-min-size](https://img.shields.io/bundlephobia/min/cf2-builder)](https://npmjs.com/package/cf2-builder) [![ci.yml](https://github.com/jill64/cf2-builder/actions/workflows/ci.yml/badge.svg)](https://github.com/jill64/cf2-builder/actions/workflows/ci.yml)

🌐 A toolkit to build AWS CloudFront Functions with strict type definitions

<!----- END GHOST DOCS HEADER ----->

## Example

## Source

```ts:index.ts
// src/index.ts
import type { ViewerRequestHandler } from 'cf2-builder'

export default ((event) => {
  // ... Application Code
}) satisfies ViewerRequestHandler
```

[Handler Types](./src/types/index.ts)

### Build

```js
import { build } from 'cf2-builder'

await build('src/index.js', 'dist/index.js')
```

or use CLI

```sh
npx cf2-builder src/index.js dist/index.js
```

Deploy the output js file to CloudFront using your preferred method.
