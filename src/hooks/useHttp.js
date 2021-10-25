import { useCallback, useState } from 'react'

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const formatData = (data, cb) => {
    if (data) {
      const loadedData = Object.entries(data).map(([id, obj]) => ({ id, ...obj }))

      cb(loadedData)
    }
  }

  const sendRequest = useCallback(async (requestConfig, callback) => {
    setIsLoading(true)
    setError(null)

    try {
      const { url = null, method = 'GET', headers = {}, body } = requestConfig

      if (!url) {
        throw new Error('Unable to send a request, an url is needed!')
      }
      const response = await fetch(url, { method, headers, body: JSON.stringify(body) || null })

      if (!response.ok) {
        throw new Error('Something went wrong!')
      }
      const data = await response.json()

      formatData(data, callback)
    } catch (err) {
      setError(err.message)
    }

    setIsLoading(false)
  })

  return { error, isLoading, sendRequest }
}

export default useHttp
