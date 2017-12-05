import { addLocaleData } from 'react-intl'
import validateReactIntlDictKeys from './validateReactIntlDictKeys'

import enLocale from 'react-intl/locale-data/en'
import ptLocale from 'react-intl/locale-data/pt'

import en from './en'
import pt from './pt'

addLocaleData([...enLocale, ...ptLocale])

if (!validateReactIntlDictKeys([en, pt])) {
  throw new Error('Confira as keys dos dicionarios de i18n.')
}

export default {
  en,
  pt,
}
