import $ from 'jquery'

import {Review} from "@/app";
import createBookReview from "./createBookReview";

describe('createBookReview()', () => {
  const review: Review = {
    id: 1,
    username: "test user",
    comment: "test comment",
    like: 3
  }

  test('should return DOM element', () => {
    document.body.innerHTML = `<ul>${createBookReview(review)}</ul>`
    expect($('.review__list__item').length).toBe(1)
  })
})
