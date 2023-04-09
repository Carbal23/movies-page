import {BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ListadoPeliculas from "./View/ListadoPeliculas";
import Blog from "./View/Blog";
import  Home  from "./View/Home";
import { Celebridades } from "./View/Celebridades";
import { PerfilUsuario } from "./View/PerfilUsuario";
import { UserFavoriteMovie } from "./View/UserFavoriteMovie";
import { Proximamente } from "./View/Proximamente";
import { SingleMovie } from "./View/SingleMovie";
import { NoFound404 } from "./View/NoFound404";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/movie-list" element={<ListadoPeliculas />}/>
        <Route path="/" element={<Home/>} />
        <Route path="/celebrities" element={<Celebridades/>}/>
        <Route path="/PerfilUsuario" element={<PerfilUsuario/>}/>
        <Route path="/UserFavoriteMovie" element={<UserFavoriteMovie/>}/>
        <Route path="Commingsoon" element={<Proximamente/>}/>
        <Route path="/SingleMovie" element={<SingleMovie/>}/>
        <Route path= "*" element={<NoFound404/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
