import Yup from 'yup'

export default function formikValidate(schemaBuilder) {
  let schemaCache = {}

  return (values, props) => {
    const { locale } = props.intl
    // Constroi a funcao que formata mensagens
    const fm = (id, values) => props.intl.formatMessage({ id }, values)

    // Busca no cache ou constroi um schema para este idioma
    if (!schemaCache[locale]) {
      schemaCache[locale] = schemaBuilder(fm, props, Yup)
    }
    const schema = schemaCache[locale]

    return Yup.object()
      .shape(schema)
      .validate(values, { abortEarly: false })
      .catch(err => {
        // Percorre os erros de cada field e monta o objeto com erros para o formik
        let errors = {}
        err.inner.forEach(error => {
          let { path, message } = error
          if (!errors[path]) {
            errors[path] = message
          }
        })
        throw errors
      })
  }
}
