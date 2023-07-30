import axios, {
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios'

import handlerError from './handlerError'

const timeout = 35 * 1 * 1000
let timerSignal: NodeJS.Timeout

function newAbortSignal(timeoutMs: number) {
  const abortController = new AbortController()
  timerSignal = setTimeout(() => abortController.abort(), timeoutMs)

  return abortController.signal
}

const instanceFetch = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_API,
})

instanceFetch.interceptors.response.use((res) => res, handlerError)

export const getHeaders = async () => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }

  return headers
}

export async function apiFetch<T>(options: AxiosRequestConfig): Promise<AxiosResponse<T>> {
  const headers = await getHeaders()
  return new Promise((resolve) => {
    instanceFetch({
      ...options,
      headers,
      signal: newAbortSignal(timeout),
    }).then((response) => {
      if (timerSignal) {
        clearTimeout(timerSignal)
      }
      resolve(response)
    }).finally(() => {
      if (timerSignal) {
        clearTimeout(timerSignal)
      }
    })
  })
}
