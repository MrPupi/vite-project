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
  [key: string]: { resl: number; cerv: number; select: number };
}
// console.log ('я этого тайпскрипта рот ебал!!!!')
const rates: myObj = {};
const elementUSD = document.querySelector('[data-value="USD"]');

const elementEUR = document.querySelector('[data-value="EUR"]');

const elementGBP = document.querySelector('[data-value="GBP"]');
getCurrent();

const cerv = document.querySelector("#cerv");
const resl = document.querySelector("#resl");
const select = document.querySelector("#select");

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
  console.log("changed");
  resl.value = (cerv.value / rates.EUR.Value).toFixed(2);
};

// resl.oninput = function(){
//   console.log('changed');
// }

console.log(
  "Николай помогите мне, я мягко говоря не совсем понимаю этот js со статической типизацией он меня даже больше бесит чем помогает работать"
);

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

let snake: number[] = [];
snake[0] = {
  x: 9 * box,
  y: 10 * box,
};

document.addEventListener("keydown", direction);

let dir: any;

function direction(event) {
  if (event.keyCode == 65 && dir != "right") dir = "left";
  else if (event.keyCode == 87 && dir != "down") dir = "up";
  else if (event.keyCode == 68 && dir != "left") dir = "right";
  else if (event.keyCode == 83 && dir != "up") dir = "down";
}

let game = setInterval(snakeGame, 100);

function snakeGame() {
  ctx.drawImage(ground, 0, 0);

  ctx.drawImage(foodImg, food.x, food.y);

  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = i == 0 ? "red" : "brown" ;
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
  }
  ctx.fillStyle = "white";
  ctx.font = "50px Arial";
  ctx.fillText(score, box * 2.5, box * 1.7);

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if(snakeX == food.x && snakeY == food.y) {
    score++;
    food = {
      x: Math.floor(Math.random() * 17 + 1) * box,
      y: Math.floor(Math.random() * 15 + 2) * box,

      // console.log('по идее должна расти')
    };
  } else {
    // snake.pop();
    console.log('соси хуй, она не выростет!')
  }
  
  snake.pop();

  if (dir == "left") snakeX -= box;
  if (dir == "right") snakeX += box;
  if (dir == "up") snakeY -= box;
  if (dir == "down") snakeY += box;

  let newHead = {
    x: snakeX,
    y: snakeY,
  }

  snake.unshift(newHead)
}
