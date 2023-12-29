import { CF2Attribute } from './CF2Attribute.js'

/**
 * The request object contains a representation of a viewer-to-CloudFront HTTP request.
 * In the event object that's passed to your function, the request object represents the actual request that CloudFront received from the viewer.
 * If your function code returns a request object to CloudFront, it must use this same structure.
 * @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/functions-event-structure.html#functions-event-structure-request
 */
export type CF2Request = {
  /**
   * The HTTP method of the request.
   * If your function code returns a request, it cannot modify this field.
   * This is the only read-only field in the request object.
   * @example 'GET'
   */
  readonly method: string

  /**
   * The relative path of the requested object. If your function modifies the uri value, note the following:
   * - The new uri value must begin with a forward slash (/).
   * - When a function changes the uri value, it changes the object that the viewer is requesting.
   * - When a function changes the uri value, it doesn't change the cache behavior for the request or the origin that an origin request is sent to.
   * @example "/media/index.mpd"
   */
  uri: string

  /**
   * An object that represents the query string in the request.
   * If the request doesn't include a query string, the request object still includes an empty querystring object.
   * The querystring object contains one field for each query string parameter in the request.
   * @example
   * {
   *   ID: {
   *     value: '42'
   *   }
   *   NoValue: {
   *     value: ''
   *   }
   *   querymv: {
   *     value: 'val1'
   *     multiValue: [
   *       {
   *         value: 'val1'
   *       },
   *       {
   *         value: 'val2,val3'
   *       }
   *     ]
   *   }
   * }
   */
  querystring: CF2Attribute

  /**
   * An object that represents the HTTP headers in the request. If the request contains any Cookie headers, those headers are not part of the headers object.
   * Cookies are represented separately in the cookies object.
   * The headers object contains one field for each header in the request.
   * Header names are converted to lowercase in the event object, and header names must be lowercase when they're added by your function code.
   * When CloudFront Functions converts the event object back into an HTTP request, the first letter of each word in header names is capitalized.
   * Words are separated by a hyphen (-).
   * For example, if your function code adds a header named example-header-name, CloudFront converts this to Example-Header-Name in the HTTP request.
   * @example {
   *   host: {
   *     value: 'video.example.com'
   *   }
   *   origin: {
   *     value: 'https://website.example.com'
   *   }
   *   'cloudfront-viewer-country': {
   *     value: 'GB'
   *   }
   *   accept: {
   *     value: 'application/json'
   *     multiValue: [
   *       {
   *         value: 'application/json'
   *       },
   *       {
   *         value: 'application/xml'
   *       },
   *       {
   *         value: 'text/html'
   *       }
   *     ]
   *   }
   * }
   */
  headers: CF2Attribute

  /**
   * An object that represents the cookies in the request (Cookie headers).
   * The cookies object contains one field for each cookie in the request.
   * For more information about the structure of query strings, headers, and cookies, see [Structure for a query string, header, or cookie](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/functions-event-structure.html#functions-event-structure-query-header-cookie).
   * For an example event object, see [Example event object](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/functions-event-structure.html#functions-event-structure-example).
   *  @example {
   *   Cookie1: {
   *     value: 'value1'
   *   }
   *   cookie_consent: {
   *     value: 'true'
   *   }
   *   cookiemv: {
   *     value: 'value3'
   *     multiValue: [
   *       {
   *         value: 'value3'
   *       },
   *       {
   *         value: 'value4'
   *       }
   *     ]
   *   }
   * }
   */
  cookies: CF2Attribute
}
