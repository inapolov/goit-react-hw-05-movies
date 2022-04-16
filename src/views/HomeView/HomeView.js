import { useEffect, useState } from "react";
import { Link,useLocation } from 'react-router-dom';
import { fetchTrending } from 'services/fethApi';


function HomeView() {

    const [movies, setMovies] = useState(null);
    const location = useLocation();

    useEffect(() => {
        fetchTrending().then(response=>setMovies(response.results));
    }, []);

 

    return (
        <>
            <h2>Trending today</h2>
            {movies && movies.map(movie =>
                <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title}</Link>
                </li>)}
        </>
    )
};

export default HomeView;