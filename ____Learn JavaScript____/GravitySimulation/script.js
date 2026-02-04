// let y = 50;
// let v = 0;
//
// const g = 4.0;
//
// function update() {
//     v = v + g;
//     y = y + v;
//
//     if (y > 300) { // ground
//         y = 300;
//         v  =  v * -0.7; // bounce
//     }
// }

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

// Ball properties
let x = 250;
let y = 50;
let radius = 15;

let velocityY = 0;
const gravity = 0.6;
const bounce = 0.7; // energy loss

function update() {
    // Physics
    velocityY = velocityY + gravity; // v = v + g
    y = y + gravity; // y = y + v;

    // Ground collision
    if(y + radius > canvas.height) {
        y = canvas.height - radius;
        velocityY = velocityY * (-1*bounce);
    }
}

function draw() {
    c.clearRect(0, 0, canvas.width, canvas.height);

    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2);
    c.fillStyle = "cyan";
    c.fill();
}

function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
}

loop();