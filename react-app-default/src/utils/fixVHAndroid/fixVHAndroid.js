const fixVHAndroid = () => {
  const userAgent = navigator.userAgent.toLowerCase()
  const isAndroid = /android/.test(userAgent)
  return isAndroid
}

export default fixVHAndroid
