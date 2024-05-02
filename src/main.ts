import './style.scss';

// console.log('Hello, Peep');

// const nameUser = prompt(' Укажите ваше Имя')
// const surnameUser = prompt(' Укажите вашу Фамилию')
// const ageUser = prompt(' Укажите ваш Возраст')

// alert(`Всё верно? ${nameUser} ${surnameUser} ${ageUser}`)
interface myObj {
  [key: string]: { Value: number; Previous: number; Valute: string };
}

// interface Element {
//   [key: string]: { resl: any; cerv: any; select: any };
// }
// console.log ('я этого тайпскрипта рот ебал!!!!')
const rates: myObj = {};
const elementUSD = document.querySelector('[data-value="USD"]');

const elementEUR = document.querySelector('[data-value="EUR"]');

const elementGBP = document.querySelector('[data-value="GBP"]');
getCurrent();

const cerv: HTMLInputElement = document.querySelector(
  '#cerv'
) as HTMLInputElement;
const resl: HTMLInputElement = document.querySelector(
  '#resl'
) as HTMLInputElement;
// const select: any = document.querySelector("#select");
const optionSel = document.querySelector('#select1') as HTMLSelectElement;

// if (!select || !resl || !cerv)
//     throw new Error("Не найден элемент, соси хуй!");

async function getCurrent() {
  if (!elementEUR || !elementGBP || !elementUSD)
    throw new Error('Не найден элемент, соси хуй!');
  const responsive = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
  const data = await responsive.json();
  const result = await data;
  // console.log(result)

  // console.log(result.Valute.USD.Value)

  // console.log(result.Valute.EUR.Value)

  // console.log(result.Valute.GBP.Value)

  rates.USD = result.Valute.USD;

  rates.EUR = result.Valute.EUR;

  rates.GBP = result.Valute.GBP;

  console.log(rates);

  elementUSD.textContent = rates.USD.Value.toFixed(2);

  elementEUR.textContent = rates.EUR.Value.toFixed(2);

  elementGBP.textContent = rates.GBP.Value.toFixed(2);

  if (rates.USD.Value > rates.USD.Previous) {
    elementUSD.classList.add('top');
  } else {
    elementUSD.classList.add('bottom');
  }
}

cerv.oninput = function () {
  if (isNaN(Number(cerv.value)) || !optionSel?.value) return;
  resl.value = (Number(cerv.value) / rates[optionSel.value].Value).toFixed(2);
};

// resl.oninput = function(){
//   console.log('changed');
// }

// console.log(
//   "Николай помогите мне, я мягко говоря не совсем понимаю этот js со статической типизацией он меня даже больше бесит чем помогает работать"
// );

// ЭТО ЗМЕЙКА
// Следуйте дальше и увидите больше!!!

// const canvas: HTMLCanvasElement | null = document.getElementById(
//   'game'
// ) as HTMLCanvasElement;
// const ctx = canvas.getContext('2d');

// const ground = new Image();
// ground.src = './ground.png';

// const foodImg = new Image();
// foodImg.src = './food.png';

// const box = 32;

// let score = 0;

// let food = {
//   x: Math.floor(Math.random() * 17 + 1) * box,
//   y: Math.floor(Math.random() * 15 + 2) * box
// };

// const snake: { x: number; y: number }[] = [];
// snake[0] = {
//   x: 9 * box,
//   y: 10 * box
// };

// document.addEventListener('keydown', direction);

// let dir: string;

// function direction(event: KeyboardEvent) {
//   if (event.keyCode == 65 && dir != 'right') dir = 'left';
//   else if (event.keyCode == 87 && dir != 'down') dir = 'up';
//   else if (event.keyCode == 68 && dir != 'left') dir = 'right';
//   else if (event.keyCode == 83 && dir != 'up') dir = 'down';
// }

// setInterval(snakeGame, 100);

// function snakeGame() {
//   if (!ctx) return;
//   ctx.drawImage(ground, 0, 0);

//   ctx.drawImage(foodImg, food.x, food.y);

//   for (let i = 0; i < snake.length; i++) {
//     ctx.fillStyle = i == 0 ? 'red' : 'brown';
//     ctx.fillRect(snake[i].x, snake[i].y, box, box);
//   }
//   ctx.fillStyle = 'white';
//   ctx.font = '50px Arial';
//   ctx.fillText(score.toString(), box * 2.5, box * 1.7);

//   let snakeX = snake[0].x;
//   let snakeY = snake[0].y;

//   if (snakeX == food.x && snakeY == food.y) {
//     score++;
//     food = {
//       x: Math.floor(Math.random() * 17 + 1) * box,
//       y: Math.floor(Math.random() * 15 + 2) * box

//       // console.log('по идее должна расти')
//     };
//   } else {
//     snake.pop();
//   }

//   if (dir == 'left') snakeX -= box;
//   if (dir == 'right') snakeX += box;
//   if (dir == 'up') snakeY -= box;
//   if (dir == 'down') snakeY += box;

//   const newHead = {
//     x: snakeX,
//     y: snakeY
//   };

//   snake.unshift(newHead);
// }

// snakeGame();

// далее идет домашка по javascript ifelse
// и так практика 1

// let age = parseInt(prompt('Сколько вам лет','') as string)

// if (age >= 14 && age <= 90) {
//   age = alert('У вас осталось достаточно времени!')
// } else {
//   age = alert('Вы на палке о двух концах!')
// }

// практика 2 переменные

// let name = 'John'
// let admin = name
// alert(admin)

// практика 3 переменные?

// let earth = 'Earth'
// let userName = ;

// практика 4 переменные!!! рудимент
// alert('Давайте вычислим ваш возраст')

// let yearsOld = parseInt(prompt('В каком году вы родились? ', '2011') as string) as number
// let monthOld = prompt('В каком месяце вы родились? ', '9') рудимент
// let dayOld = prompt('В какой день вы родились? ', '11') рудимент

// let birthday = [dayOld, monthOld, yearsOld] рудимент

// let realYearsOld = ( 2024 - yearsOld )
// console.log(realYearsOld)

// alert(realYearsOld)

// и так ifelse
// введите число 1 || -1 || 0

// const userInput: number | null = parseFloat(
//   prompt("Введите число ", "1 / -1/ 0 ") as string
// ) as number;

// if (userInput) {
//   const userNumber: number = userInput;
//   if (!isNaN(userNumber)) {
//     correctNumber(userNumber);
//   } else {
//     console.log("Ошибка: введите число");
//   }
// }  else {
//   alert("Число отсутствует и/или равно нулю");
// }

// function correctNumber(userNumber: number) {
//   if (userNumber > 0) {
//     alert("Число положительное");
//   } else if (userNumber < 0) {
//     alert("Число отрицательное");
//   } else (userNumber = 0); {
//     alert("Число отсутстувует и/или равно нулю");
//   }
// }

// ifelse 2

// const userYearsOld: number | null = parseFloat(prompt('Введите ваш возраст','85')as string ) as number

// if (userYearsOld > 120) {
//  alert('Невероятно, а как вы живы?')
// } else if (userYearsOld < 1) {
//   alert('Удивительно, как не рожденный может рационально думать и отвечать на вопросы?')
// } else {
//   alert('Замечательно!')
// }

// ifelse 3

// function calculater(number: number): number {
//   if (userInput < 0) {
//     return -number;
//   } else {
//     return number;
//   }
// }

// const userInput: number = parseFloat(prompt('Введите число','5')as string )as number

