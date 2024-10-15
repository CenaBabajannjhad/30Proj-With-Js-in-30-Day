import { fetchSeasons } from "./fetchSeassons";
import { MoviesInformation } from "../components/moviesInformation";

export const addEpisodesNameInSelectMovies = async (movieId) => {
    
  if (Number(movieId) > 0) {
    const movieSeason = await fetchSeasons(Number(movieId));
    console.log(movieSeason);

    const episodesSelectElement = document.getElementById('episode-option');
    movieSeason.forEach(episode => {
        const episodeElement = document.createElement('option');
        episodeElement.id = episode.id;
        episodeElement.textContent = episode.name;

        
        episodesSelectElement.appendChild(episodeElement)
    });

    episodesSelectElement.addEventListener("change", async () => {
        let targetEpisode = Number(episodesSelectElement.options[episodesSelectElement.selectedIndex].id)
        MoviesInformation(targetEpisode , 'episode')

      });
  } else {

  }
};
