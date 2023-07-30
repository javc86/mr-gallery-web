import { AxiosError } from 'axios'

interface IResponseError {
  status: number,
  data: {
    message: string
  }
}

export default (error: AxiosError<IResponseError> | Error) => {
  if (error instanceof AxiosError) {
    throw error
  }
}
