import { infiniteScroll } from "./infiniteScroll";
import { Box } from "../components/searchedMovies";
import { MoviesBoxesSlider } from "../components/moviesSlider";

export const showSearchInputResult = (movieS) => {
  // removing 2 thing , infinite scroll event and movies-slider
  window.removeEventListener("scroll", infiniteScroll);
  document.querySelectorAll(".movie-boxes").forEach((item) => item.remove());
  // if param had value
  if (movieS) {
    movieS.forEach((item) => {
      // for each item in list , call box component to show in doc searches
      document
        .getElementById("main-container")
        .appendChild(Box(item.name, item.image.medium, item.id));
    });
  }
  // check if movie-information
  //   if (isMovieInfo) {
  //     document.querySelector(".movies-information-section").remove();
  //   }

  // if input had no value
  if (movieS.length === 0 || movieS === null || movieS === undefined) {
    const singleBoxes = document.querySelectorAll(".single-box");
    singleBoxes.forEach((item) => item.remove());

    document
      .querySelector("#main-container")
      .appendChild(MoviesBoxesSlider(0, 10));
    document
      .querySelector("#main-container")
      .appendChild(MoviesBoxesSlider(10, 20));

    window.addEventListener("scroll", infiniteScroll);
  }
};
