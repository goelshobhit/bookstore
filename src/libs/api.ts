import { Books } from 'types/schema'
import fetcher from './fetcher'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

class Client {
  headers: HeadersInit = {
    'Content-Type': 'application/json',
  }

  getBooks(limit: number) {
    return fetcher<Books[]>(`${BASE_URL}/cutamar/mock/books?_limit=${5}&_start=${limit - 5}`, {
      headers: this.headers,
    })
  }

  getBookDetails(id: string) {
    return fetcher<Books[]>(`${BASE_URL}/cutamar/mock/books/${id}`, {
      headers: this.headers
    })
  }
}

const client = new Client()

export { client }
