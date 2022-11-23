// // 1 part
// let a = prompt ('Введите первое число')
// let b = prompt ('Введите второе число')
//
//
// const alfa = (a,b)=> {
//     (isNaN(a) || isNaN(b))
//     prompt('Введите число!!!')
//
// }
//     console.log(Math.min(a,b))
//
// alfa (a,b)
//
//
//
// // 2 part
// // var txt = prompt('Напишите что-нибудь')
// //     console.log(txt.length)
// const word = prompt("Что-нибудь напишите, пожалуйста");
// const returnFunction = (word) => {
//     console.log(`Длина строки равна ${word.length}`)
//
// }
// returnFunction('slovo')
//

// 3 part
// function calculator() {
//     number1 = prompt('Введите первое число')
//     operation = prompt('Выберите действие\n+\n-\n/\n*')
//     number2 = prompt('Введите второе число')
//
//     switch (operation) {
//         case'+':
//         alert(number1 + number2)
//         break;
//         case'-':
//         alert(number1 - number2)
//         break;
//         case'/':
//         if (number2 === '0') {
//             alert('На ноль делить нельзя')
//         } else {
//             alert(number1 / number2)
//         }
//         break;
//         case'*':
//         alert(number1 * number2)
//         break;
//
//         default: ('Введите только числа')
//     }
// }
// calculator()
let num1 = Number(prompt("Введите первое число"));
let  oper  = prompt("Выберите действие\n+\n-\n*\n/")
let num2 = Number(prompt("Введите второе число"))

const calc = () =>  {
    // переменная для результата
    let result;
    // получаем первое и второе число
    (isNaN(num1) || isNaN(num2)) ?
      alert("Введите только числа!") :
        true

    switch (oper) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
          (num2 === 0) ? result= "Ошибка!" : result = num1 / num2;
        break;
      default:
        alert("Выберите правильное действие")
    }
    alert(result)
  }
calc()