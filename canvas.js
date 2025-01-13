let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

// c.fillStyle = "rgba(255, 0, 0, 0.5)";
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = "rgba(0, 255, 0, 0.5)";
// c.fillRect(300, 100, 100, 100);
// c.fillStyle = "rgba(0, 0, 255, 0.5)";
// c.fillRect(100, 300, 100, 100);
// c.fillStyle = "rgba(255, 0, 255, 0.5)";
// c.fillRect(400, 400, 100, 100);



// c.beginPath
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "red";
// c.lineTo(100, 500);
// // c.strokeStyle = "blue";
// c.stroke();

// //arc size
// for (var i = 0; i < 2000; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x, y, 15, 0, Math.PI * 3, false);
//     c.strokeStyle = make_random_colour();
//     c.lineWidth = 30;
//     c.stroke();

// }

let x = Math.random() * innerWidth;
let y = Math.random() * innerHeight;
let dx = (Math.random() - 0.5) * 8;
let dy = (Math.random() - 0.5) * 8;
let radius = 30;
let colour = make_random_colour();

function animate() {

    // console.log('hi');
    c.clearRect(0, 0, innerWidth, innerHeight);

    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 3, false);
    c.strokeStyle = colour;
    c.lineWidth = 3;
    c.stroke();



    if (x + radius > innerWidth) {
        dx = -dx;
    }
    if (x - radius < 0) {
        dx = -dx;
    }

    if (y + radius > innerHeight) {
        dy = -dy;
    }
    if (y - radius < 0) {
        dy = -dy;
    }

    x += dx;
    y += dy;

    requestAnimationFrame(animate);
}


animate();

function make_random_colour() {
    var randomColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    // console.log(randomColor);
    return randomColor;

    // var r = Math.random * 255;
    // var g = Math.random * 255;
    // var b = Math.random * 255;
    // var colour = `rgba(${r}, ${g}, ${b}, 1)`;
    // console.log(colour);
    // return colour;
}