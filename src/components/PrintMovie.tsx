import { JSX } from "react";
import type { MovieProps } from "./types";

function PrintMovie({movie}: MovieProps): JSX.Element{
    return(
        <>
        <h3>ID: {movie.id}</h3>
        <h3>Title: {movie.title}</h3>
        <h3>Description: {movie.description}</h3>
        <div>
            <img src={movie.pictureUrl} 
            style={{width: "200px", height:"auto", borderRadius:"8px"}}/>
        </div>
        <h3>releaseDate: {movie.releaseDate.toString()}</h3>
        </>
    )
}

export default PrintMovie