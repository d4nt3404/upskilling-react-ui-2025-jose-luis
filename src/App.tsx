import React from "react";
import './App.css'
import Content  from './components/Content.tsx'
import Footer  from './components/Footer.tsx'
import Header  from './components/Header.tsx'
import PrintMovie from "./components/PrintMovie.tsx";
import { mockMovie, movieList } from "./mocks/movie.mocks.ts";
import MovieList from "./components/MovieList.tsx";
import UserForm from "./components/userForm/userForm.tsx";

function App() {
 return (
  <>
    <Header></Header>
    <Content></Content>
    <Footer></Footer>

    {/* <h1><PrintMovie movie={mockMovie}/></h1> */}
    { /* movieList
      .filter((movie) => movie.releaseDate.getFullYear() >= 2024)
      .map((movie) =>
        <PrintMovie key={movie.id} movie={movie} />
    ) */}
    {/* <MovieList movies={movieList}/> */}
    <div>
      <h2>User Form</h2>
      <UserForm/>
    </div>
  </>
 )
}
 
export default App
