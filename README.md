<!----- BEGIN GHOST DOCS HEADER ----->

# cf2-builder

<!----- BEGIN GHOST DOCS BADGES ----->

<a href="https://npmjs.com/package/cf2-builder"><img src="https://img.shields.io/npm/v/cf2-builder" alt="npm-version" /></a> <a href="https://npmjs.com/package/cf2-builder"><img src="https://img.shields.io/npm/l/cf2-builder" alt="npm-license" /></a> <a href="https://npmjs.com/package/cf2-builder"><img src="https://img.shields.io/npm/dm/cf2-builder" alt="npm-download-month" /></a> <a href="https://npmjs.com/package/cf2-builder"><img src="https://img.shields.io/bundlephobia/min/cf2-builder" alt="npm-min-size" /></a>

<!----- END GHOST DOCS BADGES ----->

🌐 A toolkit to build AWS CloudFront Functions with strict type definitions

<!----- END GHOST DOCS HEADER ----->

## Install

```sh
npm i cf2-builder
```

## Example

### Source

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

<!----- BEGIN GHOST DOCS FOOTER ----->

## License

[MIT](LICENSE)

<!----- END GHOST DOCS FOOTER ----->
