import '@testing-library/jest-dom'

import { fireEvent, render, waitFor } from '@testing-library/react'
import nock from 'nock'
import React from 'react'

import { withStore } from '../__mocks__/components'
import photosMock from '../__mocks__/photos'
import App from '../App'
import store from '../store'

describe('Home tests suite', () => {
  beforeEach(() => {
    nock('https://api.nasa.gov/mars-photos/api/v1')
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
      })
      .get(/\/rovers\/curiosity\/photos\?[a-zA-Z_=&\d-]+/)
      .reply(200, photosMock)
    nock('https://api.nasa.gov/mars-photos/api/v1')
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
      })
      .get(/\/rovers\/opportunity\/photos\?[a-zA-Z_=&\d-]+/)
      .reply(200, { photos: [photosMock.photos[0]] })
    nock('https://api.nasa.gov/mars-photos/api/v1')
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
      })
      .get(/\/rovers\/spirit\/photos\?[a-zA-Z_=&\d-]+/)
      .reply(200, { photos: [] })
  })
  // afterEach(cleanup)
  it('Check navigation menu', async () => {
    const { getByText } = render(withStore(<App />))
    expect(getByText('Curiosity')).toBeInTheDocument()
    expect(getByText('Opportunity')).toBeInTheDocument()
    expect(getByText('Spirit')).toBeInTheDocument()
  })
  it('Check each menu item', async () => {
    const { getByText, getAllByTestId } = render(withStore(<App />))

    // Check Curiosity photos
    await waitFor(() => {
      const cards = getAllByTestId('card')
      expect(cards.length).toBe(3)
    })

    // Check Opportunity photos
    fireEvent.click(getByText('Opportunity'))
    expect(getByText('Loading...')).toBeInTheDocument()
    await waitFor(async () => {
      const cards = getAllByTestId('card')
      expect(cards.length).toBe(1)
    })

    // Check Spirit photos
    fireEvent.click(getByText('Spirit'))
    expect(getByText('Loading...')).toBeInTheDocument()
    await waitFor(async () => {
      expect(getByText('No Results')).toBeInTheDocument()
    })
  })
  it('Filter by camera', async () => {
    const { getByText, getAllByTestId, getAllByRole } = render(withStore(<App />))

    fireEvent.click(getByText('Opportunity'))
    expect(getByText('Loading...')).toBeInTheDocument()
    await waitFor(() => {
      const cards = getAllByTestId('card')
      expect(cards.length).toBe(3)
    })

    nock.cleanAll()
    nock('https://api.nasa.gov/mars-photos/api/v1')
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
      })
      .get(/\/rovers\/opportunity\/photos\?api_key=([a-z]|[A-Z]|\d)+&page=1&camera=FHAZ&earth_date=(\d|-)+/)
      .reply(200, { photos: [photosMock.photos[2]] })

    fireEvent.click(getByText('Select...'))
    const options = getAllByRole('option')
    fireEvent.click(options[0])
    fireEvent.click(getByText('Search'))
    expect(getByText('Loading...')).toBeInTheDocument()
    await waitFor(async () => {
      const cards = getAllByTestId('card')
      expect(cards.length).toBe(1)
    })

    const photos = store.getState().photos.list
    expect(photos[0].camera.name).toBe(photosMock.photos[2].camera.name)
  })
})
