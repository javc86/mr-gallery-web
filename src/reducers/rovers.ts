import { createReducer } from '@reduxjs/toolkit'

import { fetchCameras, fetchRovers } from '@/actions/rovers'
import { Item } from '@/typing/Common'
import { ROVERS_CAMERAS, ROVERS_LIST } from '@/utils/constants'

const initialState = {
  list: ROVERS_LIST,
  cameras: ROVERS_CAMERAS,
} as {
  list: Item[],
  cameras: Item[]
}

export default createReducer(initialState, (builder) => {
  builder
    .addCase(fetchRovers, (state, action) => {
      state.list = action.payload
    })
    .addCase(fetchCameras, (state, action) => {
      state.cameras = action.payload
    })
})
