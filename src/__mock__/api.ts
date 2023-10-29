import {Book} from "@/app";

export const dummyBooks: Book[] = [
  {
    id: 1,
    author: 'Dummy Author 1',
    title: 'Dummy Book 1',
    overview: 'Dummy Book 1 Overview',
    image: 'https://dummyimage.com/200x300/000/fff',
    reviews: [],
  },
  {
    id: 2,
    author: 'Dummy Author 2',
    title: 'Dummy Book 2',
    overview: 'Dummy Book 2 Overview',
    image: 'https://dummyimage.com/200x300/000/eee',
    reviews: [],
  },
]

export async function getBooks(): Promise<Book[]> {
  return dummyBooks
}
