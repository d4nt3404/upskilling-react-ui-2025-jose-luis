import { JSX } from "react";
import { movieProps } from "./Types";

function PrintMovie({title}: movieProps): JSX.Element{
    return(
        <>
        <h3>ID: 512</h3>
        <h3>Title: {title}</h3>
        <h3>Description: Esta es una pelicula clasica</h3>
        <h3>pictureUrl: ruta a la imagen</h3>
        <h3>releaseDate: 1987-10-05</h3>
        </>
    )
}

export default PrintMovie