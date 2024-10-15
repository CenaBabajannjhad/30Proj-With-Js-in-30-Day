import { MoviesBoxesSlider } from "../components/moviesSlider";
import { loadingElement } from "../components/loadingElement";


export const infiniteScroll = () => {
  const docHight = document.documentElement.scrollHeight;
  const docTop = document.documentElement.scrollTop + 3;
  const windowHeight = window.innerHeight;

  if (windowHeight + docTop >= docHight) {
    const mainElement = document.querySelector("#main-container");
    mainElement.appendChild(loadingElement());

    setTimeout(() => {
        document.querySelector('.loading-section').remove();
        mainElement.appendChild(MoviesBoxesSlider());
    }, 1000);
  }
};
