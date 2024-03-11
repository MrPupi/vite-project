import './style.scss';

console.log('Hello, Peep');

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

const canvas: HTMLCanvasElement | null = document.getElementById(
  'game'
) as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const ground = new Image();
ground.src = './ground.png';

const foodImg = new Image();
foodImg.src = './food.png';

const box = 32;

let score = 0;

let food = {
  x: Math.floor(Math.random() * 17 + 1) * box,
  y: Math.floor(Math.random() * 15 + 2) * box
};

const snake: { x: number; y: number }[] = [];
snake[0] = {
  x: 9 * box,
  y: 10 * box
};

document.addEventListener('keydown', direction);

let dir: string;

function direction(event: KeyboardEvent) {
  if (event.keyCode == 65 && dir != 'right') dir = 'left';
  else if (event.keyCode == 87 && dir != 'down') dir = 'up';
  else if (event.keyCode == 68 && dir != 'left') dir = 'right';
  else if (event.keyCode == 83 && dir != 'up') dir = 'down';
}

setInterval(snakeGame, 100);

function snakeGame() {
  if (!ctx) return;
  ctx.drawImage(ground, 0, 0);

  ctx.drawImage(foodImg, food.x, food.y);

  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = i == 0 ? 'red' : 'brown';
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
  }
  ctx.fillStyle = 'white';
  ctx.font = '50px Arial';
  ctx.fillText(score.toString(), box * 2.5, box * 1.7);

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (snakeX == food.x && snakeY == food.y) {
    score++;
    food = {
      x: Math.floor(Math.random() * 17 + 1) * box,
      y: Math.floor(Math.random() * 15 + 2) * box

      // console.log('по идее должна расти')
    };
  } else {
    snake.pop();
  }

  if (dir == 'left') snakeX -= box;
  if (dir == 'right') snakeX += box;
  if (dir == 'up') snakeY -= box;
  if (dir == 'down') snakeY += box;

  const newHead = {
    x: snakeX,
    y: snakeY
  };

  snake.unshift(newHead);
}

snakeGame();

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

const userFactorial = parseInt(prompt('Введите число ')as string)as number
const subsume = 1
const factorial = 1

function factorialCalc(factorial: number, subsume: number) {
  factorial = factorial * subsume
  if (subsume < userFactorial) {
    subsume++ 
    return factorialCalc(factorial, subsume)
  } 
  console.log(factorial)
}

factorialCalc(factorial, subsume)

const userInput = parseInt(prompt('Введите число ')as string)as number
let trueFactorial = 1
let i = 0

for (i = 1 ; i <= userInput; i++) {
  trueFactorial = trueFactorial * i
  
}

console.log(trueFactorial)

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
