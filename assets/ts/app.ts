const win = document.querySelector(".win") as HTMLDivElement;
const maze = document.querySelectorAll("svg")!;
const button = document.querySelector(".btn") as HTMLButtonElement;
const level = document.querySelector(".level") as HTMLSpanElement;
const massage = document.querySelector(".massage") as HTMLSpanElement;

const collisionCheck = (event: any) => {
  const check = event.target.classList.value;

  if (check === "maze-border") alert("You Lost...!"); 
  else if (check === "finish") {
    button.style.opacity = "1";
    button.style.pointerEvents = "all";
    maze[0].style.pointerEvents = "none";
  } else if (check === "end-game") {
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
