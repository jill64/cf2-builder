import { cmd } from './cmd.js'

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
