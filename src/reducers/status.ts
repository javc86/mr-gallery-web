import { createReducer } from '@reduxjs/toolkit'

import { setError } from '@/actions/status'
import { Error } from '@/typing/Common'

const initialState = { processing: false, error: null } as { processing: boolean, error: Error | null }

export default createReducer(initialState, (builder) => {
  builder
    .addCase(setError, (state, action) => {
      state.error = action.payload
    })
})
