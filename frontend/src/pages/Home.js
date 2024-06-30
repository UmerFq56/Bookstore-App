import { useEffect, useState } from 'react';


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
                    <p key={book._id}>{book.title}s </p>
                ))}

                



            </div>
            
        </div>
    )
}

export default Home;