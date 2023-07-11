"use strict";

const hamburger = document.querySelector(".menu");
const closed = document.querySelector(".close");
const navigation = document.querySelector(".navigation");
const overlay = document.querySelector(".overlay");
console.log(hamburger);
console.log(closed);
console.log(navigation);
console.log(overlay);

hamburger.addEventListener("click",function(){
    console.log("Clicked");
    overlay.classList.remove("hidden");
    navigation.classList.remove("hidden");
    hamburger.classList.remove("display");
    closed.classList.add("display");
});
closed.addEventListener("click",function(){
    overlay.classList.add("hidden");
    navigation.classList.add("hidden");
    closed.classList.remove("display");
    hamburger.classList.add("display");
});