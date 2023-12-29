import { CF2Request } from './field/CF2Request.js'
import { CF2Response } from './field/CF2Response.js'

export type CF2ReturnValue =
  | CF2Request
  | (Partial<CF2Response> & Pick<CF2Response, 'statusCode'>)
