/**
 * @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/functions-event-structure.html#functions-event-structure-query-header-cookie
 */
export type CF2Attribute = Record<
  string,
  {
    value: string
    multiValue?: {
      value: string
    }[]
  }
>
