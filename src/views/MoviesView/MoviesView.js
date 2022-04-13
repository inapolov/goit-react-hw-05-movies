import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchSearchMovie } from 'services/fethApi';
import Searchbar from 'components/Searchbar/Searchbar';

function MoviesView() {

  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleFormSubmit = searchQuery => {
    setSearchQuery(searchQuery);
    setMovies([]);
  };

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    fetchSearchMovie(searchQuery).then(response=>setMovies(response.results));
  }, [searchQuery]);


    return (
        <>
            <Searchbar onSubmit={handleFormSubmit} />
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
        </>
    )
};

export default MoviesView;