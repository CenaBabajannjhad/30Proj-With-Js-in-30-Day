const selectElement = document.querySelector("#select-regions");

selectElement.addEventListener("change", (e) => {
  const countrieCards = document.querySelectorAll('.country-item');
  let regionSelected = e.target.value;

    countrieCards.forEach(card => {
      card.classList.add('disable');

      if(card.dataset.region === e.target.value || e.target.value === 'All'){
        card.classList.remove('disable');
      }

    })
});

