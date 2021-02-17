import { request } from 'axios'

export function getHomeInfo() {
  return new Promise((resolve, reject) => {
    request
      .get(`/api/index.json`)
      .then((res) => {
        resolve(res)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
