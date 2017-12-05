export default function stripAllButNumbers(str){
  if (!str || !str.length) {
    return ''
  }
  return str.replace(/\D/g, '') // Remove tudo o que não é dígito 
}
