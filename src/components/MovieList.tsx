import type { JSX } from "react";
import PrintMovie from "./PrintMovie";
import type { Movie } from "../types/movie";
import useUser from "../hooks/useUser";
import useMovies from "../hooks/useMovies";

function MovieList(): JSX.Element {

    const { loading , movies: filteredMovies, showRecent, toggleShowRecent } = useMovies();
    const {username} = useUser();

    if(loading){
        return <p>Loading Movies ... </p>
    }

    return(
        <>
            <button onClick={toggleShowRecent}>
                { showRecent ? "Show all movies"
                             : "Show new movies" }
            </button>

            <p>
                Welcome {username}
            </p>

            {filteredMovies.length > 0
            ? (filteredMovies.map((movie: Movie) => (
                <PrintMovie key={movie.movieId} movie={movie} />
            )))
            :
            (<p>No movies was found.</p>)
            }

        </>
    )
}

export default MovieList