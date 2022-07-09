import { toast } from 'react-toastify'

const ApiError = err => {
    console.log('hiiii')
  if (err.response?.data?.status) {
    toast?.error(err.response?.data?.status.message[0])
  } else toast?.error(err.message)
}

export { ApiError }