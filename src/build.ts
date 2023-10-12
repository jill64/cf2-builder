import { exec } from 'child_process'
import { build as esbuild } from 'esbuild'
import { appendFile, mkdir } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import { promisify } from 'util'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

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
  const tmp = path.join(__dirname, 'tmp', 'index.js')

  const distFull = path.resolve(dist)
  const distDir = path.dirname(distFull)

  const ready = mkdir(distDir, { recursive: true })

  await esbuild({
    bundle: true,
    target: 'es6',
    platform: 'neutral',
    entryPoints: [source],
    outfile: tmp,
    format: 'iife',
    globalName: 'main'
  })

  await appendFile(
    tmp,
    'function handler (event) { return main.default(event); }'
  )

  await ready

  await promisify(exec)(`npx babel ${tmp} --out-file ${distFull}`, {
    cwd: __dirname
  })
}
