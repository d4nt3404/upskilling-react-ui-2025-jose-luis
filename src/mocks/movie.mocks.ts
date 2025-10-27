import type { Movie } from "../types/movie";
import { getRandomDate } from "../assets/utils/date.utils";

export const mockMovie: Movie = {
    id: 1,
    title: 'Citizen Kane',
    description: 'Life of Kane',
    pictureURL: 'imgURL',
    releaseDate: new Date('1941-10-25'),
}

export const movieList: Movie[] = [{
  "id": 1,
  "title": "Kumail Nanjiani: Beta Male ",
  "description": "A refreshing sparkling beverage with a bold blood orange flavor.",
  "pictureURL": "http://dummyimage.com/172x100.png/dddddd/000000",
  "releaseDate": getRandomDate(new Date("2020-01-01"), new Date("2025-01-01"))
}, {
  "id": 2,
  "title": "Man You Had in Mind, The",
  "description": "Silicone oven mitts designed for safe cooking and baking.",
  "pictureURL": "http://dummyimage.com/242x100.png/5fa2dd/ffffff",
  "releaseDate": getRandomDate(new Date("2020-01-01"), new Date("2025-01-01"))
}, {
  "id": 3,
  "title": "Reflecting Skin, The",
  "description": "Thick and durable mat for workouts and yoga.",
  "pictureURL": "http://dummyimage.com/171x100.png/dddddd/000000",
  "releaseDate": getRandomDate(new Date("2020-01-01"), new Date("2025-01-01"))
}, {
  "id": 4,
  "title": "East Side, West Side",
  "description": "Twisted pasta perfect for salads and pasta dishes.",
  "pictureURL": "http://dummyimage.com/140x100.png/cc0000/ffffff",
  "releaseDate": getRandomDate(new Date("2020-01-01"), new Date("2025-01-01"))
}, {
  "id": 5,
  "title": "Love Games",
  "description": "Juicy and tender boneless chicken breasts.",
  "pictureURL": "http://dummyimage.com/117x100.png/dddddd/000000",
  "releaseDate": getRandomDate(new Date("2020-01-01"), new Date("2025-01-01")) 
}];