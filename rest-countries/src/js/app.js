window.addEventListener("load", app);
function app() {
  countryBoxes();
}


// fetch data from json file
const getData = async () => {
  try{
    const res = await fetch("./src/json/data.json");

    if(res.ok){
      const data = await res.json();
      return data;
    }else{
      throw new Error(res.status)
    }
  }catch(err){
    console.error(err);
    alert(err)
  }
};






// show all countries in dom
const countryBoxes = async () => {
  let root = document.querySelector("#country-boxes-place");
  const countryData = await getData();

  countryData.map((item) => {
    let countriesWrapper = document.createElement("div");
    let countriesImg = document.createElement("img");
    let countriesInformation = document.createElement("div");
    let countriesName = document.createElement("h3");
    let divPop = document.createElement("div");
    let popSpan = document.createElement("span");
    let popCountspan = document.createElement("span");
    let divReg = document.createElement("div");
    let regSpan = document.createElement("span");
    let nameSpan = document.createElement("span");
    let divCap = document.createElement("div");
    let capSpan = document.createElement("span");
    let capNameSpan = document.createElement("span");
    // attributes
    countriesWrapper.setAttribute('data-region' , item.region);
    countriesWrapper.setAttribute('data-name' , item.name);
    countriesWrapper.className = 'country-item';
    countriesImg.src = item.flag;
    countriesInformation.classList.add("item-caption", "flex");
    countriesName.textContent = item.name;
    countriesName.className = 'country-name'
    popSpan.textContent = "Population :";
    popCountspan.textContent = item.population;
    regSpan.textContent = "Region :";
    nameSpan.textContent = item.region;
    capSpan.textContent = "Capital :";
    capNameSpan.textContent = item.capital;
    // append
    root.appendChild(countriesWrapper);
    countriesWrapper.appendChild(countriesImg);
    countriesWrapper.appendChild(countriesInformation);
    countriesInformation.appendChild(countriesName);
    countriesInformation.appendChild(divPop);
    divPop.appendChild(popSpan);
    divPop.appendChild(popCountspan);
    countriesInformation.appendChild(divReg);
    divReg.appendChild(regSpan);
    divReg.appendChild(nameSpan);
    countriesInformation.appendChild(divCap);
    divCap.appendChild(capSpan);
    divCap.appendChild(capNameSpan);
  });
};
