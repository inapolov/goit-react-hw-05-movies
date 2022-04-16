import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieCredits } from "services/fethApi";

export default function Cast() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState([]);
    
    useEffect(() => {
    fetchMovieCredits(movieId).then(response=>setMovie(response.cast));
    }, [movieId]);

        
    return (
        <>            
            {movie && (
            <ul>
              {movie.map(({ id, name,profile_path,character }) => (
                  <li key={id}>
                      {profile_path && (<img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt={name}></img>)}
                      <p>{name}</p>
                      <p>{character}</p>

                  </li>
              ))}
            </ul>
          )}
            
        </>
    )
};