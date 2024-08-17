import { useMemo } from 'react'
import useSWR from 'swr'
import { client } from 'libs/api'

const SWR_KEY = 'GET_BOOKS'

export function useFetchBooks(skip: number) {
  const cache = useMemo(() => ({} as any), [])

  const { data, ...rest } = useSWR(`${SWR_KEY}_${skip}`, () =>
    client.getBooks(skip),
  )

  if (cache[skip]) {
    return cache[skip]
  }

  if (data) {
    cache[skip] = { books: data, ...rest }
  }

  return { books: data, ...rest }
}