// if (userInput) {
//   const number = userInput;

//   if (!isNaN(number)) {
//     const valueUserNumber: number =  calculater(number)
//     alert(`Модуль числа ${number} равен ${valueUserNumber}`)
//   } else {
//     console.log('Введите корректное число')
//   }
// } else {
//   console.log('Ну серьёзно не бесите введите число!')
// }

// ifelse 4

// function validateTime( hours: number, minutes: number, second: number ): boolean {
//   if(hours<0 || hours>23 || minutes<0 || minutes>59 || second<0 || second>59) {
//     return false;
//   } else {
//     return true;
//   }
// }

// function userGlobalTime() {
//   const hours = parseInt(prompt('Введите часы (0-23)' || '0', '10')as string)as number;
//   const minutes = parseInt(prompt('Введите минуты (0-59) ','')as string)as number;
//   const second = parseInt(prompt('Введите секунды (0-59) ','')as string)as number
//   if(validateTime(hours, minutes, second)){
//     console.log(`Введенно корректное время ${hours}:${minutes}:${second}`);
//   } else {
//     console.log('Введенно некорректное время')
//   }
// }

// userGlobalTime();

// ifelse 5

// факториал введенного пользователем числа

// const factorialUser = parseInt(prompt('Введите число','')as string)as number
// let factorial = 1;
// let i: number = 1
// while (i <= factorialUser) {
//   factorial = factorial * i;
//   ++i
// }

// console.log(`Факториал числа ${factorialUser} равен ${factorial}`)

// while 1 #

// const userCechteg = parseFloat(prompt('Введите число','')as string)as number
// let i = 0
// while (i < userCechteg) {
//   console.log('#')
//   ++i
// }

// while 2 012345

// const userNumber = parseFloat(prompt('Введите число','')as string)as number
// let i = 0
// while ( i <= userNumber) {
//   let valueNull = isNaN(i) ? 0 : i++
//   console.log(valueNull)
// }

//  switch времена года

// let month: string = prompt("Введите месяц", "") as string;

// switch (month) {
//   case 'January':
//     console.log("Сейчас Январь");
//     break;
//   case 'February':
//     console.log("Сейчас Февраль");
//     break;
//   case 'March':
//     console.log("Сейчас Март");
//     break;
//   case 'April':
//     console.log("Сейчас Апрель");
//     break;
//   case 'May':
//     console.log("Сейчас Май");
//     break;
//   case 'June':
//     console.log("Сейчас Июнь");
//     break;
//   case 'July':
//     console.log("Сейчас Июль");
//     break;
//   case 'August':
//     console.log("Сейчас Август");
//     break;
//   case 'September':
//     console.log("Сейчас Сентябрь");
//     break;
//   case 'October':
//     console.log("Сейчас Октябрь");
//     break;
//   case 'November':
//     console.log("Сейчас Ноябрь");
//     break;
//   case 'December':
//     console.log("Сейчас Декабрь");
//     break;
// }

// switch calculater

// let num1 = prompt("Введите первое число", "") as unknown as number;
// let num2 = prompt("Введите второе число", "") as unknown as number;
// let operation = prompt("Введите операцию", "") as string;

// switch (operation) {
//   case "+":
//     console.log(+num1 + +num2);
//     break;
//   case "-":
//     console.log(+num1 - +num2);
//     break;
//   case "*":
//     console.log(+num1 * +num2);
//     break;
//   case "/":
//     console.log(+num1 / +num2);
//     break;
//   case "**":
//     console.log((+num1) ** +num2);
//     break;
//   case "%":
//     console.log(+num1 % +num2);
//     break;
//   default:
// }

// тернарный оператор(плюсом сделал через ifelse) <>

// let num1: number = parseInt(prompt('Введите первое число','55')as string )as number
// let num2: number = parseInt(prompt('Введите второе число','65')as string )as number

// num1 > num2 ? console.log(num1) : console.log(num2)

// if (num2 > num1) {
//   console.log(num2)
// } else {
//   console.log(num1)
// }

// тернарный оператор остаток от деления или же число кратное 5

// let userNumber: number = parseInt(prompt('Введите число:')as string)as number

// userNumber % 5 === 0 ? console.log('Число кратно 5') : console.log('Число не кратно 5')

// тернарный оператор "землянин, иношапатянин"

// let urPlaceOnGalaxy = prompt('На какой планете вы живете?: ')as string

// urPlaceOnGalaxy.toLowerCase() === 'земля' ? console.log('Приветствую Землянин!') : console.log('Приветствую Иношапатянин');

// координаты х у по четвертям

// const x = parseFloat(prompt('Введите координату x: ')as string)
// const y = parseFloat(prompt('Введите координату y: ')as string)

//     if (x === 0 && y === 0) {
//       console.log('Точка находится в начале координат');
//     } else if (x === 0) {
//       console.log('Точка находится на оси Y');
//     } else if (y === 0) {
//       console.log('Точка находится на оси X');
//     } else if (x > 0 && y > 0) {
//       console.log('Точка находится в первой четверти');
//     } else if (x < 0 && y > 0) {
//       console.log('Точка находится во второй четверти');
//     } else if (x < 0 && y < 0) {
//       console.log('Точка находится в третьей четверти');
//     } else {
//       console.log('Точка находится в четвертой четверти');
//     }

// while 1

// let value = parseInt(prompt('Введите число повторений ')as string)as number
// let i = 0

// while(i<value) {
//   console.log('#')
//   ++i
// }

// while 2

// let valueUser = parseInt(prompt('Введите число ')as string)as number
// let i = valueUser

// while(0 <= i) {
//   console.log(i)
//   --i
// }

//  while 3

// let number = parseInt(prompt('Введите число ')as string)as number
// let upper = parseInt(prompt('Введите степень ')as string)as number

// while(number ** upper) {
//   const numberUpper = number ** upper
//   alert(`Число ${number} в ${upper} степени равно ${numberUpper}`)
//   break
// }

// while 4 вот тут пришлось жопой попотеть

// function findSomeThing(a:number, b:number): number[] {
//   const massive: number[] = [];

//   let smaal = Math.min(a, b);

//   let i = 1;

//   while (i <= smaal) {
//     if (a % i === 0 && b % i === 0) {
//       massive.push(i);
//     }
//      ++i
//   }

//   return massive;

// }

//   let num1 = parseInt(prompt("Введите число ") as string) as number;
//   let num2 = parseInt(prompt("Введите число ") as string) as number;

// const finallyFind = findSomeThing(num1, num2);

// console.log(`Общие делители чисел ${num1} и ${num2}: ${finallyFind.join(', ')}`);

// while 5

// const userFactorial =  parseInt(prompt("Введите число факториала ") as string) as number;
// let factorial = 1;
// let i = 1;

// while(i <= userFactorial) {
//    factorial = factorial * i
//    i++
//   }

//   console.log(`Сумма факториала из ${userFactorial} равна: ${factorial}`)

// do while 1

// let allin: number = 2 + (2 * 2)

// do {
//   allin = parseInt(prompt(`Сколько равняется выражение: '2 + 2 * 2'? Введите ответ: 8, 4 или 6`, '')as string)as number
// } while (allin !== 6);

// console.log('Вы правы');

// do while 2

// let oneTauzend: number = 1000
// let delenie: number = oneTauzend
// let count = 0;

// do {
//   delenie = (delenie / 2)
//   let i = delenie
//   count++
//   console.log(i)
// } while(delenie >= 50);

