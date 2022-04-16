import { useState, useEffect } from 'react';
import { Link,useSearchParams,useLocation } from 'react-router-dom';
import { fetchSearchMovie } from 'services/fethApi';
import Searchbar from 'components/Searchbar/Searchbar';

function MoviesView() {

  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState( searchParams.get('query') ?? '');
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const handleFormSubmit = searchQuery => {
    setSearchQuery(searchQuery);
    setSearchParams({ query: searchQuery });
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
              <Link to={`${movie.id}`} state={{ from: location }}>
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