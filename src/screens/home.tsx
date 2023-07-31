import moment from 'moment'
import React from 'react'

import { fetchPhotos } from '@/actions/photos'
import { CardRippleEffect, Tabs } from '@/components'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { Item } from '@/typing/Common'

const Home = () => {
  const dispatch = useAppDispatch()
  const rovers = useAppSelector((state) => state.rovers.list)
  const photos = useAppSelector((state) => state.photos.list)
  const [selectedRover, setSelectedRover] = React.useState(rovers[0].value)
  const [page, setPage] = React.useState(1)
  const [selectedEarthDate, setSelectedEarthDate] = React.useState(moment().add('-1', 'days').format('YYYY-MM-DD'))

  React.useEffect(() => {
    dispatch(fetchPhotos({
      rover: selectedRover,
      filters: `page=${page}&earth_date=${selectedEarthDate}`,
    }))
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
            <h1 className="text-3xl line-clamp-4 text-slate-600 self-center">
              Mars Rovers
            </h1>
          </div>
          <div className="mt-2">
            <Tabs items={rovers} onSelect={onSelect} />
          </div>
        </div>
      </header>
      <div className="grid grid-cols-3 gap-3 mt-5 mx-10 lg:mx-20 xl:mx-40">
        {photos.map((photo) => (
          <CardRippleEffect
            key={photo.id}
            title={photo.camera.full_name}
            img={photo.img_src}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
