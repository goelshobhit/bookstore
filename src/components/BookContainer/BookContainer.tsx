import { Books, Book } from 'types/schema';

interface ApiDataProps {
    books: Books;
    error: any
  }


const ApiData = ({error, books }: ApiDataProps) => {

  if (error) return <div>Error: {error.message}</div>;
  if (!books) return <div>Loading...</div>;

  return (
    <ul>
      {books.map((item: Book) => (
        <li key={item.id}>{item.author}</li>
      ))}
    </ul>
  );
};


export default ApiData;