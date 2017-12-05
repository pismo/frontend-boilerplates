import { getCurrentEnv } from '../'

/**
 * Interpolates `[env]` tags in all string values of given object
 * @param {Object} data - Object to have its string values interpolated
 */
const replaceEnv = (data = {}, givenEnv) => {
  const hostname = window.location.hostname
  const currentEnv = givenEnv || getCurrentEnv(hostname)
  const shouldReplaceBaseURL = /itau/gi.test(currentEnv)
  const result = {}

  for (const key in data) {
    const value = data[key]

    if (typeof value !== 'string') {
      result[key] = value
      continue
    }

    if (value.indexOf('[env]') === -1) {
      result[key] = value
      continue
    }

    if (!shouldReplaceBaseURL) {
      result[key] = value.replace(/\[env\]/gi, currentEnv)
      continue
    }

    const valueParts = value.split('/')
    valueParts[2] =
      currentEnv === 'itauqa'
        ? 'api-sandbox.pismolabs.io/auth'
        : 'api-gateway-itau.pismo.io/auth'

    result[key] = valueParts.join('/')
  }

  return result
}

export default replaceEnv
