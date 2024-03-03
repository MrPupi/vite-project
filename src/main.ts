import "./style.scss";

console.log("Hello, Peep");

// const nameUser = prompt(' Укажите ваше Имя')
// const surnameUser = prompt(' Укажите вашу Фамилию')
// const ageUser = prompt(' Укажите ваш Возраст')

// alert(`Всё верно? ${nameUser} ${surnameUser} ${ageUser}`)
interface myObj {
  [key: string]: { Value: number; Previous: number; Valute: string };
}

interface Element {
  [key: string]: { resl: any; cerv: any; select: any };
}
// console.log ('я этого тайпскрипта рот ебал!!!!')
const rates: myObj = {};
const elementUSD = document.querySelector('[data-value="USD"]');

const elementEUR = document.querySelector('[data-value="EUR"]');

const elementGBP = document.querySelector('[data-value="GBP"]');
getCurrent();

const cerv: any = document.querySelector("#cerv");
const resl: any = document.querySelector("#resl");
const select: any = document.querySelector("#select");
const optionsel: any = document.querySelector("#option");

// if (!select || !resl || !cerv)
//     throw new Error("Не найден элемент, соси хуй!");

async function getCurrent() {
  if (!elementEUR || !elementGBP || !elementUSD)
    throw new Error("Не найден элемент, соси хуй!");
  const responsive = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
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
    elementUSD.classList.add("top");
  } else {
    elementUSD.classList.add("bottom");
  }
}

cerv.oninput = function () {
  resl.value = (cerv.value / rates[optionsel.value].Value).toFixed(2);
};

// resl.oninput = function(){
//   console.log('changed');
// }

// console.log(
//   "Николай помогите мне, я мягко говоря не совсем понимаю этот js со статической типизацией он меня даже больше бесит чем помогает работать"
// );

// ЭТО ЗМЕЙКА
// Следуйте дальше и увидите больше!!!

const canvas: any = document.getElementById("game");
const ctx = canvas.getContext("2d");

const ground = new Image();
ground.src = "./ground.png";

const foodImg = new Image();
foodImg.src = "./food.png";

let box = 32;

let score = 0;

let food = {
  x: Math.floor(Math.random() * 17 + 1) * box,
  y: Math.floor(Math.random() * 15 + 2) * box,
};

let snake: any[] = [];
snake[0] = {
  x: 9 * box,
  y: 10 * box,
};

document.addEventListener("keydown", direction);

let dir: any;

function direction(event): any | number {
  if (event.keyCode == 65 && dir != "right") dir = "left";
  else if (event.keyCode == 87 && dir != "down") dir = "up";
  else if (event.keyCode == 68 && dir != "left") dir = "right";
  else if (event.keyCode == 83 && dir != "up") dir = "down";
}

let game = setInterval(snakeGame, 85);

function snakeGame() {
  ctx.drawImage(ground, 0, 0);

  ctx.drawImage(foodImg, food.x, food.y);

  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = i == 0 ? "red" : "brown";
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
  }
  ctx.fillStyle = "white";
  ctx.font = "50px Arial";
  ctx.fillText(score, box * 2.5, box * 1.7);

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (snakeX == food.x && snakeY == food.y) {
    score++;
    food = {
      x: Math.floor(Math.random() * 17 + 1) * box,
      y: Math.floor(Math.random() * 15 + 2) * box,

      // console.log('по идее должна расти')
    };
  } else {
    snake.pop();
  }

  if (dir == "left") snakeX -= box;
  if (dir == "right") snakeX += box;
  if (dir == "up") snakeY -= box;
  if (dir == "down") snakeY += box;

  let newHead = {
    x: snakeX,
    y: snakeY,
  };

  snake.unshift(newHead);
}

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

let number = parseInt(prompt('Введите число ')as string)as number
let upper = parseInt(prompt('Введите степень ')as string)as number

while(number ** upper) {
  const numberUpper = number ** upper
  alert(`Число ${number} в ${upper} степени равно ${numberUpper}`)
  break
}

// 