// console.log(`Полученное число меньше 50: ${delenie}`);
// console.log(`Количество делений: ${count}`);

// function 1

// let num1 = 10
// let num2 = 20

// type numstr = number | string

// function sum( num1:numstr, num2:numstr ):numstr {

//   num1 =  10
//   num2 = 20
//   if ( num1 > num2 ) {
//       return num1
//       console.log(num1)
//     } else {
//         return num2
//         console.log(num2)
//       }                                                         это zombiecod
//       return num1 > num2? num1 : num2
//     }

//     console.log(function sum(num1:numstr , num2:numstr):numstr)

// let num1 = 10;
// let num2 = 20;
// type numstr = number | string;
// function sum(num1: numstr, num2: numstr): numstr {
//   if (typeof num1 === 'string' || typeof num2 === 'string') {
//     return 'Ошибка: оба аргумента должны быть числами';
//   }

//   if (num1 > num2) {
//     console.log(num1);
//     return num1;
//   } else {
//     // console.log(num2);
//     return num2;
//   }
// }

// console.log(sum(num1, num2));

// рекурсивные функции 1234

// function getReversedNumber(n: number): any {
//   if()
// }

// цикл for 1

// Вывести все числа от 1 до 100, которые кратные указанному
// пользователем числу.

// let i = 0;
// const numberMassive: number[] = []
// const userNumber = parseInt(prompt('Введите число от 1 до 100 ','20')as string )as number

// for(i = 1; i <= 100; i++ ) {
//   if(i % userNumber === 0) {
//      numberMassive.push(i)
//   } else {
//     console.warn('Тут ошибка Сеньор Разработчик')
//   }
// }

// numberMassive.forEach((element) => {
// console.log(element)
// //                                   смотрел в чем была ошибка
// //                           оказывается я написал вместо массива шаг и переменную i
// })

// console.log(`Числа кратные числу ${userNumber} это ${numberMassive}`)

// цикл for 2

// Вывести каждый 4-й элемент из указанного пользователем
// диапазона. Пользователь указывает минимальное и максимальное
// значения диапазона.

// const userInputMax = parseInt(prompt('Введите максимальный диапазон','')as string)as number
// const userInputMin = parseInt(prompt('Введите минимальный диапазон','')as string)as number

// function getNumbers(userInputMin: number, userInputMax: number) {
//   for (let i = userInputMin; i <= userInputMax; i++) {

//   const numbs: number[] = [] as const

//   if (userInputMin % 4 == 0 && userInputMax % 4 == 0) {
//     if (i % 4 == 0) {
//       numbs.push(i)
//       console.log(numbs[0]);
//     }
//   } else {
//     console.log('Введите корректный диапазон');
//     break
//   }
// }
// }

// getNumbers(userInputMin, userInputMax)

//       /\
//      /  \
//     /    \
//    /      \
//   /        \
//  /          \
// /!!доделано!!\

// цикл for 3

// Запросить число и проверить, простое ли оно. Простое
// число делится без остатка только на себя и на единицу.

// const userInputNumber = parseInt(
//   prompt('Введите число ', '') as string
// ) as number;

// const i = 0;

// function saveThisSheet(i: number) {
//   for (i = 0; i < userInputNumber; i++) {

//     const result = userInputNumber % i <= 1;

//     i = 2

//     if (i >= 2) {
//       if (userInputNumber % i == 0) {
//         console.log('Число составное');
//         break;
//       } else {
//         console.log('Число простое');
//         break
//       }
//     } else {
//       console.log(result);
//     }
//     console.log(i);
//     break
//   }
// }

// if (userInputNumber % 1 === 0) saveThisSheet(i);

//       /\
//      /  \
//     /    \
//    /      \
//   /        \
//  /          \
// /!!доделано!!\

// const saveUserAgeOld = parseInt(
//   prompt('Введите число ', '') as string
// ) as number;

// function setYourAge(saveUserAgeOld: number) {
//   const age = saveUserAgeOld;

//   if(age >= 14 && age <= 90) {
//     console.log('У вас осталось достаточно времени!')
//   } else if (age < 14 || age > 90) {
//     console.log('Вы на палке о двух концах!')
//   }

//   console.log(age);
// }

// setYourAge(saveUserAgeOld);

// for (let i = 0; i <= 10; i++) {

//   if (i % 2 === 0 && i >= 2) {
//     console.log(i);
//   } else {
//     continue
//   }

// }

// введение в js 4 задания без нумерования все разом

// const i = parseInt(prompt('Введите число ')as string)as number
// const a = parseInt(prompt('Введите число ')as string)as number

// i > a ? console.log(i) : console.log(a)

// if(i > a) {
//   console.log(i)
// } else {
//   console.log(a)
// }

// кстати не совсем понял зачем делать функцию

// но раз есть условие то почему бы и нет
// const i = parseInt(prompt('Введите число ')as string)as number
// const a = parseInt(prompt('Введите степень ')as string)as number

// while(i) {
//   const result = i ** a
//   console.log(result)
//   break
// }

// const num1 = prompt("Введите первое число", "") as unknown as number;
// const num2 = prompt("Введите второе число", "") as unknown as number;
// const operation = prompt("Введите операцию", "") as string;

// switch (operation) {
//   case "+":
//     console.log(+num1 + +num2);
//     break;
//   case "-":
//     console.log(+num1 - +num2);
//     break;
//   case "*":
//     console.log(+num1 * +num2);
//     break;
//   case "/":
//     console.log(+num1 / +num2);
//     break;
//   case "**":
//     console.log((+num1) ** +num2);
//     break;
//   case "%":
//     console.log(+num1 % +num2);
//     break;
//   default:
// }

// если нужно с 2 до 9 вывод таблицы то надо перед условием ifelse переопределить i = 2 а в условии записать как i < 10 то есть без равно

// const userNum = prompt("Введите число", "") as unknown as number;

// function table(userNum: number) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${userNum} * ${i} = ${userNum * i}`);
//   }
// }

// table(userNum)

// const maxUserNumbers = parseInt(
//   prompt('Введите максимальный диапазон', '') as string
// ) as number;
// const minUserNumbers = parseInt(
//   prompt('Введите минимальный диапазон', '') as string
// ) as number;
// const count = parseInt(
//   prompt('Введите тип чисел', '') as string
// ) as number;

// // function getTrueOrFalseNumbers(minUserNumbers: number, maxUserNumbers: number) {
// //   for (let i = minUserNumbers; i <= maxUserNumbers; i++) {
// //     const numbers: boolean | number[] = [] as const;

// //     if (i % 2 === 0) {
// //       if (i % 2 === 0) {
// //         numbers.push(i);
// //         console.log(numbers[0]);
// //       }
// //     } else {
// //       continue;
// //     }
// //   }
// // }

// // getTrueOrFalseNumbers(minUserNumbers, maxUserNumbers);

// // пока не додумался как решить эту задачку, думаю пора отдохнуть чуть позже доделаю

// Написать функцию, которая выводит все четные или не-
// четные числа, в указанном пользователем диапазоне. Какие
// числа выводить, определяется третьим параметром типа
// boolean (true – четные, false – нечетные).

//       /\
//      /  \
//     /    \
//    /      \
//   /        \
//  /          \
// /!!доделано!!\

// let i = 0;

// function getTrueOrFalseNumbers(minUserNumbers: number, maxUserNumbers: number) {
//   for (i = minUserNumbers; i <= maxUserNumbers; i++) {
//     const numbs: number[] = [] as const;

