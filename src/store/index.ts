import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'

import errorsMiddleware from '@/middlewares/errors'
import reducer from '@/reducers'

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    thunkMiddleware,
    errorsMiddleware,
  ),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
