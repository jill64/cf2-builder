import { CF2Attribute } from './CF2Attribute.js'
import { CF2IncludeBodyOption } from './CF2IncludeBodyOption.js'

/**
 * The response object contains a representation of a CloudFront-to-viewer HTTP response.
 * In the event object that's passed to your function, the response object represents CloudFront's actual response to a viewer request.
 * If your function code returns a response object, it must use this same structure.
 * @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/functions-event-structure.html#functions-event-structure-response
 *
 * For more information about modified status codes and body content, see [Status code and body](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/functions-event-structure.html#functions-event-structure-status-body).
 * For more information about the structure of headers and cookies, see [Structure for a query string, header, or cookie](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/functions-event-structure.html#functions-event-structure-query-header-cookie).
 * For an example response object, see [Example response object](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/functions-event-structure.html#functions-response-structure-example).
 * @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/functions-event-structure.html#functions-event-structure-status-body
 */
export type CF2Response<T extends CF2IncludeBodyOption = undefined> = {
  /**
   * The HTTP status code of the response.
   * This value is an integer, not a string.
   * Your function can generate or modify the statusCode.
   * @example 200
   */
  statusCode: number

  /**
   * The HTTP status description of the response.
   * If your function code generates a response, this field is optional.
   * @example 'OK'
   */
  statusDescription: string

  /**
   * An object that represents the HTTP headers in the response.
   * If the response contains any Set-Cookie headers, those headers are not part of the headers object.
   * Cookies are represented separately in the cookies object.
   * The headers object contains one field for each header in the response.
   * Header names are converted to lowercase in the event object, and header names must be lowercase when they're added by your function code.
   * When CloudFront Functions converts the event object back into an HTTP response, the first letter of each word in header names is capitalized.
   * Words are separated by a hyphen (-).
   * For example, if your function code adds a header named example-header-name, CloudFront converts this to Example-Header-Name in the HTTP response.
   * @example {
   *   date: {
   *     value: 'Mon, 04 Apr 2021 18:57:56 GMT'
   *   },
   *   server: {
   *     value: 'gunicorn/19.9.0'
   *   },
   *   'access-control-allow-origin': {
   *     value: '*'
   *   },
   *   'access-control-allow-credentials': {
   *     value: 'true'
   *   },
   *   'content-type': {
   *     value: 'text/html'
   *   },
   *   'content-length': {
   *     value: '86'
   *   }
   * }
   */
  headers: CF2Attribute

  /**
   * An object that represents the cookies in the response (Set-Cookie headers).
   * The cookies object contains one field for each cookie in the response.
   * @example {
   *   ID: {
   *     value: 'id1234'
   *     attributes: 'Expires=Wed, 05 Apr 2021 07:28:00 GMT'
   *   }
   *   Cookie1: {
   *     value: 'val1'
   *     attributes: 'Secure; Path=/; Domain=example.com; Expires=Wed, 05 Apr 2021 07:28:00 GMT'
   *     multiValue: [
   *       {
   *         value: 'val1'
   *         attributes: 'Secure; Path=/; Domain=example.com; Expires=Wed, 05 Apr 2021 07:28:00 GMT'
   *       },
   *       {
   *         value: 'val2'
   *         attributes: 'Path=/cat; Domain=example.com; Expires=Wed, 10 Jan 2021 07:28:00 GMT'
   *       }
   *     ]
   *   }
   * }
   */
  cookies: CF2Attribute
} & (T extends 'include-body'
  ? {
      /**
       * Adding the body field is optional, and it will not be present in the response object unless you specify it in your function.
       * Your function does not have access to the original body returned by the CloudFront cache or origin.
       * If you don't specify the body field in your viewer response function, the original body returned by the CloudFront cache or origin is returned to viewer.
       * If you want CloudFront to return a custom body to the viewer, specify the body content in the data field, and the body encoding in the encoding field.
       * You can specify the encoding as plain text ("encoding": "text") or as Base64-encoded content ("encoding": "base64").
       * As a shortcut, you can also specify the body content directly in the body field ("body": "<specify the body content here>").
       * When you do this, omit the data and encoding fields.
       * CloudFront treats the body as plain text in this case.
       */
      body:
        | string
        | {
            /**
             * The encoding for the body content (data field).
             * The only valid encodings are text and base64.
             * If you specify encoding as base64 but the body is not valid base64, CloudFront returns an error.
             */
            encoding: 'text' | 'base64'

            /**
             * The body content.
             */
            data: string
          }
    }
  : Record<never, never>)
