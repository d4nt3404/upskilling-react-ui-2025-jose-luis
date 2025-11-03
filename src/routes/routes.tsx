import type { RouteObject } from "react-router-dom";
import MovieList from "../components/MovieList";
import UserForm from "../components/userForm/UserForm";
import PrintMovieWrapper from "../components/PrintMovieWrapper";

export const appRoutes: RouteObject[] = [
    {
        path: "/",
        element: <MovieList/>
    },
    {
        path: "/movies/:id",
        element: <PrintMovieWrapper />
    },
    {
        path: "/user-form",
        element: <UserForm />
    },
    {
        path: "*",
        element: <p>Page not found!</p>
    }
]