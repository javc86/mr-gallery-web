import { createAction } from '@reduxjs/toolkit'

import { AppDispatch } from '@/redux/store'
import { Photo, PhotoOptions } from '@/typing/Photo'
import { apiFetch } from '@/utils/instance'

export const getPhotos = createAction<Photo[] | []>('photos/list')

export const fetchPhotos = ({ rover, filters }: PhotoOptions) => async (dispatch: AppDispatch) => {
  const response = await apiFetch<Photo[]>({
    url: `/rovers/${rover}/photos?api_key=${process.env.REACT_APP_API_KEY}&${filters}`,
    method: 'GET',
  })
  dispatch(getPhotos(response.data.photos))
}
