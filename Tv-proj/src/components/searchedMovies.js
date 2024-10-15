import { MoviesInformation } from "./moviesInformation";

const boxContainer = document.createElement("section");
boxContainer.classList.add("box-container", "single-box-container");

export const Box = (name, src, id) => {
  const moviesBox = document.createElement("div");
  const moviesBoxImgContainer = document.createElement("div");
  const moviesBoxImg = document.createElement("img");
  // img title
  const moviesBoxTitleContainer = document.createElement("div");
  const moviesBoxTitleH3 = document.createElement("h3");
  // attributes
  moviesBox.classList.add("single-box");
  moviesBoxImgContainer.classList.add("single-box-img-container");
  moviesBoxImg.src = src;
  moviesBoxImg.alt = name;
  moviesBoxImg.id = id;
  moviesBoxTitleContainer.classList.add("single-box-title-container");
  moviesBoxTitleH3.textContent = name;
  moviesBoxTitleH3.classList.add("box-name");

  // append
  boxContainer.appendChild(moviesBox);
  moviesBox.appendChild(moviesBoxImgContainer);
  moviesBoxImgContainer.appendChild(moviesBoxImg);
  moviesBox.appendChild(moviesBoxTitleContainer);
  moviesBoxTitleContainer.appendChild(moviesBoxTitleH3);

  // event
  moviesBox.addEventListener("click", () => {
    document.querySelector("#search").value = null;
    boxContainer.remove();
    document
      .querySelector("#main-container")
      .appendChild(MoviesInformation(id , 'movies'));
  });

  // return
  return boxContainer;
};
