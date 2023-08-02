import { createAction } from '@reduxjs/toolkit'

import { Item } from '@/typing/Common'

export const fetchRovers = createAction<Item[]>('rovers/list')

export const fetchCameras = createAction<Item[]>('rovers/cameras')
