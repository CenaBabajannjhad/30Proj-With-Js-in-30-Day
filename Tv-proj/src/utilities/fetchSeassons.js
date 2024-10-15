export const fetchSeasons = async (moviesId) => {
    let seasons;
    const URL = `https://api.tvmaze.com/shows/${moviesId}/episodes`;
  
    try {
      const response = await fetch(URL);
      seasons = await response.json();
      console.log(seasons);

    } catch (err) {
      console.err(err);
    }
  
    return seasons;
  };
  