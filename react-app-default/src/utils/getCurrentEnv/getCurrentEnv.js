/**
 * Retrieve current environment acronym from URL (e.g.: 'qa', 'dev')
 * @param {string} hostname - defaults to window.location.hostname
 */
const getCurrentEnv = (hostname = window.location.hostname) => {
  if (!hostname || /localhost/.test(hostname)) {
    return '-dev'
  }

  const isELB = /amazonaws/gi.test(hostname)
  const matchFromURL = hostname.match(/(itau|dev|qa|staging|prod|br|stable)/)
  const acronym = (matchFromURL && matchFromURL[0]) || 'dev'

  switch (acronym) {
    case 'dev':
    case 'qa':
    case 'staging':
      return `-${acronym}`
    case 'itau':
      if (isELB) {
        return `${acronym}qa`
      }

      return acronym
    default:
      return ''
  }
}

export default getCurrentEnv
