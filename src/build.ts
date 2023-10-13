import { build as esbuild } from 'esbuild'
import { appendFile } from 'fs/promises'

export const build = async (
  /**
   * The source file to build
   * @example 'src/index.ts'
   */
  source: string,
  /**
   * The destination file to build to (must be a .js file)
   * @example 'dist/index.js'
   */
  dist: string
) => {
  await esbuild({
    bundle: true,
    target: 'es5',
    platform: 'neutral',
    entryPoints: [source],
    outfile: dist,
    format: 'iife',
    globalName: 'main'
  })

  await appendFile(
    dist,
    'function handler (event) { return main.default(event); }'
  )
}