//     if (minUserNumbers % 2 == 0 && maxUserNumbers % 2 == 0 && count === 1) {
//       if (i % 2 == 0) {
//         numbs.push(i);
//         console.log(numbs[0]);
//       }
//     }

//     if (minUserNumbers % 1 == 0 && maxUserNumbers % 1 == 0 && count === 0) {
//       if (i % 1 == 0 && i % 2 != 0) {
//         numbs.push(i);
//         console.log(numbs[0]);
//       }
//     } else {
//       continue
//     }
//   }
// }

// console.log(getTrueOrFalseNumbers(minUserNumbers, maxUserNumbers));

// я не совсем понимаю пока что как мне сравнивать между собой 5 чисел но попробуем
// надо запросить 5 чисел и сравнить их значения затем вывести значение большего из них

// const num1 = parseInt(prompt('Введите первое число', '')as string)as number;
// const num2 = parseInt(prompt('Введите второе число', '')as string)as number;
// const num3 = parseInt(prompt('Введите третье число', '')as string)as number;
// const num4 = parseInt(prompt('Введите четвертое число', '')as string)as number;
// const num5 = parseInt(prompt('Введите пятое число', '')as string)as number;

//   function comparison(num1: number, num2: number, num3: number, num4: number, num5: number) {
//     if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
//       console.log(num1);
//     } else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
//       console.log(num2);
//     } else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
//       console.log(num3)
//     } else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
//       console.log(num4);
//     } else {
//       console.log(num5);
//     }
//   }

//   comparison(num1, num2, num3, num4, num5);

// ну вот и разобрался

// const num1 = parseInt(prompt('Введите первое число', '')as string)as number;
// const num2 = parseInt(prompt('Введите второе число', '')as string)as number;
// const num3 = parseInt(prompt('Введите третье число', '')as string)as number;
// const num4 = parseInt(prompt('Введите четвертое число', '')as string)as number;
// const num5 = parseInt(prompt('Введите пятое число', '')as string)as number;

// function addition(num1:number, num2:number, num3:number, num4:number, num5:number) {
//   return num1 + num2 + num3 + num4 + num5
// }

// console.log(addition(num1, num2, num3, num4, num5));

// ну это совсем простенький счетчик времени и даты
// проверку на корректность данный я доделаю после
// сейчас хочу добить четные и нечетные числа

// function validateTime( hours: number, minutes: number, second: number ): boolean {
//   if(hours<0 || hours>23 || minutes<0 || minutes>59 || second<0 || second>59) {
//     return false;
//   } else {
//     return true;
//   }
// }

// function userGlobalTime() {
//   const hours = parseInt(prompt('Введите часы (0-23)' || '0', '10')as string)as number;
//   const minutes = parseInt(prompt('Введите минуты (0-59) ','')as string)as number;
//   const second = parseInt(prompt('Введите секунды (0-59) ','')as string)as number
//   if(validateTime(hours, minutes, second)){
//     console.log(`Введено корректное время ${hours}:${minutes}:${second}`);
//   } else {
//     console.log('Введено некорректное время')
//   }
// }

// userGlobalTime();

// function validateDate(day: number, month: number, year: number): boolean {
//   if(day<=0 || day>31 || month<=0 || month>12 || year<1902 || year>2024) {
//     return false;
//   } else {
//     return true;
//   }
// }

// function userGlobalDate() {
//   let day = parseInt(prompt('Введите день (1-31) ','')as string)as number;
//   const month = parseInt(prompt('Введите месяц (1-12) ','')as string)as number;
//   const year = parseInt(prompt('Введите год (1902-2024) ','')as string)as number;
//   if (validateDate(day, month, year)) {
//     day++
//     console.log(`Ваше время днем в будущем ${day}.${month}.${year}`);
//     day--
//     day--
//     console.log(`Ваше время днем в прошлом ${day}.${month}.${year}`);
//   } else {
//     console.log('Введено некорректное время')
//   }

// }

// userGlobalDate()

// Написать функцию, которая реализует работу оператора %.
// Функция принимает 2 параметра и возвращает остаток от
// деления первого параметра на второй. В функции использовать только + - * /, оператор % не использовать.

// осталось доделать только это задание

// все что снизу это следующее что на готовке

// Во всех заданиях обязательно использовать рекурсию.
// 1
// Написать функцию, которая вычисляет факториал заданного числа.
// 2
// Написать функцию, которая выводит все числа из заданного
// пользователем диапазона в прямом порядке. И еще одну
// функцию – для вывода в обратном порядке.
// 3
// Написать функцию, которая выводит переданное ей число
// задом наперед.
// Например: число 1234 вывести как 4321
// 4
// Написать функцию, которая считает сумму цифр числа.
// Например: число 1357, сумма 1 + 3 + 5 + 7 = 16
// 5
// Написать функцию, которая принимает число и выводит
// соответствующее количество вложенных пар круглых скобок.
// Например: число 4 – (((()))).

// 1

// const userFactorial = parseInt(prompt('Введите число ')as string)as number
// const subsume = 1
// const factorial = 1

// function factorialCalc(factorial: number, subsume: number) {
//   factorial = factorial * subsume
//   if (subsume < userFactorial) {
//     subsume++
//     return factorialCalc(factorial, subsume)
//   }
//   console.log(factorial)
// }

// factorialCalc(factorial, subsume)

// const userInput = parseInt(prompt('Введите число ')as string)as number
// let trueFactorial = 1
// let i = 0

// for (i = 1 ; i <= userInput; i++) {
//   trueFactorial = trueFactorial * i

// }

// console.log(trueFactorial)

// if (userInput > 0) {
//   while (i < userInput) {
//     console.log('(')
//     ++i
//   }
// } else if (userInput < 0) {
//   while (i > userInput) {
//     console.log(')')
//   }
// }

// obj

// class Point {
//   constructor(
//     public x: number,
//     public y: number
//   ) {}
// }

// class Rectangle {
//   constructor(
//     public top_left: Point,
//     public bottom_right: Point
//   ) {}

//   getInfo(): void {
//     console.log(
//       'Coordinates of the rectangle: (' +
//         (this.top_left.x + ', ' + this.bottom_right.y) +
//         ')'
//     );
//     console.log('Height of rectangle: (' + this.bottom_right.y + ')');
//     console.log('Width of rectangle: (' + this.top_left.x + ')');
//   }

//   getS(): number {
//     return Math.abs(this.bottom_right.y * this.top_left.x);
//   }

//   getP(): number {
//     return Math.abs(this.bottom_right.y * 2 + this.top_left.x * 2);
//   }

  // getWidth():number {
  //  return  Math.abs(this.bottom_right.x - this.top_left.x)
  // }

  // это ненужный код который я оставил лишь для того что бы показать что я не балбес который ничего не делает
  // но суть в том что данный блок кода никак не меняет итоговый результат что значит что либо я балбес который ничего не умеет либо то что этот код sheet

  // getHeigth():number {
  //  return  Math.abs(this.bottom_right.y - this.top_left.y)
  // }
// }

// const userChange = prompt('уменьшить или увеличить? ') as string;
// const userGrafics = prompt('ширина или высота? ') as string;
// const userNumber = parseInt(
//   prompt('введите величину изменений') as string
// ) as number;

