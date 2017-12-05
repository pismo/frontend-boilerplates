const collectDifferences = (a, b) => {
  const r = {}

  for (const k in a) {
    if (a[k] === b[k]) {
      continue
    }

    r[k] = a[k]
  }

  return r
}

const getObjectsIntersectionsShallow = (a = {}, b = {}) => {
  const resultA = collectDifferences(a, b)
  const resultB = collectDifferences(b, a)

  return [resultA, resultB]
}

export default getObjectsIntersectionsShallow
