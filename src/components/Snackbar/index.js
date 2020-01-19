// @flow
import React from 'react'
import './style.css'

type Props = {
  message: string,
  action: () => void,
  actionButtonLabel: string,
  style?: {},
}

const Snackbar = ({message, action, actionButtonLabel, style}): Props => {
  return (
    <div className="snackbar-container" style={style}>
      <p className="snackbar-text">{message}</p>
      {action && actionButtonLabel &&
      <button className="snackbar-button-action" onClick={action}>{actionButtonLabel}</button>}
    </div>
  )
}

Snackbar.defaultProps = {
  style: {},
}

export default Snackbar