// function getMassiveOfNumbers(
//   userChange: string,
//   userGrafics: string,
//   userNumber: number,
//   rectangle: Rectangle
// ): number {
//   if (userChange == 'уменьшить') {
//     if (userGrafics == 'ширина') {
//       return Math.abs(rectangle.top_left.x - userNumber);
//     } else if (userGrafics == 'высота') {
//       return Math.abs(rectangle.bottom_right.y - userNumber);
//     }
//     // else if (userGrafics == 'ширина и высота') {
//     // return Math.abs((rectangle.bottom_right.y - userNumber) || (rectangle.top_left.x - userNumber))
//     // }
//   } else if (userChange == 'увеличить') {
//     if (userGrafics == 'высота') {
//       return Math.abs(rectangle.bottom_right.y + userNumber);
//     } else if (userGrafics == 'ширина') {
//       return Math.abs(rectangle.top_left.x + userNumber);
//     }
//     // else if (userGrafics == 'ширина и высота') {
//     // return Math.abs((rectangle.bottom_right.y + userNumber) || (rectangle.top_left.x + userNumber))
//     // }
//   }
//   return 1;
// }

// const topLeftPoint = new Point(5, 0);
// const bottomRightPoint = new Point(0, 15);
// const rectangle = new Rectangle(topLeftPoint, bottomRightPoint);

// console.log(rectangle.getS());

// console.log(rectangle.getP());

// console.log(
//   getMassiveOfNumbers(userChange, userGrafics, userNumber, rectangle)
// );

// // console.log(rectangle.getHeigth())
// // console.log(rectangle.getWidth())

// rectangle.getInfo();


// obj 

// interface Rectangle {
//   top_left: {x:number, y:number}
//   bottom_right: {x:number, y:number}
// }

// const rectangle: Rectangle = {
//   top_left: {
//     x: 5,
//     y: 0
//   },
//   bottom_right: {
//     x: 0,
//     y: 15
//   }
// }

// // tl(x1,y1) br(x2,y2)

// // Функция принимает объект-прямоугольник и выводит
// // информацию о нем (где какая точка расположена).
// function getInfo(rect:Rectangle) {
//    return "top left: " + rect.top_left.x + ", " + "bottom right: " +rect.bottom_right.y
// }

// console.log("Coordinates points of rectangle (" + getInfo(rectangle) + ")")

// // Функция принимает объект-прямоугольник и возвращает
// // его ширину.
// function getWidth(rect:Rectangle):number {
//   return  Math.abs(rect.top_left.x - rect.bottom_right.x)
// }

// console.log("Width of rectangle: (" + getWidth(rectangle) + ")");

// // Функция принимает объект-прямоугольник и возвращает
// // его высоту.
// function getHeigth(rect:Rectangle):number {
//   return  Math.abs(rect.bottom_right.y - rect.top_left.y)
// }

// console.log("Height of rectangle: (" + getHeigth(rectangle) + ")");

// // Функция принимает объект-прямоугольник и возвращает
// // его площадь.
// function getSquareOfRectangle(rect:Rectangle) {
//   return Math.abs((rect.bottom_right.y - rect.top_left.y) * (rect.bottom_right.x - rect.top_left.x))
// }

// console.log("Square of rectangle: (" + getSquareOfRectangle(rectangle) + ")")
// // Функция принимает объект-прямоугольник и возвращает
// // его периметр.
// function getPerimeterOfRectangle(rect:Rectangle) {
//   return Math.abs(((rect.bottom_right.y - rect.top_left.y) - (rect.bottom_right.x - rect.top_left.x)) * 2)
// }
// console.log("Perimeter of rectangle : (" + getPerimeterOfRectangle(rectangle) + ")")

// // Функция изменения ширины прямоугольника. Она прини-
// // мает объект-прямоугольник и на сколько единиц изменить
// // ширину.
// function getChangeWidth(rect:Rectangle, addWidth:number) {
//   return rect.bottom_right.x += addWidth
// }

// console.log("Changed width of rectangle : (" + getChangeWidth(rectangle, 5) + ")")

// // Функция изменения высоты прямоугольника. Она прини-
// // мает объект-прямоугольник и на сколько единиц изменить
// // высоту.
// function getChangeHeigth(rect:Rectangle, addHeight:number) {
//   return rect.bottom_right.y += addHeight
// }

// console.log("Changed heigth of rectangle : (" + getChangeHeigth(rectangle, 5) + ")")

// // Функция изменения ширины и высоты прямоугольника.
// // Она принимает объект-прямоугольник и два значения –
// // для изменения ширины и высоты.
// function getChangeHeigthAndWidth(rect:Rectangle, change:number) {
//   return (rect.bottom_right.y += change) + ", " + (rect.bottom_right.x += change)
// }

// console.log("Changed heigth and width of rectangle : ("+ getChangeHeigthAndWidth(rectangle, 5) + ")")

// // Функция смещения прямоугольника по оси X. Она при-
// // нимает объект-прямоугольник и на сколько единиц его
// // сдвинуть.
// function moveRectangleOnXAxis(rect:Rectangle, change:number) {
//   rect.bottom_right.x += change, rect.top_left.x += change
// }

// moveRectangleOnXAxis(rectangle, 3)

// // Функция смещения прямоугольника по оси Y. Она при-
// // нимает объект-прямоугольник и на сколько единиц его
// // сдвинуть.
// function moveRectangleOnYAxis(rect:Rectangle, change:number) {
//   rect.bottom_right.y += change, rect.top_left.y += change
// }

// moveRectangleOnYAxis(rectangle, 1)

// // Функция смещения прямоугольника и по оси X и по
// // оси Y. Она принимает объект-прямоугольник и два значе-
// // ния: сдвиг по оси X и сдвиг по оси Y.
// function moveRectangleOnTwoAxis(rect:Rectangle, change:number) {
//   rect.bottom_right.x += change, rect.top_left.x += change
//   rect.bottom_right.y += change, rect.top_left.y += change
// }

// moveRectangleOnTwoAxis(rectangle, 5)

// // Функция для проверки, находится ли точка внутри пря-
// // моугольника. Она принимает объект-прямоугольник и
// // координаты точки.
// function checkingForValidityPoints(rect:Rectangle) {
//  return rect.top_left.x, rect.bottom_right.y
// }

// checkingForValidityPoints(rectangle)

// // в последнем не совсем понял принцип но если что спрошу в четверг если не забуду 
// // а так вроде все верно ну или хотя бы приблизительно :)

// // массивы задание 1

// // Создать массив из 10 случайных чисел и написать несколько
// // функций для работы с ним.
// const massiveOfNumbers: number[] = [1,3,8,2,0,7,5,9,4,6]

// // Функция принимает массив и выводит его на экран.
// function getMassive(massiveOfNumbers:number[]): number[] {
//   return massiveOfNumbers
// }
// console.log(getMassive(massiveOfNumbers))

// // Функция принимает массив и выводит только четные
// // элементы.
// function getEvenNumbers(massiveOfNumbers:number[]):number[] {
//   return massiveOfNumbers.filter(number => number % 2 === 0 || number === 0)
// }
// // с нулём при выводе массива разберемся позже

// console.log(getEvenNumbers(massiveOfNumbers))

// // Функция принимает массив и возвращает сумму всех
// // элементов массива.
// function getSumOfNumbers(massiveOfNumbers:number[]) {
//   return massiveOfNumbers.reduce((b, a) => b + a)
// }

// console.log(getSumOfNumbers(massiveOfNumbers))

