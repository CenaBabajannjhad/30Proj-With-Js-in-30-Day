const root = document.querySelector(':root');
const spaceInput = document.querySelector('#spacing');
const blurInput = document.querySelector('#blur');
const colorInput = document.querySelector('#base-Color');
let colorValue = '#ffc600';
let spacingValue = '1px';
let blurValue = '0px';

spaceInput.addEventListener('change' , e => {
    spacingValue = e.target.value;
    root.style.setProperty('--spacing' , `${spacingValue}px`)
})

colorInput.addEventListener('change' , e => {
    colorValue = e.target.value;
    root.style.setProperty('--color' , colorValue)
})

blurInput.addEventListener('change' , e => {
    blurValue = e.target.value;
    root.style.setProperty('--blur' , `${blurValue}px`)
})