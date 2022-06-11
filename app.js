const info = document.querySelector('.info')

const info1 = document.querySelector('.info1')

const info2 = document.querySelector('.info2')

const info3 = document.querySelector('.info3')

const info4 = document.querySelector('.info4')

const info5 = document.querySelector('.info5')

const body = document.querySelector("body")

const btn = document.querySelector('.btn')

const btn2 = document.querySelector('.btn2')

// const btn3 = document.querySelector('.btn3')

setInterval((time) => {
  const hours = new Date().getHours();
  info.innerHTML = hours;

  const minutes = new Date().getMinutes();
  info1.innerHTML = minutes;

  const mili = new Date().getSeconds();
  info2.innerHTML = mili;

  const dates = new Date().getDate();
  info3.innerHTML = dates;
 
  const months = new Date().getMonth();
  info4.innerHTML = months;

  const years = new Date().getFullYear();
  info5.innerHTML = years;

}, 10);


// bg

function btn1(){
    body.classList.toggle('btn')
} 

// function btn2(){
//     body.classList.toggle('btn1')
// } 

// function btn3(){
//     body.classList.toggle('back2')
// } 


