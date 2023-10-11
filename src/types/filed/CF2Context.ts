/**
 * @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/functions-event-structure.html#functions-event-structure-context
 */
export type CF2Context = {
  /**
   * The CloudFront domain name of the distribution that's associated with the event.
   * @example 'd111111abcdef8.cloudfront.net'
   */
  distributionDomainName: string

  /**
   * The ID of the distribution that's associated with the event.
   * @example 'EDFDVBD6EXAMPLE'
   */
  distributionId: string

  /**
   * The event type, either viewer-request or viewer-response.
   */
  eventType: 'viewer-request' | 'viewer-response'

  /**
   * A string that uniquely identifies a CloudFront request (and its associated response).
   * @example 'EXAMPLEntjQpEXAMPLE_SG5Z-EXAMPLEPmPfEXAMPLEu3EqEXAMPLE=='
   */
  requestId: string
}
