import axios from "axios"

const _axios = axios.create({})
_axios.interceptors.response.use((res): any => {
  return res.data
}, (err) => {
  return err
})

export const useFetch = _axios