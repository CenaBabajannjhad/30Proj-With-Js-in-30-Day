export const loadingElement = () => {
  // createElement
  const loadingSection = document.createElement("section");
  const loadingSectionContainer = document.createElement("div");
  const loading = document.createElement("div");

  // attributes
  loadingSection.classList.add("loading-section");
  loadingSectionContainer.classList.add("loading-section-container");
  loading.classList.add("loading-el");

  // appenchild
  loadingSection.appendChild(loadingSectionContainer);
  loadingSectionContainer.appendChild(loading);

  // return
  return loadingSection;
};
