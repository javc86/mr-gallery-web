import React from 'react'

import { fetchPhotos } from '@/actions/photos'
import { useAppDispatch } from '@/hooks'

const Home = () => {
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(fetchPhotos({
      rover: 'curiosity',
      filters: 'page=1',
    }))
  }, [])

  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}

export default Home
