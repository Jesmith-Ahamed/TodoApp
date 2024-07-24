import React from 'react'
import BookShow from './BookShow';

const BookList = ({books,OnDelete,onEdit}) => {
  const renderedBooks=books.map((book)=>{
    return <BookShow key={book.id} book={book} OnDelete={OnDelete} onEdit={onEdit} />
  });
  return (
    <div>

        {renderedBooks}

    </div>
  )
}

export default BookList
