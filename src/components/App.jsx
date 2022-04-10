import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomeView from "views/HomeView/HomeView";
import MoviesView from "views/MoviesView/MoviesView";
import MovieDetailsView from "views/MovieDetailsView/MovieDetailsView";
import NotFoundView from "views/NotFoundView/NotFoundView";


function App() {
  return (    
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView/>}/>        
          <Route path="movies" element={<MoviesView />} />
          <Route path="movies/:movieId" element={<MovieDetailsView/>} />
          <Route path="*" element={<NotFoundView/>} />
        </Route>
      </Routes>  
    
  );
};

export default App;