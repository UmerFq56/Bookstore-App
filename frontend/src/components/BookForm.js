import { useState } from "react"

 const BookForm = () => {
    
    const [Title, setTitle] = useState('')
    const [Author, setAuthor] = useState('')
    const [Rating, setRating] = useState('')
    const [Pages, SetPages] = useState('')
    const [Genre, SetGenre] = useState([])
    const [currentGenre, SetCurrentGenre] = useState('')
    const [error, Seterror] = useState(null)

    const handleGenre = () => {
        if (currentGenre.trim() != '') {
            SetGenre([...Genre, currentGenre.trim()])
            SetCurrentGenre('')
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const Book = {Title, Author, Rating, Pages, Genre}
        const response = await fetch('/api', {
            method: 'POST',
            body: JSON.stringify(Book),
            headers: {
                'Content-Type' : 'appliation/json'
            } 
        })

        const jsn = await response.json()

        if (!response.ok) {
            Seterror(jsn.error)
        }

        if (response.ok) {
            Seterror(null)
            setTitle('')
            setAuthor('')
            setRating('')
            SetPages('')
            SetGenre([])
        }

        console.log('Book Added')
    }


    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new Book</h3>
            <label>Book Title: </label>
            <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={Title}
            />

            <label>Author: </label>
            <input
            type="text"
            onChange={(e) => setAuthor(e.target.value)}
            value={Author}
            />

            <label>Rating: </label>
            <input
            type="text"
            onChange={(e) => setRating(e.target.value)}
            value={Rating}
            />

            <label>Pages: </label>
            <input
            type="text"
            onChange={(e) => SetPages(e.target.value)}
            value={Pages}
            />

            <label>Genres: </label>
            <input
            type="text"
            onChange={(e) => SetCurrentGenre(e.target.value)}
            value={currentGenre}
            />
            <button className="genreB" onClick={handleGenre}> Add Genre </button>
            
        </form>
    )
 }

 export default BookForm;