import { release } from "os";
import type { Movie } from "../types/movie";

export const mockMovie: Movie = {
    id: 1,
    title: 'Citizen Kane',
    description: 'Life of Kane',
    pictureURL: 'imgURL',
    releaseDate: new Date('1941-10-25'),
}