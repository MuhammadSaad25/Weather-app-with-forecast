// creating HTML with DOM

// div class currant info 
let currentInfo = document.createElement("div");
currentInfo.setAttribute("class", "current_info");
container.appendChild(currentInfo);

// //form class form function onsubmit myFunction 
// let form = document.createElement("form");
// form.setAttribute("class", "form");
// form.setAttribute("onsubmit", "myFunction()");
// currentInfo.appendChild(form);

// // input class input
// let input = document.createElement("input");
// input.setAttribute("class", "input");
// input.setAttribute("placeholder", "Enter City Name");
// form.appendChild(input);

// div class date_container
let dateContainer = document.createElement("div");
dateContainer.setAttribute("class","date_container");
currentInfo.appendChild(dateContainer);

// div class time id time
let time = document.createElement("div")
time.setAttribute("class","time");
time.setAttribute("id","time");
dateContainer.appendChild(time)
let timeSet = document.createTextNode("12:00")
time.appendChild(timeSet)
// span
let ampm = document.createElement("span")
time.appendChild(ampm)
let ampmSet = document.createTextNode("am")
ampm.appendChild(ampmSet)

// div class date id date
let date = document.createElement("div")
date.setAttribute("class","date");
date.setAttribute("id","date");
dateContainer.appendChild(date)
let dateSet = document.createTextNode(`Sunday, 28 August 2022`)
date.appendChild(dateSet)

// div class others id currentWeatherItems
let currentWeatherItems = document.createElement("div")
currentWeatherItems.setAttribute("class","others");
currentWeatherItems.setAttribute("id","currentWeatherItems");
dateContainer.appendChild(currentWeatherItems)

// div class weather_item
let WeatherItem = document.createElement("div")
WeatherItem.setAttribute("class","weather_item");
currentWeatherItems.appendChild(WeatherItem)

// p1 p2  
let pra1 = document.createElement("div")
WeatherItem.appendChild(pra1)
let pra1c1 = document.createTextNode(`humydity`)
pra1.appendChild(pra1c1)
let pra2 = document.createElement("div")
WeatherItem.appendChild(pra2)
let pra2c1 = document.createTextNode(`30%`)
pra2.appendChild(pra2c1)

// div class weather_item
let WeatherItem2 = document.createElement("div")
WeatherItem2.setAttribute("class","weather_item");
currentWeatherItems.appendChild(WeatherItem2)

// p3 p4 
let pra3 = document.createElement("div")
WeatherItem2.appendChild(pra3)
let pra3c1 = document.createTextNode(`humydity`)
pra3.appendChild(pra3c1)
let pra4 = document.createElement("div")
WeatherItem2.appendChild(pra4)
let pra4c1 = document.createTextNode(`30%`)
pra4.appendChild(pra4c1)

// div class weather_item
let WeatherItem3 = document.createElement("div")
WeatherItem3.setAttribute("class","weather_item");
currentWeatherItems.appendChild(WeatherItem3)

// p5 p6 
let pra5 = document.createElement("div")
WeatherItem3.appendChild(pra5)
let pra5c1 = document.createTextNode(`humydity`)
pra5.appendChild(pra5c1)
let pra6 = document.createElement("div")
WeatherItem3.appendChild(pra6)
let pra6c1 = document.createTextNode(`30%`)
pra6.appendChild(pra6c1)

