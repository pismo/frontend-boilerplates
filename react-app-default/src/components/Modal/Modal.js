import React, { Component } from 'react'
import MdClose from 'react-icons/lib/md/close'

class Modal extends Component {
  static requiredStores = ['uiStore']
  handleClose = () => {
    this.props.uiStore.closeModal()
  }

  handleKeyDown = event => {
    const { keyCode } = event

    if (keyCode !== 27) {
      return false
    }

    return this.handleClose()
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
  }

  render() {
    const { title, children, uiStore } = this.props
    if (!uiStore.modalIsOpen) {
      return false
    }
    const overlayClasses =
      'fixed w-100 h-100 top-0 left-0 dt bg-black-70 z-9999 animate-all'
    const modalClasses =
      'relative w-100 mw6dot5-ns center-ns bg-pismo-near-white pismo-darker-blue br1-ns animate-all'
    const commonBtnClasses =
      'button-reset bn fw6 db w-100 pa3 ttu pointer f7 mv2 br2'

    return (
      <div className={overlayClasses}>
        <div className="dtc v-mid">
          <div className={modalClasses}>
            <div className="tc fw5 lh-copy pt3 pb2">{title}</div>

            <div
              className="absolute top-0 right-1 mt1"
              style={{ marginTop: '12px' }}
            >
              <button
                type="button"
                className="button-reset bn bg-transparent pointer f4"
                onClick={this.handleClose}
              >
                <MdClose onClick={this.handleClose} />
              </button>
            </div>

            <div className="pa4 pt0 tc">
              <div className="fw1 f6 mb2">{children}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal
