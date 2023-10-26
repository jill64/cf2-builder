<!----- BEGIN GHOST DOCS HEADER ----->
<!----- END GHOST DOCS HEADER ----->

## Installation

```sh
npm i -D cf2-builder
```

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
