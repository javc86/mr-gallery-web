import './styles.css'
import 'tw-elements-react/dist/css/tw-elements-react.min.css'

import React from 'react'
import { Provider } from 'react-redux'

import Error from '@/providers/Error'
import Home from '@/screens/home'
import store from '@/store'

const App = () => (
  <Provider store={store}>
    <Error>
      <Home />
    </Error>
  </Provider>
)

export default App
