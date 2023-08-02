import * as React from 'react'
import { Provider } from 'react-redux'

import store from '../store'

export const withStore = (wrappedComponent: React.ReactElement) => (
  <Provider store={store}>
    {wrappedComponent}
  </Provider>
)