// // Функция принимает массив и возвращает его максималь-
// // ный элемент.
// function getMaxNumber(massiveOfNumbers:number[]) {
//   return Math.max.apply(null, massiveOfNumbers)
// }

// console.log(getMaxNumber(massiveOfNumbers))

// // Функция добавления нового элемента в массив по ука-
// // занному индексу.
// function insertElementInMassive(massiveOfNumbers:number[]) {
//   massiveOfNumbers.splice(5, 0, 84)
//   return massiveOfNumbers
// }

// console.log(insertElementInMassive(massiveOfNumbers))

// // Функция удаления элемента из массива по указанному
// // индексу.

// function deleteElementInMassive(massiveOfNumbers:number[]) {
//   delete massiveOfNumbers[5]
//   return massiveOfNumbers
// }

// console.log(deleteElementInMassive(massiveOfNumbers))
// // ну вроде работает :)

// // массивы задание 2

// const arr2:number[] = [0, 5, 36, 12, 3]

// // Функция принимает 2 массива и возвращает новый мас-
// // сив, в котором собраны все элементы из двух массивов
// // без повторений.
// function getMassives(arr2:number[],massiveOfNumbers:number[]) {
//   return massiveOfNumbers.filter(element => arr2.includes(element))
// }

// console.log(getMassives(arr2, massiveOfNumbers))

// Функция принимает 2 массива и возвращает новый массив,
// в котором собраны общие элементы (то есть элементы,
// которые встречаются и в первом и во втором массивах)
// без повторений.
// function getSecondMassives(arr2:number[],massiveOfNumbers:number[]) {
//   return arr2.filter(element => massiveOfNumbers.includes(element))
// }

// console.log(getSecondMassives(arr2,massiveOfNumbers))

// Написать функцию, которая принимает 2 строки и срав-
// нивает их длину. Функция возвращает 1, если в первой
// строке больше символов, чем во второй; -1 – если во вто-
// рой больше символов, чем в первой; или 0 – если строки
// одинаковой длины.

// * работает

// function comparisonStrings(str1:string, str2:string) {
//   let result:number= 0
//   if(str1.length > str2.length) {
//     return console.log(result+=1)
//   } else if(str1.length<str2.length) {
//     return console.log(result-=1)
//   } else {
//     return console.log(result) 
//   }
// }

// comparisonStrings('adadadaf', 'adafa')

// 2
// Написать функцию, которая переводит в верхний регистр
// первый символ переданной строки.

// function getCapitalize(str:string):string {
//  return str.charAt(0).toUpperCase() + str.slice(1)
// }

// const inputStr:string = 'hello' 
// const output= getCapitalize(inputStr)

// console.log(output)

// Написать функцию, которая считает количество гласных
// букв в переданной строке.

// * работает

// function countVowels(str: string): number {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let count = 0;
  
//   for (let char of str.toLowerCase()) {
//       if (vowels.includes(char)) {
//           count++;
//       }
//   }
  
//   return count;
// }

// const inputStrin: string = "Hello World";
// const vowelsCount: number = countVowels(inputStrin);
// console.log(vowelsCount);

// ! ОН НЕ РАБОТАЕТ,
//? пока что
// * уже работает

// Написать функцию для проверки спама в переданной
// строке. Функция возвращает true, если строка содержит
// спам. Спамом считать следующие слова: 100% бесплатно,
// увеличение продаж, только сегодня, не удаляйте, ххх.
// Функция должна быть нечувствительна к регистру.

// interface Spam {
//   name: string;
//   value: boolean;
// }

// const arrOfWords: Spam[] = [
//   { name: '100% бесплатно', value: true },
//   { name: 'увеличение продаж', value: true },
//   { name: 'только сегодня', value: true },
//   { name: 'не удаляйте', value: true },
//   { name: 'xxx', value: true }
// ];

// function checkForSpam(str: string, arr: Spam[]) {
//   const lowerCaseStr: string = str.toLowerCase();
//   for (const spamWord of arr) {
//     if (lowerCaseStr.includes(spamWord.name.toLowerCase())) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(checkForSpam('только завтра', arrOfWords));

// Написать функцию сокращения строки. Функция прини- 
// мает строку и ее максимальную длину. Если длина строки 
// больше, чем максимальная, то необходимо отбросить 
// лишние символы, добавив вместо них троеточие. 
// Например: truncate(“Hello, world!”, 8) должна вернуть 
// “Hello...”.

// * работает

// function truncate(str: string, maxLength: number): string {
//   if (str.length <= maxLength) {
//       return str;
//   } else {
//       return str.slice(0, maxLength) + '...';
//   }
// }

// const inputString: string = "Hello, world!";
// const maxLength: number = 5;
// const truncatedString: string = truncate(inputString, maxLength);
// console.log(truncatedString);

// dz
// Написать функцию, которая принимает строку и выводит
// статистику о ней: количество букв, количество цифр и
// количество других знаков.

// function getStatistics(str: string): void {
//   let lettersCount: number = 0;
//   let digitsCount: number = 0;
//   let otherCount: number = 0;

//   for (const char of str) {
//       if (/[a-zA-Zа-яА-Я]/.test(char)) {
//           lettersCount++;
//       } else if (/[0-9]/.test(char)) {
//           digitsCount++;
//       } else {
//           otherCount++;
//       }
//   }

//   console.log(`Строка: ${str}`);
//   console.log(`Количество букв: ${lettersCount}`);
//   console.log(`Количество цифр: ${digitsCount}`);
//   console.log(`Количество других знаков: ${otherCount}`);
// }

// getStatistics('Пример строки с 123 цифрами и !@#$%^&* символами');

// Написать функцию, которая принимает двузначное число
// и возвращает его в текстовом виде.
// Например: 35 – тридцать пять, 89 – восемьдесят девять,
// 12 – двенадцать.

// function numberToWords(num: number): string {
//   const units: string[] = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
//   const teens: string[] = ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
//   const tens: string[] = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];

//   if (num < 10 || num > 99) {
//       return 'Число должно быть двузначным';
//   }

//   if (num < 20) {
//       return teens[num - 10];
//   }

//   const unitsDigit: number = num % 10;
//   const tensDigit: number = Math.floor(num / 10);

//   if (unitsDigit === 0) {
//       return tens[tensDigit];
//   } else {
//       return `${tens[tensDigit]} ${units[unitsDigit]}`;
//   }
// }

// console.log(numberToWords(30)); 
// console.log(numberToWords(89)); 
// console.log(numberToWords(12));

// Написать функцию, которая заменяет в полученной строке
// большие буквы на маленькие, маленькие – на большие, а
// цифры – на знак нижнего подчеркивания.

// function transformString(str: string): string {
//   let transformedStr = '';

//   for (const char of str) {
//       if (/[A-ZА-Я]/.test(char)) {
//           transformedStr += char.toLowerCase();
//       } else if (/[a-zа-я]/.test(char)) {
//           transformedStr += char.toUpperCase();
//       } else if (/[0-9]/.test(char)) {
//           transformedStr += '_';
//       } else {
//           transformedStr += char;
//       }
//   }

//   return transformedStr;
// }

// const inputString: string = 'Пример строки 123 с Большими и Маленькими Буквами!';
// const transformedString: string = transformString(inputString);
// console.log(transformedString);

// Написать функцию, которая преобразует названия css-
// стилей с дефисом в название в СamelСase стиле: font-size
// в fontSize, background-color в backgroundColor, text-
// align в textAlign.

// function transformCssStyle(cssStyle: string): string {
//   return cssStyle.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
// }

