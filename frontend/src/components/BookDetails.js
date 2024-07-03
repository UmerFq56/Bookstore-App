const BookDetails = ({book}) => {
    return (
        <div className="books-details">
            <h4 className="title">{book.title}</h4>
            <p><strong>Author: </strong> {book.author}</p>
            <p><strong>Rating: </strong> {book.rating}</p>
            <p><strong>Pages: </strong> {book.pages}</p>
            <p><strong>Genre: </strong> {book.genres.map((genre,index) => (
                <span  key={index}>{genre} </span>
            ))}</p>


        </div>
    )
}

export default BookDetails