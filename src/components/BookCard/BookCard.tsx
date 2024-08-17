import { Books, Book } from 'types/schema'
import Image from 'next/image'
import { Heading } from 'components/Heading'
import { Card } from 'components/Card'
import { Text } from 'components/Text'

import { timeFormat } from 'hooks/timeFormat'
import { useBooksContext } from 'context/book'
import { Button } from 'components/Button'

type BookCardProps = {
  books: Books
}

export const BookCard = ({ books = [] }: BookCardProps) => {
  const { toggleFavorite, toggleUnFavorite, deleteBook } = useBooksContext()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
      {books.map((item: Book) => (
        <div key={item.id} className="flex flex-row">
          <Image
            alt={item.title}
            className="border border-orange-600 rounded-lg"
            height={130}
            src={item.cover || '/thumbnail.jpeg'}
            width={130}
          />
          <Card
            className="p-4 w-full flex flex-row my-4 mr-4 px-0 py-0 rounded-none shadow-xl shadow-orange-50 border-2 border-orange-200 border-r-orange-500 rounded-r-lg"
            shadow
          >
            <div className="flex flex-col p-1 h-44 w-full">
              <Heading
                as="h2"
                className="text-ellipsis overflow-hidden text-base"
              >
                <p className="w-full flex justify-between">
                  {item.title}
                  <time className="text-sm">
                    {timeFormat(item.publicationDate)}
                  </time>{' '}
                </p>
                <p>
                  <span className="text-orange-400">{item.author}</span>
                </p>
              </Heading>

              <Text
                as="p"
                className="font-light antialiased hover:subpixel-antialiased"
              >
                {item.description}
              </Text>
              <div className="flex flex-wrap py-3">
                {!item.isFavorite ? (
                  <Button
                    appearance="primary"
                    className="w-fit mx-2"
                    fullWidth={false}
                    size="sm"
                    onClick={() => toggleFavorite(item.id)}
                  >
                    Favourite
                  </Button>
                ) : (
                  <Button
                    appearance="secondary"
                    className="w-fit mx-2 "
                    fullWidth={false}
                    size="sm"
                    onClick={() => toggleUnFavorite(item.id)}
                  >
                    Un Favourite
                  </Button>
                )}
                <Button
                  appearance="secondary"
                  className="w-fit mx-2"
                  fullWidth={false}
                  size="sm"
                  onClick={() => deleteBook(item.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  )
}