// const cssStyle1: string = 'font-size';
// const cssStyle2: string = 'background-color';
// const cssStyle3: string = 'text-align';

// console.log(transformCssStyle(cssStyle1)); // fontSize
// console.log(transformCssStyle(cssStyle2)); // backgroundColor
// console.log(transformCssStyle(cssStyle3)); // textAlign

// Написать функцию, которая принимает словосочетание
// и превращает его в аббревиатуру.
// Например: cascading style sheets в CSS, объектно-
// ориентированное программирование в ООП.

// function createAbbreviation(phrase: string): string {
//   const words: string[] = phrase.split(' ');
//   let abbreviation: string = '';

//   for (const word of words) {
//       abbreviation += word[0].toUpperCase();
//   }

//   return abbreviation;
// }

// const phrase1: string = 'cascading style sheets';
// const phrase2: string = 'объектно-ориентированное программирование';

// console.log(createAbbreviation(phrase1)); // CSS
// console.log(createAbbreviation(phrase2)); // ООП

// Написать функцию, которая принимает любое коли-
// чество строк, объединяет их в одну длинную строку и
// возвращает ее.

// function combineStrings(...strings: string[]): string {
//   return strings.join('');
// }

// const string1: string = 'Привет, ';
// const string2: string = 'мир!';
// const string3: string = 'Как дела?';

// const combinedString: string = combineStrings(string1, string2, string3);
// console.log(combinedString); // Привет, мир!Как дела?

// Написать функцию – калькулятор. Функция принимает
// строку с примером, определяет, какое действие необходимо
// выполнить (+ - * /), переводит операнды в числа, решает
// пример и возвращает результат.

// function calculator(expression: string): number {
//   const operators = ['+', '-', '*', '/'];
//   let operator: string = '';
//   let num1: number = 0;
//   let num2: number = 0;

//   for (const op of operators) {
//       if (expression.includes(op)) {
//           operator = op;
//           break;
//       }
//   }

//   if (operator === '') {
//       return NaN;
//   }

//   const operands = expression.split(operator).map((operand) => parseFloat(operand.trim()));

//   num1 = operands[0];
//   num2 = operands[1];

//   switch (operator) {
//       case '+':
//           return num1 + num2;
//       case '-':
//           return num1 - num2;
//       case '*':
//           return num1 * num2;
//       case '/':
//           if (num2 === 0) {
//               return NaN;
//           }
//           return num1 / num2;
//       default:
//           return NaN;
//   }
// }

// const expression1: string = '10 + 5';
// const expression2: string = '15 - 6';
// const expression3: string = '8 * 4';
// const expression4: string = '20 / 4';

// console.log(calculator(expression1)); // 15
// console.log(calculator(expression2)); // 9
// console.log(calculator(expression3)); // 32
// console.log(calculator(expression4)); // 5

// Написать функцию, которая получает url и выводит под-
// робную информацию о нем.
// Например: url “https://itstep.org/ua/about”, информация
// “протокол: https, домен: itstep.org, путь: /ua/about”.

// function parseUrl(url: string): void {
//   const urlPattern = /^(https?):\/\/([a-z0-9.-]+)(\/.*)$/;
//   const match = url.match(urlPattern);

//   if (match) {
//       const protocol = match[1];
//       const domain = match[2];
//       const path = match[3];

//       console.log(`URL: ${url}`);
//       console.log(`Протокол: ${protocol}`);
//       console.log(`Домен: ${domain}`);
//       console.log(`Путь: ${path}`);
//   } else {
//       console.log('Некорректный URL');
//   }
// }

// const url1: string = 'https://itstep.org/ua/about';
// const url2: string = 'http://www.example.com/contact';

// parseUrl(url1);
// parseUrl(url2);

// Написать функцию, которая принимает строку и раздели-
// тель и возвращает массив подстрок, разбитых с помощью
// указанного разделителя.
// Например: строка “10/08/2020”, разделитель “/”, результат:
// “10”, “08”, “2020”.
// Выполняя задание, не используйте функцию split().

// function splitString(str: string, separator: string): string[] {
//   const result: string[] = [];
//   let currentSubstring: string = '';

//   for (let i = 0; i < str.length; i++) {
//       if (str[i] === separator) {
//           result.push(currentSubstring);
//           currentSubstring = '';
//       } else {
//           currentSubstring += str[i];
//       }
//   }

//   if (currentSubstring !== '') {
//       result.push(currentSubstring);
//   }

//   return result;
// }

// const inputString: string = '10/08/2020';
// const separator: string = '/';
// const substrings: string[] = splitString(inputString, separator);

// console.log(substrings);

// Написать функцию вывода текста по заданному шаблону.
// Функция принимает первым параметром шаблон, в тексте
// которого может использоваться %, после символа % ука-
// зывается индекс входного параметра. При выводе вместо
// %индекс необходимо вывести значение соответствующего
// входного параметра.
// Например: print(“Today is %1 %2.%3.%4”, “Monday”, 10,
// 8, 2020) должна вывести “Today is Monday 10.8.2020”.

// function print(template: string, ...values: any[]): void {
//   let result: string = template;

//   for (let i = 0; i < values.length; i++) {
//       const placeholder = new RegExp(`%${i + 1}`, 'g');
//       result = result.replace(placeholder, values[i]);
//   }

//   console.log(result);
// }

// print('Today is %1 %2.%3.%4', 'Monday', 10, 8, 2020);

// Написать функцию, которая проверяет, является ли пере-
// данная строка палиндромом.

// function getTruePalin(str:string) {
//   for(let i=0, j=str.length-1; i<j; i++, j--) {
//     if(str[i] !== str[j]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(getTruePalin('abba'))

// Написать функцию, которая считает количество слов в
// предложении.

// function getValue(str:string) {
//   const arr = str.split(' ');
//   return arr.length;
// }

// const result = getValue('crambole avokado')
// console.log(result)

// Написать функцию, которая возвращает самое длинное
// слово из предложения.

// ! надо вернуться к этой функции чуть позже
// ! я не опнимаю почему оно работает некорректно но итоговый результат такой какой и нужен
// ! пожалуй оставлю все как есть

// function getLonger(str:string) {
//   const noP = str.split(' ')
//   if(noP.slice(0,5).join('').length <= noP.slice(5).join('').length) {
//     const result = str.substring(0,5)
//     console.log(result)
//   } else {
//     const result = str.substring(5)
//     console.log(result)
//   }
// }

// getLonger('abbab abbabba')

// Написать функцию, которая считает среднюю длину слова
// в предложении.

// ! работает некорректно, надо исправить на вычисление С.А. All(слов) в предложения

// function getAverage(str:string) {
//   const noP = str.split(' ')
//   let sum = 0
//   for(let i=0; i<noP.length; i++) {
//    return sum += noP[i].length
//   }
//   console.log(sum/noP.length)
// }

// getAverage('Шла Наташа по шоссе и сосала сушку')


// Написать функцию, которая принимает 2 строки и срав-
// нивает их длину. Функция возвращает 1, если в первой
// строке больше символов, чем во второй; -1 – если во вто-
// рой больше символов, чем в первой; или 0 – если строки
// одинаковой длины.

const input1 = document.getElementById('first') as HTMLInputElement
const input2 = document.getElementById('second') as HTMLInputElement

const output = document.getElementById('third') as HTMLOutputElement

const btnResult = document.getElementById('btn') as HTMLButtonElement

