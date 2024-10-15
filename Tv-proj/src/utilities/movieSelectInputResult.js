import { GetAllMovies } from "../components/fetchMovies";
import { infiniteScroll } from "./infiniteScroll";
import { MoviesBoxesSlider } from "../components/moviesSlider";

export const moviesSelectInputResult = async (movieId) => {
  if (Number(movieId) > 0) {
    let moviesInformationSection;

    window.removeEventListener("scroll", infiniteScroll);
    moviesInformationSection = document.createElement("section");
    document.querySelector("#main-container").innerHTML = null;

    const movieData = await GetAllMovies();
    const targetMovie = await movieData.find(
      (movie) => movie.id === Number(movieId)
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

      document
        .getElementById("main-container")
        .appendChild(MoviesBoxesSlider(0, 10));
      document
        .getElementById("main-container")
        .appendChild(MoviesBoxesSlider(10, 20));
      window.addEventListener("scroll", infiniteScroll);
      document.querySelector(".movies-option").value = "select movies";
    });

    // movies poster
    const moviesInformationImgContainer = document.createElement("div");
    const moviesInformationImg = document.createElement("img");
    // movie name
    const movieInformationsNameContainer = document.createElement("div");
    const movieInformationsNameh2 = document.createElement("h2");
    // description
    const moviesInformationDescriptionContainer = document.createElement("div");

    // classlist , src , type ...
    moviesInformationSection.classList.add("movies-information-section");
    moviesInformationSection.id = movieId;
    moviesInformationContainer.classList.add("container", "movies-information");
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
    const movieGenresGenerator = (genres) => {
      const movieGenresContainer = document.createElement("div");
      movieGenresContainer.classList.add("movie-genres-container");
      for (let i = 0; i < genres.length; i++) {
        const genresItem = document.createElement("div");
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
    sectionBttomContainer.appendChild(movieGenresGenerator(targetMovie.genres));

    // descript
    sectionBttomContainer.appendChild(moviesInformationDescriptionContainer);

    return moviesInformationSection;

  } else {
    document.getElementById('main-container').innerHTML = null;
    document.getElementById("main-container").appendChild(MoviesBoxesSlider(0, 10));
    document.getElementById("main-container").appendChild(MoviesBoxesSlider(10, 20));
    window.addEventListener("scroll", infiniteScroll);
  }
};
