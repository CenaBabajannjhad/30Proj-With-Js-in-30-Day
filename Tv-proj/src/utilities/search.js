import { GetAllMovies } from "../components/fetchMovies";
import { showSearchInputResult } from "./showSearchInputResult";


export const LiveSearchInput = async (Event) => {
  // if in box-container allready exist box searches , remove they for showing new results
  const isBoxContainer = document.querySelector(".box-container");
  const singleBoxes = document.querySelectorAll(".single-box");

  if (isBoxContainer) {
    singleBoxes.forEach(item => item.remove());
  };
  
  // get movie data from getAllMocies function
  let moviesData = await GetAllMovies();
  let searchValue = Event.target.value;
  // search in movies data
  let movieNameInfo = moviesData.filter((item) => {
    // if input had value - returned filter
    if (searchValue) {
      return item.name.toLowerCase().includes(searchValue);
    } else {
      // if input had no value - else return null
      return null;
    }
  });
  // send filter data for showSearchInputResult
  showSearchInputResult(movieNameInfo);
};
