import { createAction } from '@reduxjs/toolkit'

import { Item } from '@/typing/Common'

export const getRovers = createAction<Item[]>('rovers/list')
