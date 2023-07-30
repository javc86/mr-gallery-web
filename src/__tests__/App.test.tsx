import { render, screen } from '@testing-library/react'
import React from 'react'

import App from '../App'

it('renders correctly', () => {
  render(<App />)
  expect(screen.findByText('Hola, mundo!')).toBeDefined()
})
