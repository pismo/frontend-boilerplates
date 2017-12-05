export default function logError(err) {
  if (console && console.error) {
    console.error(err)
  }
  if (
    window.Rollbar &&
    window.Rollbar.error &&
    process &&
    process.env &&
    process.env.REACT_APP_ROLLBAR_ENV &&
    process.env.REACT_APP_ROLLBAR_ENV !== 'local-dev' &&
    process.env.REACT_APP_ROLLBAR_ENV !== '%react_app_rollbar_env%'
  ) {
    window.Rollbar.error(err)
  }
}
