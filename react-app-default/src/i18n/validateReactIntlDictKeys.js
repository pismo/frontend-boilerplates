import uniq from 'lodash.uniq'

export default function validateReactIntlDictKeys(dictsArr) {
  // Obtem extensao dos dicionarios
  let arrLen = dictsArr.map(dict => Object.keys(dict).length)

  // Concatena os dicionarios...
  let uniqArr = []
  dictsArr.forEach(dict => {
    uniqArr = uniqArr.concat(Object.keys(dict))
  })

  // ... e gera um array unique dos valores e adiciona ao array de extensao
  const uniqArrLen = uniq(uniqArr).length
  arrLen.push(uniqArrLen)

  let isValid = true

  // Se algum valor do array for diferente ha alguma disparidade
  arrLen.reduce((acc, current) => {
    if (acc === 0) return current
    if (current !== acc) {
      isValid = false
    }
    return acc
  }, 0)

  return isValid
}
