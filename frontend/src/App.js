import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Home from './pages/Home'
import Navbar from './components/navbar'
import BookForm from './components/BookForm';
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignUpForm';
import { useAuth } from './authContext';


function App() {

  const [Books, setBooks] = useState(null)
  const {loggedIn} = useAuth()

  const NavBar = () => {
    const shouldRenderNavbar = loggedIn
    return shouldRenderNavbar && <Navbar />;

  }

    
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
      

      <NavBar />
        <div className='pages'>

        
       
      <Routes>

        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<SignupForm />} />

            <Route
              path='/home'
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
    </div>
  );
}

export default App;

