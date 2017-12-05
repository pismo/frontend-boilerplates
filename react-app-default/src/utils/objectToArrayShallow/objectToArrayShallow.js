const objectToArrayShallow = (obj = {}) =>
  Object.keys(obj).map(key => ({
    key,
    value: obj[key],
  })) || []

export default objectToArrayShallow
