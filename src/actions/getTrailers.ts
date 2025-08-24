import { type Trailer } from "../types/Trailer";

export default async function getTrailers(): Promise<Trailer[]> {
  return trailers;
}

const trailers: Trailer[] = [
  { id: 1, title: "Moana 2", backdrop: "images/backdrops/backdrop8.jpg", video: "https://www.youtube.com/embed/hDZ7y8RP5HE" },
  { id: 2, title: "Inception", backdrop: "images/backdrops/backdrop2.jpg", video: "https://www.youtube.com/embed/YoHD9XEInc0" },
  { id: 3, title: "The Shawshank Redemption", backdrop: "images/backdrops/backdrop1.jpg", video: "https://www.youtube.com/embed/NmzuHjWmXOc" },
  { id: 4, title: "The Lion King", backdrop: "images/backdrops/backdrop3.jpg", video: "https://www.youtube.com/embed/7TavVZMewpY" },
  { id: 5, title: "The Dark Knight", backdrop: "images/backdrops/backdrop4.jpg", video: "https://www.youtube.com/embed/EXeTwQWrcwY" },
  { id: 6, title: "Interstellar", backdrop: "images/backdrops/backdrop5.jpg", video: "https://www.youtube.com/embed/zSWdZVtXT7E" },
  { id: 7, title: "Black Panther", backdrop: "images/backdrops/backdrop6.jpg", video: "https://www.youtube.com/embed/xjDjIWPwcPU" },
  { id: 8, title: "Toy Story 4", backdrop: "images/backdrops/backdrop7.jpg", video: "https://www.youtube.com/embed/wmiIUN-7qhE" },
  { id: 9, title: "Warfare", backdrop: "images/backdrops/backdrop9.jpg", video: "https://www.youtube.com/embed/JER0Fkyy3tw" },
];
