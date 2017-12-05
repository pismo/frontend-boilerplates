export default function setInputCaretPosition(elem, pos) {
  if (!elem) return

  if (elem.createTextRange) {
    const range = elem.createTextRange()
    range.move('character', pos)
    range.select()
  } else {
    if (elem.selectionStart) {
      elem.focus()
      elem.setSelectionRange(pos, pos)
    } else {
      elem.focus()
    }
  }
}
