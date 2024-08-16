import { Books, Book } from 'types/schema'

import Grid from '@mui/material/Grid'
import Image from 'next/image'
import { Heading } from 'components/Heading'

type BookContainerProps = {
  books: Books
}

const BookContainer = ({ books = [] }: BookContainerProps) => {
  return (
    <Grid
      columns={{ xs: 4, sm: 12, md: 12 }}
      spacing={{ xs: 13, md: 5}}
      container
    >
      {books.map((item: Book, index: number) => (
        <Grid key={index} md={4} sm={6} xs={12} item>
          <div className="bg-white h-full shadow-md overflow-hidden border rounded-3xl hover:cursor-pointer border-orange-500 min-h-12">
            {item.cover && (
              <Image
                alt={item.title}
                className="object-cover rounded-t"
                height={400}
                src={item.cover || 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500&h=400&fit=crop&auto=format'}
                width={500}
              />
            )}
            <div className="p-4">
              {item.title && (
                <Heading className="text-lg font-bold mb-2 text-orange-400">
                  {item.title}
                </Heading>
              )}
              {item.description && (
                <p className="text-gray-600 antialiased hover:subpixel-antialiased">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
  )
}

export default BookContainer
