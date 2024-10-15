import { GetAllMovies } from "../components/fetchMovies";

export async function addMoviesInSelect(select) {
  const movieData = await GetAllMovies();

  movieData.forEach((element) => {
    const option = document.createElement("option");
    option.id = element.id;
    option.textContent = element.name;

    select.appendChild(option);
  });
}
