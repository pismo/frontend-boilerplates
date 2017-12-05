export default function formatPhone(v, maxLength = 11) {
  v = v.replace(/\D/g, '') // Remove tudo o que não é dígito
  v = v.substr(0, maxLength)
  v = v.replace(/^(\d{2})(\d)/g, '($1) $2') // Coloca parênteses em volta dos dois primeiros dígitos
  v = v.replace(/(\d)(\d{4})$/, '$1-$2') // Coloca hífen entre o quarto e o quinto dígitos
  return v
}
