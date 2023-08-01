import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import type { AppDispatch, RootState } from '@/store'

import useLoadMore from './useLoadMore'

const useAppDispatch: () => AppDispatch = useDispatch

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export {
  useAppDispatch,
  useAppSelector,
  useLoadMore,
}
