const formatCPF = number => {
  if (!number || !number.length) {
    return ''
  }
  
  number = number.replace(/\D/g, '') // Remove tudo o que não é dígito
  if (number.length===0) return '' // Ao remover letras o length pode ser 0

  number = number.substr(0, 11) // Limita a 11 digitos

  return `${number}`.split('').reduce((a, b, i) => {
    if (i === 2 || i === 5) {
      b += '.'
    }

    if (i === 9) {
      a += '-'
    }

    return a + b
  })
}

export default formatCPF
