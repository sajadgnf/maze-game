"use strict";
const win = document.querySelector(".win");
const maze = document.querySelectorAll("svg");
const button = document.querySelector(".btn");
const level = document.querySelector(".level");
const massage = document.querySelector(".massage");
const collisionCheck = (event) => {
    const check = event.target.classList.value;
    if (check === "maze-border") {
        alert("You Lost...!");
    }
    else if (check === "finish") {
        button.style.opacity = "1";
        button.style.pointerEvents = "all";
        maze[0].style.pointerEvents = "none";
    }
    else if (check === "end-game") {
        win.style.display = "flex";
    }
};
const nextLevel = () => {
    maze[0].style.display = "none";
    maze[1].style.display = "inline-block";
    button.style.opacity = "0";
    button.style.pointerEvents = "none";
    level.innerText = "2";
    massage.innerText = "One More To Go...";
};
button.addEventListener("click", nextLevel);
window.addEventListener("mouseout", collisionCheck);
