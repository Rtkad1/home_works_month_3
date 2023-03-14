const innInput = document.querySelector('#innInput')
const innCheck = document.querySelector('#innCheck')
const innResult = document.querySelector('.innResult')

const regExp = /^\d{2}-\d{2}-\d{2}-\d{2}-\d{2}-\d{2}-\d{2}$/

innCheck.onclick = () => {
    if (regExp.test(innInput.value)) {
        innResult.innerHTML = 'OK'
        innResult.style.color = 'green'
    } else {
        innResult.innerHTML = 'NOT OK'
        innResult.style.color = 'red'
    }
}

//-------------------------------------

let position = 0;
function recursionAnimation() {
    position = position + 10;
    if (position > 450) return;
    document.querySelector('.box').style.left = position + 'px';
    animation();
}

function animation() {
    setTimeout(recursionAnimation, 10);
}
animation()
