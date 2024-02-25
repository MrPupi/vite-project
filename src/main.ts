import './style.scss'

console.log ('Hello, Peep')

// const nameUser = prompt(' Укажите ваше Имя') 
// const surnameUser = prompt(' Укажите вашу Фамилию') 
// const ageUser = prompt(' Укажите ваш Возраст') 

// alert(`Всё верно? ${nameUser} ${surnameUser} ${ageUser}`)

// console.log ('я этого тайпскрипта рот ебал!!!!')
const rates = {}
const elementUSD = document.querySelector('[data-value="USD"]') 

const elementEUR = document.querySelector('[data-value="EUR"]')

const elementGBP = document.querySelector('[data-value="GBP"]')

getCurrent();  


async function getCurrent() {
  const responsive = await fetch ('https://www.cbr-xml-daily.ru/daily_json.js');
  const data = await responsive.json();
  const result = await data
  console.log(result)

  console.log(result.Valute.USD.Value)

  console.log(result.Valute.EUR.Value)

  console.log(result.Valute.GBP.Value)

  rates.USD = result.Valute.USD

  rates.EUR = result.Valute.EUR

  rates.GBP = result.Valute.GBP

  console.log(rates)

  elementUSD.textContent = rates.USD.Value.toFixed(2);

  elementEUR.textContent = rates.EUR.Value.toFixed(2);

  elementGBP.textContent  = rates.GBP.Value.toFixed(2);


  if (rates.USD.Value > rates.USD.Previous) {
    elementUSD?.classList.add('top')
  } else {
    elementUSD?.classList.add('bottom')
  }

}


