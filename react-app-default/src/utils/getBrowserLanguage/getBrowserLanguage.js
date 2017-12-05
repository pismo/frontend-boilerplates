import _getBrowserLanguage from 'get-browser-language'

const getBrowserLanguage = function() {
  let lang = _getBrowserLanguage()

  if (typeof lang === 'string') {
    return lang.substr(0, 2).toLowerCase() || 'en'
  }

  return 'en'
}

export default getBrowserLanguage
