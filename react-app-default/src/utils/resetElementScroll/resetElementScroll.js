export default function resetElementScroll(selector) {
  const el = document.querySelector(selector)
  if (el) el.scrollTop = 0
}
