import { formatCurrency } from './../index'

const formatValue = value => {
  return parseFloat(
    formatCurrency(value)
      .format()
      .replace(/\D/g, '')
  )
}

export default formatValue
