/* eslint-disable max-len */
import moment from 'moment'
import React from 'react'

import { fetchPhotos } from '@/actions/photos'
import { CardRippleEffect, SimpleLoader, Tabs } from '@/components'
import { useAppDispatch, useAppSelector, useLoadMore } from '@/hooks'
import { Item } from '@/typing/Common'
import { Photo } from '@/typing/Photo'

const Home = () => {
  const dispatch = useAppDispatch()
  const rovers = useAppSelector((state) => state.rovers.list)
  const photos = useAppSelector((state) => state.photos.list)
  const isLoading = useAppSelector((state) => state.photos.isLoading)
  const [selectedRover, setSelectedRover] = React.useState(rovers[0].value)
  const [newPhotos, setNewPhotos] = React.useState<Photo[]>([])
  const [newRover, setNewRover] = React.useState('')
  const { page, lastItemRef, observer } = useLoadMore()
  const [selectedEarthDate, setSelectedEarthDate] = React.useState(moment().add('-1', 'days').format('YYYY-MM-DD'))

  React.useEffect(() => {
    if (!isLoading && photos.length > 0) {
      setNewPhotos([...newPhotos, ...photos])
    } else if (page > 1 && photos.length === 0) {
      observer.current?.disconnect()
    }
  }, [isLoading, photos])

  React.useEffect(() => {
    if (!isLoading && !!newRover) {
      dispatch(fetchPhotos({
        rover: selectedRover,
        filters: `page=${page}&earth_date=${selectedEarthDate}`,
      }))
    }
  }, [newRover, page])

  React.useEffect(() => {
    setNewRover(selectedRover)
    if (newPhotos.length > 0) {
      setNewPhotos([])
    }
  }, [selectedRover])

  const onSelect = (rover: Item) => {
    setSelectedRover(rover.value)
  }

  return (
    <div>
      <header className="shadow">
        <div className="h-4 bg-primary shadow" />
        <div className="flex flex-row justify-between mx-10 lg:mx-20 xl:mx-40">
          <div className="flex">
            <h1 className="text-3xl line-clamp-4 text-slate-600 self-start">
              Mars Rovers
            </h1>
          </div>
          <div className="mt-2">
            <Tabs items={rovers} onSelect={onSelect} />
          </div>
        </div>
      </header>
      {newPhotos.length === 0 && !isLoading && (
        <div className="text-center mt-5">
          <h6 className="text-base font-medium leading-tight">No Results</h6>
        </div>
      )}
      {newPhotos.length > 0 && (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 mt-5 mx-10 lg:mx-20 xl:mx-40 mb-20">
          {newPhotos.map((photo, index) => (
            <div ref={index === newPhotos.length - 1 ? lastItemRef : undefined} key={photo.id}>
              <CardRippleEffect
                key={photo.id}
                title={photo.camera.full_name}
                img={photo.img_src}
              />
            </div>
          ))}
        </div>
      )}
      {isLoading && (
        <div className="text-center mt-5">
          <SimpleLoader />
        </div>
      )}
    </div>
  )
}

export default Home
