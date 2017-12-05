export default function formatStringAsDDMMAAA(str){
  str = String(str)
  str = str.replace(/\D/g, '') // Remove tudo o que não é dígito
  if (str.length===0) return '' // O length pode ser 0

  let formatted = ''
  const dd = str.substr(0,2)
  if(dd && dd.length===2) {
    formatted = dd+'/'
  } else {
    formatted = dd
  }

  const mm = str.substr(2,2)
  if(mm && mm.length===2) {
    formatted += mm+'/'
  } else {
    formatted += mm
  }

  const aaaa = str.substr(4,4)
  if(aaaa) formatted += aaaa

  return formatted
}
