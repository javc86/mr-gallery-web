import { createReducer } from '@reduxjs/toolkit'

import { fetchPhotos } from '@/actions/photos'
import { Photo } from '@/typing/Photo'

const initialState = {
  list: [],
  isLoading: false,
  error: null,
} as {
  list: Photo[]
  isLoading: boolean
  error: unknown
}

export default createReducer(initialState, (builder) => {
  builder
    .addCase(fetchPhotos.pending, (state) => {
      state.isLoading = true
      state.error = null
    })
    .addCase(fetchPhotos.fulfilled, (state, action) => {
      state.isLoading = false
      state.list = action.payload?.photos
    })
    .addCase(fetchPhotos.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
})
