import React from 'react'

import {useEffect, useState} from "react";
import styled from "styled-components";

import type {Book} from "@/app";
import {getBooks} from "./api";
import BookList from "./BookList";

const Page = styled.div`
  margin: 0 auto;
  width: 700px;
`

export const Title = styled.h2`
  font-size: 1.8rem;
`

export default function Timeline() {
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
      getBooks().then(books => setBooks(books))
    }, []
  )

  return (
    <Page>
      <h2 className="page__title">タイムライン</h2>
      <BookList books={books}/>
    </Page>
  )
}
