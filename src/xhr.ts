import { head } from 'shelljs'
import { AxiosRequestConfig } from './types'

export default function xhr(config: AxiosRequestConfig) {
  const { headers, data, url, method = 'get' } = config

  const request = new XMLHttpRequest()

  request.open(method.toUpperCase(), url, true)

  Object.keys(headers).forEach(name => {
    if (data === null && name.toLowerCase() === 'content-type') {
      delete headers[name]
    } else {
      request.setRequestHeader(name, headers[name])
    }
  })

  request.send(data)
}
