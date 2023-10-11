import { CF2ReturnValue } from './CF2ReturnValue.js'
import { ViewerRequestEvent } from './ViewerRequestEvent.js'

export type ViewerRequestHandler = (event: ViewerRequestEvent) => CF2ReturnValue
