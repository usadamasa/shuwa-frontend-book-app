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

  test('should match username', () => {
    document.body.innerHTML = `<ul>${createBookReview(review)}</ul>`
    expect($('.review__list__item__name').text()).toBe(`${review.username}さんの感想・評価`)
  })

  test('should match comment', () => {
    document.body.innerHTML = `<ul>${createBookReview(review)}</ul>`
    expect($('.review__list__item__comment').text()).toBe(`${review.comment}`)
  })

  test('should match like count', () => {
    document.body.innerHTML = `<ul>${createBookReview(review)}</ul>`
    expect($('.review__list__item__like__button').text()).toBe(`❤️ ${review.like}件`)
  })
})
