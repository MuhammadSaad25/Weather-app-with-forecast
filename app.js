// creating HTML with DOM

// div class currant info 
let currentInfo = document.createElement("div");
currentInfo.setAttribute("class", "current_info");
container.appendChild(currentInfo);

//form class form function onsubmit myFunction 
let form = document.createElement("form");
form.setAttribute("class", "form");
form.setAttribute("onsubmit", "myFunction()");
currentInfo.appendChild(form);

// input class input
let input = document.createElement("input");
input.setAttribute("class", "input");
input.setAttribute("placeholder", "Enter City Name");
form.appendChild(input);

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
