let status = true;

export const activeDarkmode = () => {
  document.body.classList.toggle("body-darkmode");
  document.querySelector(".darkmode-button").classList.toggle("none");
  document.querySelector(".sun").classList.toggle("none");
  document.querySelector(".hamburger").src = status ? "./assets/icon/menu/menu-white/menu.svg" : "./assets/icon/menu/menu-black/menu.svg"
  document.querySelector("header").classList.toggle("header-dark");
  // movie information condition
  if (document.querySelector(".movie-name")) {
    document.querySelector(".movie-name").classList.toggle("darkmode-name");
    document
      .querySelector(".movies-information-description")
      .classList.add("darkmode-desc");
  };
  status = !status;
};
