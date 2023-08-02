/* eslint-disable max-len */
import moment from 'moment'
import React from 'react'

import { fetchPhotos } from '@/actions/photos'
import {
  CardRippleEffect,
  DatePicker,
  DateValueType,
  Input,
  PrimaryButton,
  SecondaryButton,
  Select,
  SelectValue,
  SimpleLoader,
  Tabs,
} from '@/components'
import { useAppDispatch, useAppSelector, useLoadMore } from '@/hooks'
import { Item } from '@/typing/Common'
import { Photo } from '@/typing/Photo'

type Filters = {
  camera?: SelectValue
  sol?: string
  page?: number
  earthDate?: string | Date | null
}

const Home = () => {
  const dispatch = useAppDispatch()
  const rovers = useAppSelector((state) => state.rovers.list)
  const cameras = useAppSelector((state) => state.rovers.cameras)
  const photos = useAppSelector((state) => state.photos.list)
  const isLoading = useAppSelector((state) => state.photos.isLoading)
  const [selectedRover, setSelectedRover] = React.useState(rovers[0].value)
  const [newPhotos, setNewPhotos] = React.useState<Photo[]>([])
  const [newRover, setNewRover] = React.useState('')
  const [filterCamera, setFilterCamera] = React.useState<SelectValue>(null)
  const [filterSol, setFilterSol] = React.useState('')
  const [filterEarthDate, setFilterEarthDate] = React.useState<DateValueType>({
    startDate: moment().format('YYYY-MM-DD'),
    endDate: null,
  })
  const {
    page, lastItemRef, observer, setPage,
  } = useLoadMore()

  const fetch = (filters?: Filters) => {
    let newFilters = `page=${filters?.page || page}`
    if (filters?.camera && !Array.isArray(filters.camera)) {
      newFilters += `&camera=${filters.camera.value}`
    }
    if (filters?.sol) {
      newFilters += `&sol=${filters.sol}`
    }
    if (filters?.earthDate) {
      newFilters += `&earth_date=${filters.earthDate}`
    } else {
      newFilters += `&earth_date=${moment().format('YYYY-MM-DD')}`
    }
    dispatch(fetchPhotos({
      rover: selectedRover,
      filters: newFilters,
    }))
  }

  React.useEffect(() => {
    if (!isLoading && photos.length > 0) {
      setNewPhotos([...newPhotos, ...photos])
    } else if (page > 1 && photos.length === 0) {
      observer.current?.disconnect()
    }
  }, [isLoading, photos])

  React.useEffect(() => {
    if (!isLoading && !!newRover) {
      fetch({
        camera: filterCamera,
        sol: filterSol,
      })
    }
  }, [newRover, page])

  React.useEffect(() => {
    setNewRover(selectedRover)
    if (newPhotos.length > 0) {
      setNewPhotos([])
      setPage(1)
    }
  }, [selectedRover])

  const onSelect = (rover: Item) => {
    setSelectedRover(rover.value)
  }

  const search = () => {
    if (filterCamera || filterSol || filterEarthDate) {
      fetch({
        camera: filterCamera,
        sol: filterSol,
        earthDate: filterEarthDate?.startDate,
      })
      setNewPhotos([])
      setPage(1)
    }
  }

  const cleanFilters = () => {
    if (filterCamera || filterSol || filterEarthDate?.startDate) {
      fetch({ page: 1 })
      setFilterCamera(null)
      setFilterEarthDate({
        startDate: moment().format('YYYY-MM-DD'),
        endDate: null,
      })
      setFilterSol('')
      setNewPhotos([])
      setPage(1)
    }
  }

  const onChangeFilterSol = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    if (!value || (/\d+/.test(value) && value.length < 5)) {
      setFilterSol(value)
    }
  }

  const onChangeDate = (value: DateValueType | null) => {
    if (value) {
      setFilterEarthDate(value)
    } else {
      setFilterEarthDate({
        startDate: moment().format('YYYY-MM-DD'),
        endDate: null,
      })
    }
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
      <div className="grid grid-cols-7 gap-4 px-5 pt-6 p-6">
        <div className="col-span-7 lg:col-span-2">
          <Select value={filterCamera} items={cameras} onChange={setFilterCamera} />
        </div>
        <div className="col-span-7 lg:col-span-1">
          <Input value={filterSol} onChange={onChangeFilterSol} label="Sol date" />
        </div>
        <div className="relative col-span-7 lg:col-span-2">
          <DatePicker value={filterEarthDate} onChange={onChangeDate} maxDate={new Date(moment().format('YYYY-MM-DD'))} />
        </div>
        <div className="flex col-span-7 lg:col-span-2">
          <div className="mr-2">
            <PrimaryButton
              label="Search"
              onClick={search}
            />
          </div>
          <SecondaryButton label="Clear" onClick={cleanFilters} />
        </div>
      </div>
      <hr className="mb-10 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
      {newPhotos.length === 0 && !isLoading && (
        <div className="text-center mt-5">
          <h6 className="text-base font-medium leading-tight">No Results</h6>
        </div>
      )}
      {newPhotos.length > 0 && (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 mt-5 mx-10 lg:mx-20 xl:mx-40 mb-20">
          {newPhotos.map((photo, index) => (
            <div ref={index === newPhotos.length - 1 && newPhotos.length >= 25 ? lastItemRef : undefined} key={photo.id}>
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
