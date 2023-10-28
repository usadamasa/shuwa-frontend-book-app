jest.mock('./createBookReview')

import {Book} from "@/app";
import createBookReview from "./createBookReview";

describe('createBookLitItem', () => {
  const book: Book = {
    id: 1,
    title: 'フロントエンド開発',
    author: '執筆太郎',
    overview: 'フロントエンド開発をこれから始める方に最適な1冊です',
    image: 'https://example.com/image.png',
    reviews: [
      {
        id: 1,
        username: '匿名ユーザー1',
        comment: 'スムーズに開発することができました！',
        like: 12
      },
      {
        id: 2,
        username: '匿名ユーザー2',
        comment: '楽しく読ませてもらいました。',
        like: 0
      }
    ]
  }

  test('should return DOM element', () => {
    document.body.innerHTML = `<ul>BookList(book)}</ul>`
    expect($('.book-list__item').length).toBe(1)
  })

  test('should render review', () => {
    document.body.innerHTML = `<ul>BookList(book)}</ul>`
    expect(createBookReview).toHaveBeenCalledTimes(book.reviews.length)
  })
})
