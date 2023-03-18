const box = document.querySelector('.box')

let positionX = 0
let positionY = 0

const move = () => {
    if (positionX <= 449 && positionY <= 0) {
        positionX++
        box.style.left = `${positionX}px`
        setTimeout(move, 1)
    } else if (positionX >= 449 && positionY <= 449) {
        positionY++
        box.style.top = `${positionY}px`
        setTimeout(move, 1)
    } else if (positionX >= 0 && positionY >= 449   ) {
        positionX--
        box.style.left = `${positionX}px`
        setTimeout(move, 1)
    } else if (positionX <= 0 && positionY >= 0  ) {
        positionY--
        box.style.top = `${positionY}px`
        setTimeout(move, 1)
    }
}

move()

// --------------

const watch = document.querySelector('#watch');
let miliseconds = 0;
let timer;

const startWatch = () => {
    watch.classList.remove('paused');
    clearInterval(timer);
    timer = setInterval(()=>{
        miliseconds += 10;
        let dateTamer = new Date(miliseconds);
        watch.innerHTML =
            ('0'+dateTamer.getUTCHours()).slice(-2) + ':' +
            ('0'+dateTamer.getUTCMinutes()).slice(-2) + ':' +
            ('0'+dateTamer.getUTCSeconds()).slice(-2) + ':' +
            ('0'+dateTamer.getUTCMilliseconds()).slice(-3,-1);
    },10)
};

const pauseWatch = () => {
    watch.classList.add('paused');
    clearInterval(timer);
};

document.addEventListener('click', (e) =>{
    const element = e.target;
    if (element.id === 'start') startWatch();
    if (element.id === 'stop') pauseWatch();
})