import { CF2Context } from './field/CF2Context.js'
import { CF2Request } from './field/CF2Request.js'
import { CF2Viewer } from './field/CF2Viewer.js'

export type ViewerRequestEvent = {
  version: '1.0'
  context: CF2Context
  viewer: CF2Viewer
  request: CF2Request
}
