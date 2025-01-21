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

let mouse = {
    x: undefined,
    y: undefined
}

const maxRadius = 40;
// const minRadius = 5;
const InteractivityRadius = 60;

const colourArray = [
    '#2C3E50',
    '#E74C3C',
    '#ECF0F1',
    '#3498DB',
    '#2980B9'
]

window.addEventListener('mousemove', movement);
canvas.addEventListener('touchmove', movement);
canvas.addEventListener('touchstart', movement); // Add touchstart event listener

// document.body.addEventListener("ontouchmove", function (e) {
//     if (e.target == canvas) {
//       e.preventDefault();
//       movement();
//     }
//   }, false);

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
});

let circleSlider = document.getElementById('circleSlider');
circleSlider.addEventListener('input', function () {
    init();
});

function movement(event) {
    if (event.type === 'touchmove' || event.type === 'touchstart') {
        mouse.x = event.touches[0].clientX;
        mouse.y = event.touches[0].clientY;
    } else {
        mouse.x = event.x;
        mouse.y = event.y;
    }
    // console.log(mouse);
}

function Circle(x, y, radius, dx, dy, colour) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.minRadius = radius;
    this.dx = dx;
    this.dy = dy;
    this.colour = colour;


    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 3, false);
        c.strokeStyle = this.colour;
        c.lineWidth = 3;
        c.stroke();
        c.fillStyle = this.colour;
        c.fill();


    }

    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        //Interactivity
        if ((mouse.x - this.x < InteractivityRadius && mouse.x - this.x > -InteractivityRadius) && (mouse.y - this.y < InteractivityRadius && mouse.y - this.y > -InteractivityRadius)) {
            if (this.radius < maxRadius) {
                this.radius = this.radius + 3;
            }
        } else if (this.radius > this.minRadius) {
            this.radius--;
        }




        this.draw();
    }
}

let circlesArray = [];
function init() {
    circlesArray = [];
    let numberOfCircles = circleSlider.value;
    for (var i = 0; i < numberOfCircles; i++) {
        let radius = Math.random() * 3 + 1;
        let x = (Math.random() * (innerWidth - 2 * radius)) + radius;
        let y = (Math.random() * (innerHeight - 2 * radius)) + radius;
        let dx = (Math.random() - 0.5) * 6;
        let dy = (Math.random() - 0.5) * 6;
        let colour = colourArray[Math.floor(Math.random() * colourArray.length)];
        let circle = new Circle(x, y, radius, dx, dy, colour);
        circlesArray[i] = circle;
    }
    // circle.draw();
}

function animate() {

    // console.log('hi');
    c.clearRect(0, 0, innerWidth, innerHeight);

    // c.beginPath();
    // c.arc(x, y, radius, 0, Math.PI * 3, false);
    // c.strokeStyle = colour;
    // c.lineWidth = 3;
    // c.stroke();
    circlesArray.forEach(circle => {
        circle.update();
    });






    // if (x + radius > innerWidth) {
    //     dx = -dx;
    // }
    // if (x - radius < 0) {
    //     dx = -dx;
    // }

    // if (y + radius > innerHeight) {
    //     dy = -dy;
    // }
    // if (y - radius < 0) {
    //     dy = -dy;
    // }

    // x += dx;
    // y += dy;

    requestAnimationFrame(animate);
}

init();
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