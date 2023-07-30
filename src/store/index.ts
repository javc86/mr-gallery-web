import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'

import reducer from '@/reducers'

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    thunkMiddleware,
  ),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
