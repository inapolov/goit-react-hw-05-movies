import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Layout from "./Layout/Layout";



const createAsyncView = componentName => {
  return lazy(() => {
    return import(`views/${componentName}/${componentName}`)
  })
};

const HomeView = createAsyncView('HomeView');
const MoviesView = createAsyncView('MoviesView');
const MovieDetailsView = createAsyncView('MovieDetailsView');
const NotFoundView = createAsyncView('NotFoundView');
const Cast = createAsyncView('Cast');
const Reviews = createAsyncView('Reviews');

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