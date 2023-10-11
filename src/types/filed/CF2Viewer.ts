/**
 * @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/functions-event-structure.html#functions-event-structure-viewer
 */
export type CF2Viewer = {
  /**
   * The viewer object contains an ip field whose value is the IP address of the viewer (client) that sent the request.
   * If the viewer request came through an HTTP proxy or a load balancer, the value is the IP address of the proxy or load balancer.
   * @example '198.51.100.11'
   */
  ip: string
}
