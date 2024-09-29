const drumButtonsParent = document.querySelector('.main-wrapper');
const clapAudio = new Audio('./assets/clap.wav');
const hihatAudio = new Audio('./assets/hihat.wav');
const kickAudio = new Audio('./assets/kick.wav');
const openhatAudio = new Audio('./assets/openhat.wav');
const boomAudio = new Audio('./assets/boom.wav');
const rideAudio = new Audio('./assets/ride.wav');
const snareAudio = new Audio('./assets/snare.wav');
const tomAudio = new Audio('./assets/tom.wav');
const tinkAudio = new Audio('./assets/tink.wav');
// remove loading
window.addEventListener('load' , () => setTimeout(() => document.getElementById('loading').remove() , 400))
// buttons click logic
drumButtonsParent.addEventListener('click' , e => {
    if(e.target.id === 'A' || e.target.textContent === 'A' || e.target.textContent === 'clap'){
        clapAudio.play();

    }else if(e.target.id === 'S' || e.target.textContent === 'S' || e.target.textContent === 'hihat'){
        hihatAudio.play();

    }else if(e.target.id === 'D' || e.target.textContent === 'D' || e.target.textContent === 'kick'){
        kickAudio.play();

    }else if(e.target.id === 'F' || e.target.textContent === 'F' || e.target.textContent === 'openhat'){
       openhatAudio.play();

    }else if(e.target.id === 'G' || e.target.textContent === 'G' || e.target.textContent === 'boom'){
       boomAudio.play();

    }else if(e.target.id === 'H' || e.target.textContent === 'H' || e.target.textContent === 'ride'){
        rideAudio.play();
 
    }else if(e.target.id === 'J' || e.target.textContent === 'J' || e.target.textContent === 'snare'){
        snareAudio.play();
 
    }else if(e.target.id === 'K' || e.target.textContent === 'K' || e.target.textContent === 'tom'){
        tomAudio.play();
 
    }else if(e.target.id === 'L' || e.target.textContent === 'L' || e.target.textContent === 'tink'){
        tinkAudio.play();
 
    }
});
// keyboard event listener
window.addEventListener('keydown' , e => {
    console.log(e.key);
    if(e.key === 'a'){
        document.querySelector('#A').classList.add('active');
        clapAudio.play();
        setTimeout(() => {
            document.querySelector('#A').classList.remove('active');
        }, 300);

    }else if(e.key === 's'){
        document.querySelector('#S').classList.add('active');
        hihatAudio.play();
        setTimeout(() => {
            document.querySelector('#S').classList.remove('active');
        }, 300);

    }else if(e.key === 'd'){
        document.querySelector('#D').classList.add('active');
        kickAudio.play();
        setTimeout(() => {
            document.querySelector('#D').classList.remove('active');
        }, 300);

    }else if(e.key === 'f'){
        document.querySelector('#F').classList.add('active');
        openhatAudio.play();
        setTimeout(() => {
            document.querySelector('#F').classList.remove('active');
        }, 300);

    }else if(e.key === 'g'){
        document.querySelector('#G').classList.add('active');
        boomAudio.play();
        setTimeout(() => {
            document.querySelector('#G').classList.remove('active');
        }, 300);

    }else if(e.key === 'h'){
        document.querySelector('#H').classList.add('active');
        rideAudio.play();
        setTimeout(() => {
            document.querySelector('#H').classList.remove('active');
        }, 300);

    }else if(e.key === 'j'){
        document.querySelector('#J').classList.add('active');
        snareAudio.play();
        setTimeout(() => {
            document.querySelector('#J').classList.remove('active');
        }, 300);

    }else if(e.key === 'k'){
        document.querySelector('#K').classList.add('active');
        tomAudio.play();
        setTimeout(() => {
            document.querySelector('#K').classList.remove('active');
        }, 300);

    }else if(e.key === 'l'){
        document.querySelector('#L').classList.add('active');
        tinkAudio.play();
        setTimeout(() => {
            document.querySelector('#L').classList.remove('active');
        }, 300);
    }
})