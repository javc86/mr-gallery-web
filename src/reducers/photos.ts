import { createReducer } from '@reduxjs/toolkit'

import { getPhotos } from '@/actions/photos'
import { Photo } from '@/typing/Photo'

const initialState = { list: [] } as { list: Photo[] }

export default createReducer(initialState, (builder) => {
  builder
    .addCase(getPhotos, (state, action) => {
      state.list = action.payload
    })
})
