let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

c.fillStyle = "rgba(255, 0, 0, 0.5)";
c.fillRect(100, 100, 100, 100);
c.fillStyle = "rgba(0, 255, 0, 0.5)";
c.fillRect(300, 100, 100, 100);
c.fillStyle = "rgba(0, 0, 255, 0.5)";
c.fillRect(100, 300, 100, 100);
c.fillStyle = "rgba(255, 0, 255, 0.5)";
c.fillRect(400, 400, 100, 100);



c.beginPath
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = "red";
c.lineTo(100, 500);
// c.strokeStyle = "blue";
c.stroke();

//arc size
for(var i = 0; i < 2000; i++){
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI*3, false);
    c.strokeStyle = make_random_colour();
    c.lineWidth = 15;
    c.stroke();

}

function make_random_colour(){
    var randomColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    // console.log(randomColor);
    return randomColor;

    // var r = Math.random * 255;
    // var g = Math.random * 255;
    // var b = Math.random * 255;
    // var colour = `rgba(${r}, ${g}, ${b}, 1)`;
    // console.log(colour);
    // return colour;
}