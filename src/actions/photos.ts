import { createAction } from '@reduxjs/toolkit'

import { Photo } from '@/typing/Photo'

export const getPhotos = createAction<Photo[] | []>('photos/list')