let result: number|string|boolean = '';
function comparisonStrings(str1:string, str2:string) {
  if(str1.length > str2.length) {
    return result = 'Первая строка больше'
  } else if (str2.length > str1.length) {
    return result = 'Вторая строка больше'
  } else {
    return result = 'Обе Строки равны'
  }
}
btnResult.addEventListener('click', function() {
   result = comparisonStrings(input1.value, input2.value)
  output.value = result as unknown as string
  // console.log('оно работает')
})

comparisonStrings('adadadaf', 'adafa')

// * pz2 функция переводящая в верхний первую букву в слове

const inputWord = document.getElementById('four')as HTMLInputElement
const outputWord = document.getElementById('five')as HTMLOutputElement
const btnTrans = document.getElementById('btn_2')as HTMLButtonElement

let transWord: number|string|boolean

function getCapitalize(str:string):string {
  return transWord = str.charAt(0).toUpperCase() + str.slice(1)
 }
 
 btnTrans.addEventListener('click', function() {
  result = getCapitalize(inputWord.value)
  outputWord.value = transWord as unknown as string

 })

// * pz3 функция считает количество гласных в полученной строке

// ? надо исправить ошибки но код работает прекрасно
// * пометка все не критические(а других и не было) ошибки исправленны 

const inputCalculate = document.getElementById('six')as HTMLInputElement;
const outputCalculate = document.getElementById('seven')as HTMLOutputElement;
const btnCalculate = document.getElementById('btn_3')as HTMLButtonElement;
const rusLower = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
const rusUpper = rusLower.toUpperCase();
const enLower = 'abcdefghijklmnopqrstuvwxyz';
const enUpper = enLower.toUpperCase();
const rus = rusLower + rusUpper;
const en = enLower + enUpper;

function countVowels(str:string) {
  const vowelsEn = ['a', 'e', 'i', 'o', 'u', 'y'];
  const vowelsRu = ['а', 'о', 'у', 'ы', 'э', 'е', 'ё', 'и', 'ю', 'я'];
  let count = 0;
  
  for (const char of str.toLowerCase()) {
    if (en.includes(char) && vowelsEn.includes(char)) {
      count++;
    } else if (rus.includes(char) && vowelsRu.includes(char)) {
      count++;
    }
  }
  
  return count;
}

btnCalculate.addEventListener('click', function() {
  const inputValue = inputCalculate.value
  const vowelCount = countVowels(inputValue);
  outputCalculate.value = vowelCount as unknown as string;
});
// * pz 4
// * Написать функцию для проверки спама в переданной
// * строке. Функция возвращает true, если строка содержит
// * спам. Спамом считать следующие слова: 100% бесплатно,
// * увеличение продаж, только сегодня, не удаляйте, ххх.
// * Функция должна быть нечувствительна к регистру.

const inputSpam = document.getElementById('eigth')as HTMLInputElement
const outputSpam = document.getElementById('nine')as HTMLOutputElement
const btnSpam = document.getElementById('btn_4')as HTMLButtonElement

interface Spam {
  name: string;
  value: boolean;
}

const arrOfWords: Spam[] = [
  { name: '100% бесплатно', value: true },
  { name: 'увеличение продаж', value: true },
  { name: 'только сегодня', value: true },
  { name: 'не удаляйте', value: true },
  { name: 'xxx', value: true },
  { name: 'ххх', value: true }
];

function checkForSpam(str: string, arr: Spam[]) {
  const lowerCaseStr: string = str.toLowerCase();
  let count = '';
  for (const spamWord of arr) {
    if (lowerCaseStr.includes(spamWord.name.toLowerCase())) {
      return count = 'Вам бан';
    } 
  }
  return count = 'Вы оправдали надежды';
}

btnSpam.addEventListener('click', function() {
  const inputValue = inputSpam.value
  const checkSpamWords = checkForSpam(inputValue, arrOfWords)
  outputSpam.value = checkSpamWords as unknown as string
})

// * pz 5
// Написать функцию сокращения строки. Функция прини-
// мает строку и ее максимальную длину. Если длина строки
// больше, чем максимальная, то необходимо отбросить
// лишние символы, добавив вместо них троеточие.
// Например: truncate(“Hello, world!”, 8) должна вернуть
// “Hello...”.
const inputTruncate = document.getElementById('ten')as HTMLInputElement
const outputTruncate = document.getElementById('eleven')as HTMLOutputElement
const btnTruncate = document.getElementById('btn_5')as HTMLButtonElement


function truncate(str: string, maxLength=8): string {
  str = str.trim()
  if (str.length < maxLength) {
      return str;
  } else {
      return str.slice(0, maxLength) + '...';
  }
}

btnTruncate.addEventListener('click', function(){
  const inputValue = inputTruncate.value
  const getTruncate = truncate(inputValue)
  outputTruncate.value = getTruncate 
})

// const inputString: string = "Hello, world!";
// const truncatedString: string = truncate(inputString);
// console.log(truncatedString);

// * pz 6
// Написать функцию, которая проверяет, является ли пере-
// данная строка палиндромом.
const inputCheck = document.getElementById('twelve')as HTMLInputElement
const outputCheck = document.getElementById('thirtheen')as HTMLOutputElement
const btnCheck = document.getElementById('btn_6')as HTMLButtonElement

function getTruePalin(str:string) {
  for(let i=0, j=str.length-1; i<j; i++, j--) {
    if(str[i] !== str[j]) {
      return 'Не палиндром';
    }
  }
  return 'Палиндром';
}

btnCheck.addEventListener('click', function(){
  const inputValue = inputCheck.value
  const getCheck = getTruePalin(inputValue)
  outputCheck.value = getCheck as unknown as string
})

// console.log(getTruePalin('abbaabad'))

// * pz 7
// Написать функцию, которая считает количество слов в
// предложении.
const inputSum = document.getElementById('firtheen')as HTMLInputElement
const outputSum = document.getElementById('fifteen')as HTMLOutputElement
const btnSum = document.getElementById('btn_7')as HTMLButtonElement

function getValue(str:string) {
  const arr = str.split(' ');
  return arr.length;
}

btnSum.addEventListener('click', function(){
  const inputValue = inputSum.value 
  const getSum = getValue(inputValue)
  outputSum.value = getSum as unknown as string
})

// const result = getValue('crambole avokado')
// console.log(result)

// * pz 8
// Написать функцию, которая возвращает самое длинное
// слово из предложения.
const inputLonger = document.getElementById('sixteen')as HTMLInputElement
const outputLonger = document.getElementById('seventeen')as HTMLOutputElement
const btnLonger = document.getElementById('btn_8')as HTMLButtonElement

// type arrStr = string|string[]

function getLonger(str:string) {
 const words:string[] = str.split(' ')
 let longestWord = ''
  words.forEach((word) => {
    if(word.length>longestWord.length) {
      longestWord = word
    }
  });
  console.log(longestWord)
  return longestWord
}


btnLonger.addEventListener('click', function(){
  const inputValue = inputLonger.value 
  const getFunctionLonger = getLonger(inputValue)
  outputLonger.value = getFunctionLonger
})

// * pz 9 
// Написать функцию, которая считает среднюю длину слова
// в предложении.

function getAverage(str:string) {
  const noP = str.split(' ')
  let sum = 0
  for(let i=0; i<noP.length; i++) {
   return sum += noP[i].length
  }
  console.log(sum/noP.length)
}

getAverage('Шла Наташа по шоссе и сосала сушку')

