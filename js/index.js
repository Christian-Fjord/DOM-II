// Your code goes here
let myAnchors = document.querySelector('.nav-link');

myAnchors.addEventListener('mouseover', (event) => {
  event.target.style.color = 'red';
});

myAnchors.addEventListener('mouseleave', (event) => {
  event.target.style.color = 'black';
});


let myFunBus = document.querySelector('.logo-heading');

myFunBus.addEventListener('click', 
(event) => {
  alert('Welcome to the FUN BUS');
});

let myPic = document.querySelector('.bus-img');
myPic.addEventListener('dblclick', 
(event) => {
  event.target.style.border = "3px solid black";

})

let allThings = document.querySelector('body');

allThings.addEventListener('keydown', 
(event) => {
  event.target.style.backgroundColor = "grey";
})


allThings.addEventListener('keyup', 
(event) => {
  event.target.style.backgroundColor = "white";
});


let imgContent = document.querySelector('.img-content');

allThings.addEventListener('mousemove', 
(event) => {
  event.target.style.border = "4px solid orange";
  event.stopPropagation();
});







