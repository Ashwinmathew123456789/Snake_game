//varible
let canvas = document.getElementById("canvas").getContext("2d");
// x and y varibles for movement
let spx = 80;
let spy = 80;
let npx = 0;
let npy = 0;
let fpx = 140;
let fpy = 120;
let snake_tail = [];
let snake_size = 1;
let score = 0;
//let up = document.getElementById("up")

// onload function
window.onload = function() {
  //  document.addEventListner("keydown", inputControl)
  game = setInterval(main_game, 500);
  //const intervalId = setInterval(() => {main_game()}, 1000);
}

//main game function

function main_game() {

  document.getElementById("score").innerHTML = score;
  // for continous motion
  spx += npx;
  spy += npy;
  //looping the snake
  if (spx > 400) {
    spx = 0;
  }
  if (spy > 400) {
    spy = 0;
  }
  if (spx < 0) {
    spx = 400;
  }
  if (spy < 0) {
    spy = 400;
  }

  //backgrount colour and game area
  canvas.fillStyle = "black";
  canvas.fillRect(0, 0, 400, 400);

  //drawing line
  for (let cl = 0; cl <= 400; cl += 20) {
    canvas.moveTo(cl, 0);
    canvas.lineTo(cl, 400);
  }
  for (let rl = 0; rl <= 400; rl += 20) {
    canvas.moveTo(0, rl);
    canvas.lineTo(400, rl);
  }
  canvas.strokeStyle = "#ffffff";
  canvas.stroke();

  //snake body

  canvas.fillStyle = "red";
//  canvas.fillRect(spx, spy, 20, 20);
  for (let i = 0; i < snake_tail.length; i++) {
    canvas.fillRect(snake_tail[i].x, snake_tail[i].y, 20, 20);
    
    if (spx == snake_tail[i].x && spy == snake_tail[i].y && snake_size>1){
    alert("Game over");
   // window.reload()
    clearInterval(game);
    }
  }


  //frut
  canvas.fillStyle = "blue";
  canvas.fillRect(fpx, fpy, 20, 20);

//frut change
  if (spx == fpx && spy == fpy) {
    snake_size++;
    score++;
    fpx = Math.floor(Math.random()*20)*20;
    fpy = Math.floor(Math.random()*20)*20;
  }
  
  snake_tail.push({x:spx, y:spy});
  while(snake_tail.length > snake_size){
    snake_tail.shift();
  }
  
  
}


// game control

document.getElementById("up").onclick = function () {
  npy += -20;
  npx = 0;
}
document.getElementById("down").onclick = function () {
  npy += 20;
  npx = 0;
}
document.getElementById("left").onclick = function () {
  npx += -20;
  npy = 0;
}
document.getElementById("right").onclick = function () {
  npx += 20;
  npy = 0;
}