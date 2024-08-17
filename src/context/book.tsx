import { createContext, isSSR } from '@dwarvesf/react-utils'
import { useState, useEffect, useMemo } from 'react'
import { Book } from 'types/schema'

import useSWR from 'swr'
import { client } from 'libs/api'

const SWR_KEY = 'GET_BOOKS'

// Define the Book Context interface
interface IBooksContext {
  books: Book[]
  addBookDetails: (book: Book) => void
  toggleFavorite: (bookId: number) => void
  toggleUnFavorite: (bookId: number) => void
  deleteBook: (bookId: number) => void
  useFetchBooks: (skip: number) => any
  hasMore: boolean
  bookCache: any
  // Add other context methods here (e.g., fetchBooks, updateBook)
}

// Create the context with initial value (null to avoid potential errors)
const BooksContext = createContext<IBooksContext>({})

// Destructure Provider and useBooksContext for cleaner usage
const [BooksProvider, useBooksContext] = BooksContext

const uniqBy = (arr: any, key: any) => {
  const seen = new Set()
  return arr.filter((item: any) => {
    const uniqueKey = key ? item[key] : item
    return seen.has(uniqueKey) ? false : seen.add(uniqueKey)
  })
}

const BooksContextProvider = ({ children }: { children: any }) => {
  const [books, setBooks] = useState<Book[]>([])
  const [favBooks, setFavBooks] = useState<number[]>([])
  const [hasMore, setHasMore] = useState<boolean>(false)
  const [bookCache, setBookCache] = useState<any>({})

  // Load initial data from local storage (if not SSR)
  useEffect(() => {
    if (!isSSR()) {
      const storedBooks = localStorage.getItem('books')
      const storedFavBooks = localStorage.getItem('favBooks')
      const storedCacheBooks = localStorage.getItem('books_cache')
      if (storedBooks) {
        setBooks(JSON.parse(storedBooks) as Book[])
      }
      if (storedFavBooks) {
        setFavBooks(JSON.parse(storedFavBooks) as number[])
      }
      if (storedCacheBooks) {
        setBookCache(JSON.parse(storedCacheBooks) as number[])
      }
    }
  }, [])

  // Save data to local storage on changes
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
    localStorage.setItem('favBooks', JSON.stringify(favBooks))
  }, [books, favBooks])

  useEffect(() => {
    localStorage.setItem('books_cache', JSON.stringify(bookCache))
  }, [bookCache])

  const addBookDetails = (book: Book) => {
    setBooks((prevBooks) => [...prevBooks, book])
  }

  const toggleFavorite = (bookId: number) => {
    const updatedBooks = books.map((item) => {
      if (item.id === bookId) {
        item.isFavorite = true
      }
      return item
    })
    setBooks(updatedBooks)
  }

  const toggleUnFavorite = (bookId: number) => {
    const updatedBooks = books.map((item) => {
      if (item.id === bookId) {
        item.isFavorite = false
      }

      return item
    })
    setBooks(updatedBooks)
  }

  const deleteBook = (bookId: number) => {
    const updatedBooks = books.filter(item => item.id !== bookId)
    setBooks(updatedBooks)
  }

  // Add other context methods here (e.g., fetchBooks, updateBook)

  const useFetchBooks = (skip: number) => {
    const cache = useMemo(() => ({} as any), [])

    const { data, ...rest } = useSWR(
      `${SWR_KEY}_${skip}`,
      () => client.getBooks(skip),
      { revalidateOnMount: false },
    ) as any

    if (cache[skip]) {
      return cache[skip]
    }

    if (data) {
      setBooks((oldB) => uniqBy([...oldB, ...data], 'id'))
      cache[skip] = { books: data, ...rest }
      setBookCache(cache)
    }

    if (data && data.length < 5) {
      setHasMore(false)
    } else {
      setHasMore(true)
    }

    return { books: data, ...rest }
  }

  // Provide context values to child components
  const contextValue = {
    books,
    addBookDetails,
    toggleFavorite,
    toggleUnFavorite,
    useFetchBooks,
    hasMore,
    bookCache,
    deleteBook,
    // Add other context values here
  }

  return <BooksProvider value={contextValue}>{children}</BooksProvider>
}

export { BooksContextProvider, useBooksContext }
