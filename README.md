# cf2-builder

A toolkit to build AWS CloudFront Functions with strict type definitions

## Installation

```sh
npm i -D cf2-builder
```

## Example

```js
// src/index.js
import type { ViewerRequestHandler } from 'cf2-builder'

/** @type {ViewerRequestHandler} */
export default (event) => {
  // ... Application Code
}
```

[Handler Types](./src/types/index.ts)

### Build

```js
import { build } from 'cf2-builder'

await build('src/index.js', 'dist/index.js')
```

Deploy the output js file to CloudFront using your preferred method.
