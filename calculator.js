/*let num1 = prompt('первое число');
num1 = Number(num1);

let num2 = prompt('второе число');
num2 = Number(num2);


let operator = prompt('оператор (/,+,*,-)');


switch (operator) {
    case '+':
        alert (num1 + num2);
        break;
    case '-':
        alert (num1 - num2);
        break;
    case '/':
        alert (num1 / num2);
        break;
    case '*':
        alert (num1 * num2);
        
     
}*/

//вывести каждую операцию в функцию


const summ = (num1, num2) => {

    if(typeof num1 !== 'number') {
        console.log('Первая переменная не число, введите числа заново')
    }
    
    if(typeof num2 !== 'number') {
        console.log('Вторая переменная не число, введите числа заново')
    }

    console.log(num1 + num2)
}