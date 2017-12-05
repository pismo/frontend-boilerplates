const mapTransactions = data => ({
  ...data,
  items: data.items.map(transaction => {
    const { authorization } = transaction

    return {
      ...transaction,
      _isInternal: authorization.type === authorization.softDescriptor,
    }
  }),
})

export default mapTransactions
