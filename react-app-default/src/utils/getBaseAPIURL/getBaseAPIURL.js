/**
 * Retrieve current URL for Pismo APIs
 */
const getBaseAPIURL = () => {
  return process.env.REACT_APP_API_URL || 'http://api-dev.pismolabs.io'
}

export default getBaseAPIURL
