import { GetAllMovies } from "./fetchMovies";
import { MoviesInformation } from "./moviesInformation";

let step = 0;
let count = 10;

export const MoviesBoxesSlider = (customStep = step, customCount = count) => {
  const moviesBoxSection = document.createElement("section");
  // get data from API
  const setImgAndTitleMoviesSlider = async () => {
    const movieData = await GetAllMovies();
    for (let i = customStep; i <= customCount; i++) {
      // img box
      const moviesBox = document.createElement("div");
      const moviesBoxImgContainer = document.createElement("div");
      const moviesBoxImg = document.createElement("img");
      // img title
      const moviesBoxTitleContainer = document.createElement("div");
      const moviesBoxTitleH3 = document.createElement("h3");
      // attributes
      moviesBoxSection.classList.add("movie-boxes-section", "movie-boxes");
      moviesBox.classList.add("movie-box");
      moviesBox.setAttribute("data-movie-id", movieData[i].id);
      moviesBoxImgContainer.classList.add("boxes-img-container");
      moviesBoxImg.src = movieData[i].image.medium;
      moviesBoxImg.alt = movieData[i].name;
      moviesBoxImg.id = movieData[i].id;
      moviesBoxTitleContainer.classList.add("boxes-title-container");
      moviesBoxTitleH3.textContent = movieData[i].name;
      // event
      moviesBox.addEventListener("click", (e) => {
        const mainElement = document.querySelector("#main-container");
        mainElement.appendChild(MoviesInformation(e.target.id , 'movies'));
      });
      // append
      moviesBoxSection.appendChild(moviesBox);
      moviesBox.appendChild(moviesBoxImgContainer);
      moviesBoxImgContainer.appendChild(moviesBoxImg);
      moviesBox.appendChild(moviesBoxTitleContainer);
      moviesBoxTitleContainer.appendChild(moviesBoxTitleH3);
    }
  };
  step = count + 1;
  count = count + 10;
  setImgAndTitleMoviesSlider();
  // return
  return moviesBoxSection;
};
