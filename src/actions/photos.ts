import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

// import photosMock from '@/__mocks__/photos'
import { PhotoOptions, Response } from '@/typing/Photo'
import { apiFetch } from '@/utils/instance'

export const fetchPhotos = createAsyncThunk(
  'photos/fetchPhotos',
  async ({ rover, filters }: PhotoOptions, { rejectWithValue }) => {
    try {
      const response = await apiFetch<Response>({
        url: `/rovers/${rover}/photos?api_key=${process.env.REACT_APP_API_KEY}&${filters}`,
        method: 'GET',
      })
      return response.data
    } catch (error) {
      return rejectWithValue(error instanceof AxiosError ? error.response?.data.error.message : error)
    }
  },
)
