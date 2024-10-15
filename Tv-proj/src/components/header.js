import { addMoviesInSelect } from "../utilities/addMoviesNameInSelectMovies";
import { moviesSelectInputResult } from "../utilities/movieSelectInputResult";
import { addEpisodesNameInSelectMovies } from "../utilities/addEpisodesNameInSelectMovies";

export const Header = () => {
  const header = document.createElement("header");
  const headerContainer = document.createElement("div"); // header container
  // logo
  const logoWrapper = document.createElement("div"); // logo container
  const logoImg = document.createElement("img"); // logo
  // nav
  const nav = document.createElement("nav");
  // darkmode
  const darkModeWrapper = document.createElement("div"); // darkmode container
  const darkModeBtnMoon = document.createElement("button"); // moon btn
  const darkModeBtnMoonImg = document.createElement("img"); // moon
  const darkmodeBtnSun = document.createElement("button"); // sun btn
  const darkmodeBtnSunImg = document.createElement("img"); // sun
  // hamburger-icon area
  const hamburgerWrapper = document.createElement("div"); // hamburger container
  const hamburgerButton = document.createElement("button"); // hamburger btn
  const hamburgerImageBtn = document.createElement("img"); // hamburger
  // navbar area
  const navbarUl = document.createElement("ul"); // navbar ul
  //close btn
  const navbarCloseli = document.createElement("li"); // navbar close li
  const navbarCloseBtn = document.createElement("button"); // navbar close btn
  const navbarCloseBtnImg = document.createElement("img"); // close img
  // navbar input
  const navbarInputLi = document.createElement("li"); // navbar input li
  const navbarInput = document.createElement("input"); // navbar input
  const searchLiveBoxContainer = document.createElement("div");
  const searchLiveBoxResult = document.createElement("div");
  const searchResultA = document.createElement("a");
  // navabr movies option
  const navbarMoviesLi = document.createElement("li"); //  movies input li
  const navbarMoviesSelect = document.createElement("select"); // movies select
  const navbarMoviesOption = document.createElement("option"); // movies option
  // navbar episode option
  const navbarEpisodeLi = document.createElement("li"); // episodes input li
  const navbarEpisodeSelect = document.createElement("select"); // episodes select
  const navbarEpisodeOption = document.createElement("option"); // episodes option

  // **attributes**
  headerContainer.classList.add("container", "header-container");
  // logo area
  logoWrapper.classList.add("logo-wrapper");
  logoImg.classList.add("logo");
  logoImg.src = "../../assets/icon/logo/logo.png";
  logoImg.alt = "CENFLIX";
  // nav area
  nav.classList.add("nav-wrapper");
  // darkmode area
  darkModeWrapper.classList.add("darkmode-wrapper");
  // moon
  darkModeBtnMoon.classList.add("darkmode-button");
  darkModeBtnMoonImg.classList.add("darkmode");
  darkModeBtnMoonImg.src = `./assets/icon/darkMode/moon.png`;
  darkModeBtnMoonImg.alt = "darkmode-toggle";
  // sun
  darkmodeBtnSun.classList.add("darkmode-button", "sun", "none");
  darkmodeBtnSunImg.classList.add("darkmode");
  darkmodeBtnSunImg.src = "./assets/icon/darkMode/sun.png";
  darkmodeBtnSunImg.alt = "darkmode-toggle";
  // hamburger area
  hamburgerWrapper.classList.add("hamburger-wrapper");
  hamburgerButton.classList.add("hamburger-button");
  hamburgerButton.id = "menu-icon";
  hamburgerImageBtn.classList.add("hamburger");
  hamburgerImageBtn.src = "./assets/icon/menu/menu-black/menu.svg";
  hamburgerImageBtn.alt = "hamburger-button";
  // navbar area
  navbarUl.classList.add("Navbar-wrapper");
  // close btn
  navbarCloseli.classList.add("navbar-close");
  navbarCloseBtn.classList.add("navbar-close-btn");
  navbarCloseBtn.id = "close-sidenavbar";
  navbarCloseBtnImg.classList.add("navbar-close-btn-img");
  navbarCloseBtnImg.src = "./assets/icon/menu/menu-white/close-white.svg";
  navbarCloseBtnImg.alt = "close-btn";
  // navbar input
  navbarInputLi.classList.add("input-li");
  navbarInput.classList.add("search-input");
  navbarInput.id = "search";
  navbarInput.type = "text";
  navbarInput.placeholder = "enter movie name...";
  searchLiveBoxContainer.classList.add(
    "input-live-search-box-container",
    "none"
  );
  searchLiveBoxResult.classList.add("result");
  searchResultA.textContent = "result";
  // navbar movies option area
  navbarMoviesLi.classList.add("movies-option-li");
  navbarMoviesSelect.classList.add("movies-option");
  navbarMoviesSelect.id = "select movies";
  navbarMoviesOption.textContent = "select movies";
  navbarMoviesOption.id = 0;
  // navbar episode option area
  navbarEpisodeSelect.classList.add("episode-option");
  navbarEpisodeSelect.id = "episode-option";
  navbarEpisodeOption.textContent = "select episode";

  // add movies name in select movie
  addMoviesInSelect(navbarMoviesSelect);
  navbarMoviesSelect.addEventListener("change", async () => {
    let targetMovie = await moviesSelectInputResult(
      navbarMoviesSelect.options[navbarMoviesSelect.selectedIndex].id
    );

    document.querySelector("#main-container").appendChild(targetMovie);
    addEpisodesNameInSelectMovies(targetMovie.id)
  });

  // append
  header.appendChild(headerContainer);
  // logo area
  headerContainer.appendChild(logoWrapper);
  logoWrapper.appendChild(logoImg);
  // nav area
  headerContainer.appendChild(nav);
  // darkmode area
  // moon
  nav.appendChild(darkModeWrapper);
  darkModeWrapper.appendChild(darkModeBtnMoon);
  darkModeBtnMoon.appendChild(darkModeBtnMoonImg);
  // sun
  darkModeWrapper.appendChild(darkmodeBtnSun);
  darkmodeBtnSun.appendChild(darkmodeBtnSunImg);
  // hamburger area
  nav.appendChild(hamburgerWrapper);
  hamburgerWrapper.appendChild(hamburgerButton);
  hamburgerButton.appendChild(hamburgerImageBtn);
  // navbar ul
  nav.appendChild(navbarUl);
  // close btn
  navbarUl.appendChild(navbarCloseli);
  navbarCloseli.appendChild(navbarCloseBtn);
  navbarCloseBtn.appendChild(navbarCloseBtnImg);
  // navbar input
  navbarUl.appendChild(navbarInputLi);
  navbarInputLi.appendChild(navbarInput);
  navbarInputLi.appendChild(searchLiveBoxContainer);
  searchLiveBoxContainer.appendChild(searchLiveBoxResult);
  searchLiveBoxResult.appendChild(searchResultA);
  // navbar movies option
  navbarUl.appendChild(navbarMoviesLi);
  navbarMoviesLi.appendChild(navbarMoviesSelect);
  navbarMoviesSelect.appendChild(navbarMoviesOption);
  // navbar episode option
  navbarUl.appendChild(navbarEpisodeLi);
  navbarEpisodeLi.appendChild(navbarEpisodeSelect);
  navbarEpisodeSelect.appendChild(navbarEpisodeOption);

  return header;
};
