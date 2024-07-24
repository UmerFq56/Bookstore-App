import { useState } from "react";

const BookForm = ({books, setBooks}) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState('');
  const [pages, setPages] = useState('');
  const [genres, setGenre] = useState([]);
  const [currentGenre, setCurrentGenre] = useState('');
  const [error, setError] = useState(null);

  const handleGenre = (e) => {
    e.preventDefault();
    
    setGenre([...genres, currentGenre]);
    setCurrentGenre('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    const book = { title, author, rating, pages, genres};
    const response = await fetch('/api', {
      method: 'POST',
      body: JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    } else {
      setError(null);
      setTitle('');
      setAuthor('');
      setRating('');
      setPages('');
      setGenre([]);
      setBooks([...books, json]);


      console.log('Book Added');
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a new Book</h3>
      <label>Book Title: </label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label>Author: </label>
      <input
        type="text"
        onChange={(e) => setAuthor(e.target.value)}
        value={author}
      />

      <label>Rating: </label>
      <input
        type="text"
        onChange={(e) => setRating(e.target.value)}
        value={rating}
      />

      <label>Pages: </label>
      <input
        type="text"
        onChange={(e) => setPages(e.target.value)}
        value={pages}
      />

      <div className="genre-form">
        <label>Genres: </label>
        <input
          type="text"
          onChange={(e) => setCurrentGenre(e.target.value)}
          value={currentGenre}
        />
        <button type="button" className="genreB" onClick={handleGenre}> Add Genre </button>
      </div>

      <button className="button"> Add Book</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default BookForm;
