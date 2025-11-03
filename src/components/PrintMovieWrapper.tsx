import { useParams } from "react-router-dom"
import useMovies from "../hooks/useMovies"
import type { JSX } from "react";
import PrintMovie from "./PrintMovie";

function PrintMovieWrapper(): JSX.Element{
    const { id } = useParams<{id: string}>()
    const { movies, loading, error } = useMovies();

    if (loading) return <p>Loading movies</p>
    if (error) return <p>Error: {error}</p>

    const movie = movies.find((m) => m.movieId === Number(id))

    return movie ? <PrintMovie movie={movie} /> : <p>Movie not found</p>
}

export default PrintMovieWrapper