import React from 'react'

const useLoadMore = (page: number) => {
  const [newPage, setNewPage] = React.useState(page)
  const observerTarget = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setNewPage(newPage + 1)
        }
      },
      { threshold: 1 },
    )

    if (observerTarget.current) {
      observer.observe(observerTarget.current)
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current)
      }
    }
  }, [observerTarget])

  return { newPage, observerTarget }
}

export default useLoadMore
