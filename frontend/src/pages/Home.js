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

    



    return(


        <div className="Home">
            <div className='books'>
                
                {Books && Books.map((book) => (
                    <BookDetails key={book._id} book = {book} />
                ))}

            </div>

            <BookForm books = {Books} setBooks = {setBooks} />
            
        </div>
    )
}

export default Home;