import { CF2ReturnValue } from './CF2ReturnValue.js'
import { ViewerResponseEvent } from './ViewerResponseEvent.js'
import { CF2IncludeBodyOption } from './field/CF2IncludeBodyOption.js'

export type ViewerResponseHandler<T extends CF2IncludeBodyOption = undefined> =
  (event: ViewerResponseEvent<T>) => CF2ReturnValue
