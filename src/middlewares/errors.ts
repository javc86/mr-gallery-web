import { Middleware } from '@reduxjs/toolkit'

import { setError } from '@/actions/status'

const errorsMiddleware: Middleware = ({ dispatch }) => (next) => (action) => {
  if (action.error && action.error.message === 'Rejected') {
    dispatch(setError({
      title: 'Error',
      message: action.payload,
    }))
  }
  return next(action)
}

export default errorsMiddleware
