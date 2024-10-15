export const Main = () => {
  
  const main = document.createElement("main");
  const mainContainer = document.createElement("div");
  // attributes
  mainContainer.classList.add("container");
  mainContainer.id = "main-container";
  // append
  main.appendChild(mainContainer);

  return main;
};