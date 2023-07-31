import { createReducer } from '@reduxjs/toolkit'

import { getRovers } from '@/actions/rovers'
import { Item } from '@/typing/Common'
import { ROVERS_LIST } from '@/utils/constants'

const initialState = { list: ROVERS_LIST } as { list: Item[] }

export default createReducer(initialState, (builder) => {
  builder
    .addCase(getRovers, (state, action) => {
      state.list = action.payload
    })
})
