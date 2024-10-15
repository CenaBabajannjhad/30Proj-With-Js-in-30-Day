export const GetAllMovies = async () => {
  let movies;
  const URL = "https://api.tvmaze.com/shows";

  try {
    const response = await fetch(URL);
    const json = await response.json();
    movies = json.filter((_, index) => index < 321);
  } catch (err) {
    console.err(err);
  }

  return movies;
};
