import { useEffect, useState } from 'react';

import BookDetails from '../components/BookDetails'
import BookForm  from '../components/BookForm';

const Home = () => {
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

    const handleDelete = (id) => {
        setBooks((prevBooks) => prevBooks.filter(book => book._id !== id))
    }

    



    return(


        <div className="Home">
            <div className='books'>
                
                {Books && Books.map((book) => (
                    <BookDetails key={book._id} book = {book} onDelete = {handleDelete} />
                ))}

            </div>

            <BookForm books = {Books} setBooks = {setBooks}  />
            
        </div>
    )
}

export default Home;