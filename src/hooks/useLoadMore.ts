import React from 'react'

import { useAppSelector } from '@/hooks'

const useLoadMore = (stateName: 'photos' = 'photos') => {
  const [page, setPage] = React.useState(1)
  const observer = React.useRef<IntersectionObserver | null>(null)
  const isLoading = useAppSelector((state) => state[stateName].isLoading)

  const lastItemRef = React.useCallback((node: HTMLInputElement | null) => {
    if (!node || isLoading) return false
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage(page + 1)
        }
      },
    )
    observer.current.observe(node)
    return true
  }, [isLoading])

  return { page, lastItemRef, observer }
}

export default useLoadMore
