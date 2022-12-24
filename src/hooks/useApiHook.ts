import { useState, useEffect } from 'react'

export type TApiResponse = {
  data: any
  error: string
  loading: boolean
}

export const useApiHook = (url: string): TApiResponse => {
  const [data, setData] = useState<any>([])
  const [error, setError] = useState<any>()
  const [loading, setLoading] = useState<boolean>(false)

  const getAPIData = async () => {
    setLoading(true)
    try {
      const apiResponse = await fetch(url)
      const json = await apiResponse.json()
      console.log('json in the Hook', json.data)
      setData(json)
    } catch (error) {
      setError(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    getAPIData()
  }, [])

  return { data, error, loading }
}
