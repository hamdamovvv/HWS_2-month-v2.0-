
// 1 part

const btns = document.querySelectorAll('.counter__btn');

btns.forEach(btn=> {
    btn.addEventListener('click',
             function () {
            const direction = this.dataset.direction;
            const inp = this.parentElement.querySelector('.alco__value');
            const currentValue = +inp.value;
            let newValue;


             (direction === 'plus') ?
                 newValue = currentValue + 1
                     :
                 newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;

             (direction === 'plus') ?
                 inp.style.color = "green"
                 :
                 inp.style.color = "red"




             inp.value = newValue;
        })
})


// 2 part

document.querySelector('#test').onmousemove = function (event) {
    event = event || window.event;

    
    document.querySelector('#alcogolikX').innerHTML = event.offsetX;
    document.querySelector('#alcogolikY').innerHTML = event.offsetY;
}


// 3 part

const color = prompt("Введите цвет светофора\nкрасный\nжелтый\nзеленый").toLowerCase().trim()

switch (color){
    case 'красный':
        document.getElementsByClassName('red')[0].style.background = 'red'
        document.getElementsByClassName('red')[0].textContent = 'STOP!!!'
        break;
    case 'желтый':
        document.getElementsByClassName('yellow')[0].style.background = 'yellow'
        document.getElementsByClassName('yellow')[0].textContent = 'get ready!!!'
        break;
    case 'зеленый':
        document.getElementsByClassName('green')[0].style.background = 'green'
        document.getElementsByClassName('green')[0].textContent = 'Go!!!'
        break;
    default:
        document.getElementsByClassName('red')[0].textContent = 'try '
        document.getElementsByClassName('yellow')[0].textContent = ' again'
        document.getElementsByClassName('green')[0].textContent = '!!!'
        document.getElementsByClassName('red')[0].style.color = 'white'
        document.getElementsByClassName('yellow')[0].style.color = 'white'
        document.getElementsByClassName('green')[0].style.color = 'white'
}
