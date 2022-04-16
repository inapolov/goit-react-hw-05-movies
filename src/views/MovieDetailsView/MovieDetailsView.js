import { useParams, NavLink, Outlet,useNavigate,useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieDetails } from 'services/fethApi';
import styles from './MovieDetailsView.module.css';

export default function MovieView() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => navigate(
      location.state
        ? `${location.state.from.pathname}${location.state.from.search}`
        : '/movies'
    );;

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
            <li><NavLink to="cast" state={location.state ? { from: location.state.from } : null}>Cast</NavLink></li>
            <li><NavLink to="reviews" state={location.state ? { from: location.state.from } : null}>Reviews</NavLink></li>
          </ul>          
          <hr />
            <Outlet />
        </div>

      )}
      </>
      
  )  
};