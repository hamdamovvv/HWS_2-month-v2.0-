// 1 part

let i = 0;
while (i < 11) { // выводит 0, затем 1, затем 2
    console.log( i );
    i++;
}
// 2 part

let a = 20;
while (a) { // когда i будет равно 0, условие станет ложным, и цикл остановится
    a--;
    console.log( a );
}

//3 part

const color = prompt('Выберите цвет светофора:\nкрасный\nжелтый\nзеленый').toLowerCase();

switch (color) {
    case 'красный':
        alert('Стой!')
        break;
    case 'желтый':
    case 'жёлтый':
        alert('Приготовьтесь!')
        break;
    case 'зеленый':
    case 'зелёный':
        alert('иди!')
        break;

    default:
        alert('Введите цвет правильно')
}