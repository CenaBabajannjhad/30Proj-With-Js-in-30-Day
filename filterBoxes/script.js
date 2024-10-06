const boxes = document.querySelectorAll('.boxes');
const filterBtns = document.querySelectorAll('.filter-btns');

const filterBoxes = e => {
    boxes.forEach(box => {
        box.classList.add('hide');

        if(box.dataset.name === e.target.dataset.name || e.target.dataset.name === 'all'){
            box.classList.remove('hide');
        }
    })
}

filterBtns.forEach(btn => btn.addEventListener('click' , filterBoxes))