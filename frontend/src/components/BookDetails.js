const BookDetails = ({book, onDelete}) => {

    const handleDelete =  async () => {
        const response = await fetch('/api/' + book._id, {
            method: 'DELETE'
        }) 

        if (response.ok) {
            onDelete(book._id);
        }
    }

    return (
        <div className="books-details">
            <h4 className="title">{book.title}</h4>
            <p><strong>Author: </strong> {book.author}</p>
            <p><strong>Rating: </strong> {book.rating}</p>
            <p><strong>Pages: </strong> {book.pages}</p>
            <p><strong>Genre: </strong> {book.genres.map((genre,index) => (
                <span  key={index}>{genre} </span>
            ))}</p>
            <button type="button" className="DeleteButton" onClick={handleDelete}>Delete</button>

        </div>
    )
}

export default BookDetails