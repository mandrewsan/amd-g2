import React from 'react'
import '../scss/modal.scss'

const Modal = props => (
  <div className={`modal ${(props.isActive ? 'is-active' : '')}`}>
    <div className="modal-background"></div>
    <div className="modal-content">
      <p className="image is-4by3">
        <img src={props.img} alt=""/>
      </p>
    </div>
    <button 
      onClick={props.closeModal} 
      className="modal-close is-large" 
      aria-label="close"></button>
  </div>
)

export default Modal