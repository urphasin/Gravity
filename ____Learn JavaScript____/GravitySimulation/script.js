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
let x = 50;
let y = 50;
let size = 30

let v = 0;
const g = 9.8;
const bounce = 0.7; // energy loss


function draw() {
    c.clearRect(0, 0, canvas.width, canvas.height);

    c.strokeStyle = "red";
    c.lineWidth = 4;
    c.strokeRect(x, y, size, size);
}


let lastTime = performance.now();
function loop() {
    let now = performance.now();
    let dt = (now - lastTime) / 1000; // convert ms -> seconds
    lastTime = now;

    v += g * dt;
    y += v * dt;


    draw();
    requestAnimationFrame(loop);
}

loop();