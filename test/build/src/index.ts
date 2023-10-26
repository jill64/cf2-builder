import type { ViewerRequestHandler } from '../../../src/types'

export default (() => {
  return {
    statusCode: 200
  }
}) satisfies ViewerRequestHandler
