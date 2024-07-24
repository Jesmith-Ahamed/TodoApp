import {useState} from 'react'
import BookCreate from './Components/BookCreate';
import BookList from './Components/BookList';

const App = () => {
  const [books,setBooks]=useState([]);
  
  const handleEdits=(id,newTitle)=>{
    const UpdatedBooked= books.map((book)=>{
      if(book.id === id){
        return {...book, title:newTitle}
      };
      
      return book;
    });
    setBooks(UpdatedBooked);
  };

  const handleCreate=(title)=>{
       const UpdatedBooks=[
        ...books,
        {id:Math.round(Math.random()*9999 ), title}
       ];
       setBooks(UpdatedBooks);
    };


      const handleDelete=(id)=>{
        const DeleteBooks=books.filter((book)=>{
            return book.id !== id;
        });
        setBooks(DeleteBooks); 
      }
  return (
    <div>     
  
    <BookCreate Oncreate={handleCreate}/>
    <BookList books={books} OnDelete={handleDelete} onEdit={handleEdits }/>
    </div> 
  )
}

export default App
