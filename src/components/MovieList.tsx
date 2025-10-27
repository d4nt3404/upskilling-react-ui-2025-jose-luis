import { JSX, useEffect, useState } from "react";
import type { MovieListProps } from "./types";
import PrintMovie from "./PrintMovie";
import type { Movie } from "../types/movie";
import useUser from "../hooks/useUser";

function MovieList({movies}: MovieListProps): JSX.Element {

    const [showRecent, setShowRecent] = useState<boolean>(false);
    const [loading , setLoading] = useState<boolean>(true);
    const [movieData , setMovieData] = useState<Movie[]>([]);
    const {username} = useUser();
    
    useEffect(() => {
        setTimeout(() => {
         setMovieData(movies)
         setLoading(false);
        }, 2000)
    }, [movies]);

    if(loading){
        return <p>Loading Movies ... </p>
    }

    const filteredMovies = showRecent
    ? movieData.filter((movie) => movie.releaseDate.getFullYear() >= 2025)
    : movieData;

    return(
        <>
            <button onClick={()=> setShowRecent(!showRecent)}>
                { showRecent ? "Show all movies"
                             : "Show new movies" }
            </button>

            <p>
                Welcome {username}
            </p>

            {filteredMovies.length > 0
            ? (filteredMovies.map((movie: Movie) => (
                <PrintMovie key={movie.id} movie={movie} />
            )))
            :
            (<p>No movies was found.</p>)
            }

        </>
    )
}

export default MovieList