import { isPlainObject } from './util'

export const transformRequest = function(data: any): any {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}
