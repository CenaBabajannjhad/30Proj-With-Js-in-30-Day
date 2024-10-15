import { Header } from "./src/components/header";
import { Main } from "./src/components/main";
import { MoviesBoxesSlider } from "./src/components/moviesSlider";
import { infiniteScroll } from "./src/utilities/infiniteScroll";
import { SideNavbarToggler } from "./src/utilities/sideNavbarToggler";
import { activeDarkmode } from "./src/utilities/darkModeToggler";
import { LiveSearchInput } from "./src/utilities/search";
const root = document.querySelector("#root");

// add header and main nodes in root
root.appendChild(Header());
root.appendChild(Main());
// add project components into main element
const mainElement = document.querySelector("#main-container");
mainElement.appendChild(MoviesBoxesSlider());
mainElement.appendChild(MoviesBoxesSlider());
// infiniteScroll
window.addEventListener("scroll", infiniteScroll);
// open and close sideNavbar
document
  .querySelector(".hamburger-button")
  .addEventListener("click", SideNavbarToggler);
document
  .querySelector(".navbar-close-btn-img")
  .addEventListener("click", SideNavbarToggler);
// darkmode toggler
document
  .querySelector(".darkmode-button")
  .addEventListener("click", activeDarkmode);
document.querySelector(".sun").addEventListener("click", activeDarkmode);
// search movies
document.querySelector('#search').addEventListener('keyup' , LiveSearchInput);
