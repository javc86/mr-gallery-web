import { createAction } from '@reduxjs/toolkit'

import { RoverItem } from '@/typing/Rover'

export const getRovers = createAction<RoverItem[]>('rovers/list')
