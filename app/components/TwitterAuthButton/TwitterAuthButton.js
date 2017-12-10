import React from 'react'
import PropTypes from 'prop-types'
import { button } from './styles.css'

export default function TwitterAuthButton ({onAuth, isFetching}) {
  return (
    <button className={button} onClick={onAuth}>
      {
        isFetching === true
          ? 'Loading'
          : 'Login with Twitter'
      }
    </button>
  )
}

TwitterAuthButton.propTypes = {
  onAuth: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
}
