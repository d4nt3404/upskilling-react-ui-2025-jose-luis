import React from "react";
import './App.css'
import Content  from './assets/components/Content.tsx'
import Footer  from './assets/components/Footer.tsx'
import Header  from './assets/components/Header.tsx'
import PrintMovie from "./assets/components/PrintMovie.tsx";
import { mockMovie, movieList } from "./assets/mocks/movie.mocks.ts";

function App() {
 return (
  <>
    <Header></Header>
    <Content></Content>
    <Footer></Footer>

    <h1><PrintMovie movie={mockMovie}/></h1>
    { movieList
      .filter((movie) => movie.releaseDate.getFullYear() >= 2024)
      .map((movie) =>
        <PrintMovie key={movie.id} movie={movie} />
    )}

  </>
 )
}
 
export default App
