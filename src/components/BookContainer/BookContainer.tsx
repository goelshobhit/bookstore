import { useCallback, useEffect, useState } from 'react'

import { Heading } from 'components/Heading'
import { Button } from 'components/Button'
import { BookCard } from 'components/BookCard'
import { BookCardSkeleton } from 'components/BookCardSkeleton'
import InfiniteScroll from 'react-infinite-scroll-component'

// import { useFetchBooks } from 'hooks/data/useFetchBooks'
import { useBooksContext } from 'context/book'
import { usePath } from 'hooks/usePath'

const BookContainer = () => {
  const [skip, setSkip] = useState<number>(0)
  const { books, useFetchBooks, hasMore } = useBooksContext()
  const { isLoading, mutate } = useFetchBooks(skip)

  const history = usePath()

  useEffect(() => {
    mutate()
  }, [mutate])

  const fetchData = useCallback(() => {
    mutate()
    setSkip(skip + 5)
  }, [mutate, skip])

  return (
    <div>
      <div className="flex w-full justify-between pb-16">
        <Heading as="h1" className="text-orange-400">
          Books Collection
        </Heading>
        <span>
          <Button
            appearance="primary"
            aria-disabled={isLoading}
            className="ml-4"
            disabled={isLoading}
            onClick={() => history.push('/forms')}
          >
            Add Books
          </Button>
        </span>
      </div>

      <InfiniteScroll
        dataLength={books.length} //This is important field to render the next data
        hasMore={hasMore}
        loader={!hasMore && <BookCardSkeleton />}
        next={fetchData}
        pullDownToRefreshThreshold={150}
        releaseToRefreshContent={
          <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
        }
      >
        <BookCard books={books} />
      </InfiniteScroll>
    </div>
  )
}

export default BookContainer
