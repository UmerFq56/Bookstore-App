import {BrowserRouter, Routes, Route, } from 'react-router-dom'
import { useEffect, useState } from 'react';


import Home from './pages/Home'
import Navbar from './components/navbar'
import BookForm from './components/BookForm';

function App() {

  const [Books, setBooks] = useState(null)
    
  useEffect(() => {
      const fetchBooks = async () => {
          const response = await fetch('/api')
          const json = await response.json()

          if (response.ok) {
              console.log('test')
              setBooks(json)
          }

      }
      fetchBooks() 
     // console.log(Books)   

  },[])

  return (

    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className='pages'>
          <Routes>
            <Route
              path='/'
              element={<Home  />}
            />

            <Route
              path='/form'
              element={<BookForm books={Books} setBooks={setBooks} />}
            />

            <Route
              path='/books'
              element={<Home />}
            />
          </Routes>
        </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

