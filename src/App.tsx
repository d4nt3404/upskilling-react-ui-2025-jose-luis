import React from "react";
import './App.css'
import Content  from './assets/components/Content.tsx'
import Footer  from './assets/components/Footer.tsx'
import Header  from './assets/components/Header.tsx'
import PrintMovie from "./assets/components/PrintMovie.tsx";

function App() {
 return (
  <>
    <Header></Header>
    <Content></Content>
    <Footer></Footer>

    <h1><PrintMovie title={"Citizen Kane"}/></h1>
    <h1><PrintMovie title={"The Rite"}/></h1>
    <h1><PrintMovie title={"Matrix"}/></h1>
  </>
 )
}
 
export default App
