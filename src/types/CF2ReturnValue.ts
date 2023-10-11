import { CF2Request } from './filed/CF2Request.js'
import { CF2Response } from './filed/CF2Response.js'

export type CF2ReturnValue =
  | CF2Request
  | (Partial<CF2Response> & Pick<CF2Response, 'statusCode'>)
