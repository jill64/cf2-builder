import { CF2Context } from './filed/CF2Context.js'
import { CF2IncludeBodyOption } from './filed/CF2IncludeBodyOption.js'
import { CF2Request } from './filed/CF2Request.js'
import { CF2Response } from './filed/CF2Response.js'
import { CF2Viewer } from './filed/CF2Viewer.js'

export type ViewerResponseEvent<T extends CF2IncludeBodyOption = undefined> = {
  version: '1.0'
  context: CF2Context
  viewer: CF2Viewer
  request: CF2Request
  response: CF2Response<T>
}
