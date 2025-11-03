import { useCallback, useEffect, useState } from "react";
import type { Movie } from "../types/movie";
import type { UseMoviesResult } from "./Types";
import { api } from "../lib/axios";

function useMovies(): UseMoviesResult {
    const [showRecent, setShowRecent] = useState<boolean>(false);
    const [loading , setLoading] = useState<boolean>(true);
    const [movieData , setMovieData] = useState<Movie[]>([]);
    const [error , setError] = useState<string | null>(null);

    useEffect(() => {
        const controller =  new AbortController();

        async function fetchMovies(){
            try{
                setLoading(true);
                setError(null);

                const res =  await api.get("https://app-react-course-bk.azurewebsites.net/api/movie/catalog", {signal: controller.signal});

                const data = res.data as Array<Movie>;

                const normalize:Movie[] = data.map((movie: Movie) => ({
                    ...movie,
                    releaseDate: new Date(movie.releaseDate)
                }))

                setMovieData(normalize);
            }
            catch(err: any){
                if (err?.name === "CanceledError" || err?.code === "ERR_CANCELED") return;

                const message = err?.response?.data?.message ?? err?.message ?? "Unknown error";

                setError(message);
            }
            finally{
                setLoading(false);
            }
        }

        fetchMovies();
        return () => controller.abort();

    }, []);

    const filteredMovies = useCallback(() => {
        return showRecent
        ? movieData.filter((movie: Movie) => movie.releaseDate.getFullYear() >= 2025)
        : movieData;
    }, [showRecent, movieData]);

    return {
        loading,
        movies: filteredMovies(),
        showRecent,
        toggleShowRecent: () => setShowRecent(() => !showRecent),
        error,
    }
}

export default useMovies