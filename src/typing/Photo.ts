export type Camera = {
  id: 20
  name: string
  rover_id: 5
  full_name: string
}

export type Rover = {
  id: 5
  name: string
  landing_date: string
  launch_date: string
  status: string
  max_sol: 3902
  max_date: string
  total_photos: 668250
  cameras: {
    name: string
    full_name: string
  }[]
}

export type Photo = {
  id: number
  sol: number
  camera: Camera
  img_src: string
  rover: Rover
}

export type PhotoOptions = {
  rover: string
  filters: string
}

export type Response = {
  photos: Photo[]
}
