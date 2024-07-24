import React, { useState } from 'react'
import { Container  } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
const BookCreate = ({Oncreate}) => {
    const [title,setTitle]=useState('');

    const handleChange=(event)=>{
        setTitle(event.target.value);
    };
    const handleSubmit=(event)=>{
        event.preventDefault();
        Oncreate(title);
        setTitle('');
    };
  return (

    <div>
        <Container style={{maxWidth:'35rem',height:'8rem'}} className='bg-dark mt-2'>
      <Form  onSubmit={handleSubmit} style={{maxWidth:'30rem'}}>
      <Form.Group  className="mb-3">
        <Form.Label className='h2' style={{color:"whitesmoke"}}>Todo App</Form.Label>
        <div style={{display:'flex',gap:'10px',marginBottom:'5px'}} className='mb-3'>
        <Form.Control value={title} placeholder="Need to add a task!"  onChange={handleChange} className='p-2'/>
        <button className='btn btn-light p-2 mt-2 mb-2'>Create</button>
        </div>
      </Form.Group>
      </Form>
      </Container>
    </div>
  )
}

export default BookCreate
