// Movment For Final Project

// Set Up Canvas and 2D Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;


// Health bar


// player

// Global Variables
let player = {
    x1: 375, 
    y1: 500,
    w1: 50,
    h1: 100,
    xSpeed1: 0,
}
let player2 = {
   x2: 300,
   y2: 500,
   w2: 50,
   h2: 100,
   xSpeed2: 0,
}

let punch1 = {
   x3: 365,
   y3: 520,
   w3: 10,
   h3: 20,
}

let punch2 = {
   x4: 350,
   y4: 520,
   w4: 10,
   h4: 20,
}

let scoreplayer = 0;
let scoreplayer2 = 0;



if (checkcollison(player, player2)) {
 scoreplayer++
   }

 
// Main Program Loop 
 requestAnimationFrame(draw);

 function draw() {
    //Logic

    // Drawing
    ctx.clearRect(0,0, cnv.width, cnv.height);

   // Draw Player 
    ctx.fillStyle = "yellow";
    ctx.fillRect(player.x1, player.y1, player.w1, player.h1);

    ctx.fillStyle = "blue";
    ctx.fillRect(player2.x2, player2.y2, player2.w2, player2.h2);

    // Draw Punch 
    ctx.fillStyle = "red";
    ctx.fillRect(punch1.x3, punch1.y3, punch1.w3, punch1.h3);

    ctx.fillStyle = "green";
    ctx.fillRect(punch2.x4, punch2.y4, punch2.w4, punch2.h4);

    // Draw score
   ctx.fillstyle = "black"
   ctx.font = "25px Arial"
   ctx.fillText("player score: " + scoreplayer, cnv.width - 700, cnv.height - 560 );
   ctx.fillText("player2 score: " + scoreplayer2, cnv.width - 270, cnv.height - 560);
    // Request another Animation Frame
    collision()
   console.log(scoreplayer)
    requestAnimationFrame(draw);
 }

 // Key Event Stuff

 document.addEventListener("keydown", keydownHandler);
  document.addEventListener("keyup", keyupHandler);

 function keydownHandler(event) {
         // Step Movment 
         if (event.code == "ArrowRight") {
           player.x1 += 25;
           punch1.x3 += 25;
           console.log(event.code);
         } else if (event.code == "ArrowLeft"){
            player.x1 -= 25;
            punch1.x3 -= 25;
            console.log(event.code);
         } else if (event.code == "ArrowDown") {
            arrowDown = true
            punch1.w3 = -40;
            punch1.x3 = player.x1
         } else if (event.code == "KeyD") {
            player2.x2 += 25;
            punch2.x4 += 25;
            console.log(event.code);
         } else if (event.code == "KeyA"){
            player2.x2 -= 25;
            punch2.x4 -= 25;
            console.log(event.code);
         } else if (event.code == "KeyS"){
            punch2.w4 = 40;
         }
      }

function keyupHandler(event) {
   if (event.code == "ArrowDown") {
      punch1.w3 = -10;
      // punch1.x3 = punch1.x3 -10;
  
   } 
   if (event.code == "KeyS") {
      punch2.w4 = 10;
   } 
}

 // collision detection
function checkcollison(player, player2) {
   if (
     player.x < player2.x + player2.w &&
     player.x + player.w > player2.x &&
     player.y < player2.y + player2.h &&
     player.h + player.y > player2.y
   ) { 
      return true;
   } { 
      return false;
   }
 }
  

function collision() {
   if (punch2.x4 + punch2.w4 >= player.x1) {
      scoreplayer2 += 1
   }
   if (punch1.x3 - punch1.w3 <= player2.x2) {
      scoreplayer += 1
   }
}
