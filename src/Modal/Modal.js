import React from "react";
import ReactDOM from "react-dom";
import { modal, close } from "./style.css";
import { connect } from "react-redux";
const modalRoot = document.getElementById("modal");

class Modal extends React.Component {
  closeModal() {
    const { dispatch } = this.props;
    dispatch({ type: "CLOSE_MODAL" });
  }

  render() {
    const {
      isModalOpen = false,
      children,
      dispatch,
      preventClose = false
    } = this.props;

    const child = React.Children.only(children);

    return isModalOpen
      ? ReactDOM.createPortal(
          <div className={modal}>
            {preventClose ? null : (
              <span className={close} onClick={this.closeModal.bind(this)}>
                close
              </span>
            )}
            {React.cloneElement(child, {
              closeModal: this.closeModal.bind(this)
            })}
          </div>,
          modalRoot
        )
      : null;
  }
}

export default connect(({ isModalOpen }) => ({ isModalOpen }))(Modal);
