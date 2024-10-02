const countPlace = document.querySelector('h1');
const button = document.querySelector('button');
let count = 0;

countPlace.textContent = count;

window.addEventListener('keydown' , e => {
    console.log(e.key);
    if(e.key === ' ' || e.key === 'Enter'){
        count += 1;
        countPlace.textContent = count;
    }

    if(e.key === 'Backspace'){
        if(count > 0){
            count -= 1
            countPlace.textContent = count
        }
    }

    if(e.key === 'r'){
        count = 0;
        countPlace.textContent = count;
    }

})

button.addEventListener('click' , () => {
    count += 1
    countPlace.textContent = count;
})

let space = 0;
document.querySelectorAll('p').forEach(e => {
    e.style.bottom = `${space}px`;
    space += 20;  
})