import React from 'react'
import { FiDelete } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import BookEdit from './BookEdit';


const BookShow = ({book, OnDelete, onEdit}) => {
  const [showEdit, setShowEdits]=useState(false);

    const handleDelteClick=()=>{
      OnDelete(book.id);         
    };

    const handleEditClick=()=>{
      setShowEdits(!showEdit);
    };

    const handleSubmits=(id,newTitle)=>{
      setShowEdits(false);
      onEdit(id,newTitle);
      
    };

    let content=<h3>{book.title}</h3>
    if(showEdit){
      content = <BookEdit book={book}  onsubmit={handleSubmits}/>
    }
  return (
      <Container style={{maxWidth:'100%',display:'flex',justifyContent:'center' ,alignItems:'center',flexDirection:'column',}}>
       <Card style={{ width: '20rem' , marginTop:'8px',backgroundColor:'#997566'}}>
        <div style={{display:'flex',flexDirection:'row-reverse',margin:'1px'}}>
          <FiDelete  onClick={handleDelteClick}/> 
          <FiEdit onClick={handleEditClick} />
        </div>
      <Card.Body>
        <Card.Title>{content}</Card.Title>
      </Card.Body>
    </Card>
    </Container>
  )
}

export default BookShow
