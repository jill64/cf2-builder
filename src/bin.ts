import { build } from './build.js'

const [src, dist] = process.argv.slice(2)

await build(src, dist)
