import { createAction } from '@reduxjs/toolkit'

import { Error } from '@/typing/Common'

export const setError = createAction<Error | null>('status/error')
