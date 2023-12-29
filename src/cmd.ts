import { App } from '@jill64/ts-cli'
import { build as esbuild } from 'esbuild'
import { appendFile } from 'fs/promises'

export const cmd = new App(
  {
    args: [
      ['source', 'The source file to build: (e.g. "src/index.ts")'],
      [
        'dist',
        'The destination file to build (must be a .js file) (e.g. "dist/index.js")'
      ]
    ]
  },
  async ({ args: { source, dist } }) => {
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
)

export const build = (
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
) => cmd.execute({ args: { source, dist } })
