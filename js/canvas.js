var d = document;
var c = d.getElementById('my-canvas');
c.width = window.innerWidth;
c.height = window.innerHeight;
// c.width = 200;
// c.height = 200;
var ctx = c.getContext('2d');


var circles = new Array();

var requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;


function Circle(radius, speed, width, xPos, yPos, id) {
    this.radius = radius;
    this.speed = speed;
    this.width = width;
    this.xPos = xPos;
    this.yPos = yPos;
    this.id = id;
    this.exeptions = [];
    this.opacity = 1;

    this.counter = 0;

    var signHelper = Math.floor(Math.random() * 2);
    if (signHelper == 1) {
        this.sign = -1;
    } else {
        this.sign = 1;
    }
    this.globSpeedX = 0.01;
    this.globSpeedY = 0.01;
}

Circle.prototype.update = function() {

    this.counter += this.sign * this.speed;
    this.xPos += this.globSpeedX;
    if (this.xPos > c.width || this.xPos < 0) {
        this.globSpeedX *= -1;
    }

    this.yPos += this.globSpeedY;
    if (this.yPos > c.height || this.yPos < 0) {
        this.globSpeedY *= -1;
    }


    var newXPos = this.xPos + Math.cos(this.counter / 100) * this.radius;
    var newYPos = this.yPos + Math.sin(this.counter / 100) * this.radius;

    ctx.beginPath();
    ctx.arc(
        newXPos,
        newYPos,
        1,
        0,
        Math.PI * 2,
        false);

    ctx.closePath();
    // var opacity = Math.random() * (1 - 0.5) + 0.5;

    var rgb = 'rgba(225, 225, 225, 0.7)';

    ctx.fillStyle = rgb;
    ctx.fill();


    this.newXPos = newXPos;
    this.newYPos = newYPos;
};

function drawCircles() {
    for (var i = 0; i < 50; i++) {
        var randomX = Math.floor(Math.random() * c.width);
        var randomY = Math.floor(Math.random() * c.height);
        var speed = .005 + Math.random() * 2;
        var size = 5 + Math.random() * 100;
        var radius = Math.floor(Math.random() * 100) + 50;
        var circle = new Circle(radius, speed, size, randomX, randomY, i);
        circles.push(circle);
    }
    draw();
}
drawCircles();

function draw() {
    ctx.clearRect(0, 0, c.width, c.height);

    for (var i = 0; i < circles.length; i++) {
        var myCircle = circles[i];
        myCircle.update();
        myCircle.exeptions = [];
    }
    requestAnimationFrame(draw);
}