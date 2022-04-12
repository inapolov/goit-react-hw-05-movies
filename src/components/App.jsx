import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomeView from "views/HomeView/HomeView";
import MoviesView from "views/MoviesView/MoviesView";
import MovieDetailsView from "views/MovieDetailsView/MovieDetailsView";
import NotFoundView from "views/NotFoundView/NotFoundView";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";


function App() {
  return (    
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView/>}/>        
          <Route path="movies" element={<MoviesView />} />
          <Route path="movies/:movieId" element={<MovieDetailsView />} >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews/>} />
          </Route>
          <Route path="*" element={<NotFoundView/>} />
        </Route>
      </Routes>  
    
  );
};

export default App;