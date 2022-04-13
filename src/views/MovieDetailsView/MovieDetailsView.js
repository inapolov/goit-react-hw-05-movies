import { useParams, NavLink, Outlet,useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieDetails } from 'services/fethApi';
import styles from './MovieDetailsView.module.css';

export default function MovieView() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);
 
  return (
    <>
      <button onClick={goBack} className={styles.button}>&#8592;Go back</button>
      {/* <div className={styles.button}><NavLink to="/" className={styles.link}>&#8592;Go back</NavLink></div> */}
      
      {movie && (
        <div>
          <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title}></img>
          <h2>{movie.title}</h2>
          <p>Vote average: {movie.vote_average}</p>
          <p>Overview:</p>
          <p>{movie.overview}</p>
          <p>Genres:</p>
          {movie.genres && (
            <ul>
              {movie.genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          )}
          <hr />
          <p>Additional information</p>
          <ul>
            <li><NavLink to="cast">Cast</NavLink></li>
            <li><NavLink to="reviews">Reviews</NavLink></li>
          </ul>          
          <hr />
            <Outlet />
        </div>

      )}
      </>
      
  )  
};