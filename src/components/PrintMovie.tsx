import { JSX } from "react";
import type { MovieProps } from "./types";

function PrintMovie({movie}: MovieProps): JSX.Element{
    return(
        <>
        <h3>ID: {movie.id}</h3>
        <h3>Title: {movie.title}</h3>
        <h3>Description: {movie.description}</h3>
        <h3>pictureUrl: {movie.pictureURL}</h3>
        <h3>releaseDate: {movie.releaseDate.toString()}</h3>
        </>
    )
}

export default PrintMovie