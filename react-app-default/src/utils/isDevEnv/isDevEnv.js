export default () => {
  return (
    process.env &&
    process.env.NODE_ENV &&
    process.env.NODE_ENV === 'development'
  )
}
