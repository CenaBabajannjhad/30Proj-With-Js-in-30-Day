import { infiniteScroll } from "../utilities/infiniteScroll";
import { MoviesBoxesSlider } from "./moviesSlider";
import { GetAllMovies } from "./fetchMovies";
import { fetchSeasons } from "../utilities/fetchSeassons";
let count, step;

export const MoviesInformation = (id = 0, phase) => {
  if (phase === "movies") {
    window.removeEventListener("scroll", infiniteScroll);
    const moviesInformationSection = document.createElement("section");
    document.querySelector("#main-container").innerHTML = null;

    const configMoviesInformationPage = async () => {
      // get movieData
      const movieData = await GetAllMovies();
      const targetMovie = await movieData.find(
        (movie) => movie.id === Number(id)
      );
      // creating moviesinformation elements
      const moviesInformationContainer = document.createElement("div");
      const sectionTopContainer = document.createElement("div");
      const sectionBttomContainer = document.createElement("div");
      // back button
      const backButtonContainer = document.createElement("div");
      const backButtonElement = document.createElement("button");
      // backbtn event
      backButtonElement.addEventListener("click", () => {
        moviesInformationSection.remove();

        step = 0;
        count = 10;

        document
          .getElementById("main-container")
          .appendChild(MoviesBoxesSlider(0, 10));
        document
          .getElementById("main-container")
          .appendChild(MoviesBoxesSlider(10, 20));
        window.addEventListener("scroll", infiniteScroll);
      });

      // movies poster
      const moviesInformationImgContainer = document.createElement("div");
      const moviesInformationImg = document.createElement("img");
      // movie name
      const movieInformationsNameContainer = document.createElement("div");
      const movieInformationsNameh2 = document.createElement("h2");
      // description
      const moviesInformationDescriptionContainer =
        document.createElement("div");

      // classlist , src , type ...
      moviesInformationSection.classList.add("movies-information-section");
      moviesInformationSection.id = count;
      moviesInformationContainer.classList.add(
        "container",
        "movies-information"
      );
      moviesInformationImgContainer.classList.add(
        "movie-information-image-container"
      );
      // back button
      backButtonContainer.classList.add("backBtn-wrapper");
      backButtonElement.classList.add("back-btn");
      backButtonElement.textContent = "back";
      // movie name
      moviesInformationContainer.classList.add("movie-name-contaner");
      movieInformationsNameh2.textContent = targetMovie.name;
      movieInformationsNameh2.classList.add("movie-name");
      // movie genres
      let movieGenresGenerator = (genres) => {
        let movieGenresContainer = document.createElement("div");
        movieGenresContainer.classList.add("movie-genres-container");
        for (let i = 0; i < genres.length; i++) {
          let genresItem = document.createElement("div");
          genresItem.textContent = genres[i];
          movieGenresContainer.appendChild(genresItem);
        }
        return movieGenresContainer;
      };
      // movie img
      moviesInformationImg.src = targetMovie.image.medium;
      moviesInformationImg.alt = targetMovie.name;
      moviesInformationDescriptionContainer.classList.add(
        "movies-information-description"
      );
      // movie description
      moviesInformationDescriptionContainer.innerHTML = targetMovie.summary;
      sectionTopContainer.classList.add("sec-1");
      sectionBttomContainer.classList.add("sec-2");
      // append
      moviesInformationSection.appendChild(moviesInformationContainer);
      // back btn
      moviesInformationContainer.appendChild(sectionTopContainer);
      moviesInformationContainer.appendChild(sectionBttomContainer);
      sectionTopContainer.appendChild(backButtonContainer);
      backButtonContainer.appendChild(backButtonElement);
      // img
      sectionTopContainer.appendChild(moviesInformationImgContainer);
      moviesInformationImgContainer.appendChild(moviesInformationImg);
      // movie name
      sectionBttomContainer.appendChild(movieInformationsNameContainer);
      movieInformationsNameContainer.appendChild(movieInformationsNameh2);
      // movie genres
      sectionBttomContainer.appendChild(
        movieGenresGenerator(targetMovie.genres)
      );

      // descript
      sectionBttomContainer.appendChild(moviesInformationDescriptionContainer);
    };
    configMoviesInformationPage();
    count++;

    return moviesInformationSection;
  } else if (phase === "episode") {
    window.removeEventListener("scroll", infiniteScroll);
    const moviesInformationSection = document.createElement("section");
    document.querySelector("#main-container").innerHTML = null;

    const configMoviesInformationPage = async () => {
      // get movieData
      const episodeData = await fetchSeasons(id);
      console.log(episodeData);

      // creating moviesinformation elements
      const moviesInformationContainer = document.createElement("div");
      const sectionTopContainer = document.createElement("div");
      const sectionBttomContainer = document.createElement("div");
      // back button
      const backButtonContainer = document.createElement("div");
      const backButtonElement = document.createElement("button");
      // backbtn event
      backButtonElement.addEventListener("click", () => {
        moviesInformationSection.remove();

        step = 0;
        count = 10;

        document
          .getElementById("main-container")
          .appendChild(MoviesBoxesSlider(0, 10));
        document
          .getElementById("main-container")
          .appendChild(MoviesBoxesSlider(10, 20));
        window.addEventListener("scroll", infiniteScroll);
      });

      // movies poster
      const moviesInformationImgContainer = document.createElement("div");
      const moviesInformationImg = document.createElement("img");
      // movie name
      const movieInformationsNameContainer = document.createElement("div");
      const movieInformationsNameh2 = document.createElement("h2");
      // description
      const moviesInformationDescriptionContainer =
        document.createElement("div");

      // classlist , src , type ...
      moviesInformationSection.classList.add("movies-information-section");
      moviesInformationSection.id = count;
      moviesInformationContainer.classList.add(
        "container",
        "movies-information"
      );
      moviesInformationImgContainer.classList.add(
        "movie-information-image-container"
      );
      // back button
      backButtonContainer.classList.add("backBtn-wrapper");
      backButtonElement.classList.add("back-btn");
      backButtonElement.textContent = "back";
      // movie name
      moviesInformationContainer.classList.add("movie-name-contaner");
      movieInformationsNameh2.textContent = targetMovie.name;
      movieInformationsNameh2.classList.add("movie-name");
      // movie genres
      let movieGenresGenerator = (genres) => {
        let movieGenresContainer = document.createElement("div");
        movieGenresContainer.classList.add("movie-genres-container");
        for (let i = 0; i < genres.length; i++) {
          let genresItem = document.createElement("div");
          genresItem.textContent = genres[i];
          movieGenresContainer.appendChild(genresItem);
        }
        return movieGenresContainer;
      };
      // movie img
      moviesInformationImg.src = targetMovie.image.medium;
      moviesInformationImg.alt = targetMovie.name;
      moviesInformationDescriptionContainer.classList.add(
        "movies-information-description"
      );
      // movie description
      moviesInformationDescriptionContainer.innerHTML = targetMovie.summary;
      sectionTopContainer.classList.add("sec-1");
      sectionBttomContainer.classList.add("sec-2");
      // append
      moviesInformationSection.appendChild(moviesInformationContainer);
      // back btn
      moviesInformationContainer.appendChild(sectionTopContainer);
      moviesInformationContainer.appendChild(sectionBttomContainer);
      sectionTopContainer.appendChild(backButtonContainer);
      backButtonContainer.appendChild(backButtonElement);
      // img
      sectionTopContainer.appendChild(moviesInformationImgContainer);
      moviesInformationImgContainer.appendChild(moviesInformationImg);
      // movie name
      sectionBttomContainer.appendChild(movieInformationsNameContainer);
      movieInformationsNameContainer.appendChild(movieInformationsNameh2);
      // movie genres
      sectionBttomContainer.appendChild(
        movieGenresGenerator(targetMovie.genres)
      );

      // descript
      sectionBttomContainer.appendChild(moviesInformationDescriptionContainer);
    };
    configMoviesInformationPage();
    count++;

    return moviesInformationSection;
  }
};
