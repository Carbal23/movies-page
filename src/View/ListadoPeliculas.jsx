import { Pelicula } from "./Pelicula";
import { PageWrapper } from "./PageWrapper";
import { Paginacion } from "./paginacion";
import { useEffect, useState } from "react";
import { MovieListWrapper } from "./MovielistWrapper";

function ListadoPeliculas() {
  const [paginaActual, setPaginaActual] = useState(1);
  const totalPorPaginas = 4;
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    SolicitudDePeliculas();
  }, []);

  const SolicitudDePeliculas = async () => {
    let url = "https://lucasmoy.dev/data/react/peliculas.json";
    let peticion = await fetch(url);
    let resultado = await peticion.json();
    setPeliculas(resultado);
  };

  const getTotalPage = () => {
    let totalMovie = peliculas.length;
    return Math.ceil(totalMovie / totalPorPaginas);
  };

  let peliculasPorPaginas = peliculas.slice(
    (paginaActual - 1) * totalPorPaginas,
    paginaActual * totalPorPaginas
  );

  return (
    <PageWrapper>
      <MovieListWrapper>
        {peliculasPorPaginas.map((pelicula) => (
          <Pelicula
            titulo={pelicula.titulo}
            calificacion={pelicula.calificacion}
            director={pelicula.director}
            actores={pelicula.actores}
            duracion={pelicula.duracion}
            fecha={pelicula.fecha}
            img={pelicula.img}
          >
            {pelicula.descripcion}
          </Pelicula>
        ))}
        <Paginacion
          pagina={paginaActual}
          totalPage={getTotalPage()}
          onChange={(pagina) => setPaginaActual(pagina)}
        />
      </MovieListWrapper>
    </PageWrapper>
  );
}

export default ListadoPeliculas;
