import React, { useState } from 'react'
import { Button } from 'react-bootstrap'


const BookEdit = ({book,onsubmit}) => {
const [title, setTitle]=useState(book.title);

  const handleChange=(event)=>{
      setTitle(event.target.value)
  };

  const handleEditSubmit=(e)=>{
    e.preventDefault();
    onsubmit(book.id, title);
  }



  return (
    <div className='m-2'style={{gap:'30px'}}>
      <form onSubmit={handleEditSubmit}>
        <input style={{maxWidth:'20rem',margin:'2px'}} value={title} onChange={handleChange} /> 
        <button className='btn btn-light p-1 mt-2'>Update</button>
      </form>
    </div>
  )
}

export default BookEdit
