// Create a new connection using socket.io (imported in index.html)
// make sure you added the following line to index.html:

const { transcode } = require("buffer");

// <script src="/socket.io/socket.io.js"></script>
let clientSocket = io();

// define the function that will be called on a new newConnection
clientSocket.on("connect", newConnection);

// callback function for "connect" messages
function newConnection() {
  console.log("your id:", clientSocket.id);
}

// Define which function should be called when a new message
// comes from the server with type "mouseBroadcast"
clientSocket.on("mouseBroadcast", otherMouse);

// Callback function called when a new message comes from the server
// Data parameters will contain the received data
function otherMouse(dataReceived) {
  fill(255, 51, 255);
  circle(dataReceived.x, dataReceived.y, 20);
  noStroke();
}

// when the mouse is moved, draw it and send a message to the server
function mouseMoved() {
  fill(51, 255, 51);
  circle(mouseX, mouseY, 15);
  noStroke();

  // create an object containing the mouse position
  let message = {
    id: clientSocket.id,
    x: mouseX,
    y: mouseY,
  };

  // send the object to server,
  // tag it as "mouse" event
  clientSocket.emit("mouse", message);
}

// create the artboard
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(32);
  //text
  noStroke();
  fill(255);
  textSize(50);
  text("start", 450, 160);
  text("end", 1039, 670);
}

// draw the circle
function draw() {
  //maze
  push();
  translate(windowWidth / 2 - 273, windowHeight / 2 - 273);
  scale(1.5);
  stroke(255);
  strokeWeight(8);
  line(35, 50, 35, 350);
  line(35, 350, 325, 350);
  line(365, 350, 365, 50);
  line(365, 50, 75, 50);
  line(75, 50, 75, 130);
  line(35, 170, 125, 170);
  line(125, 170, 125, 90);
  line(125, 90, 170, 90);
  line(170, 90, 170, 270);
  line(170, 270, 250, 270);
  line(250, 270, 250, 230);
  line(250, 230, 310, 230);
  line(170, 125, 210, 125);
  line(170, 240, 125, 240);
  line(210, 270, 210, 300);
  line(280, 230, 280, 125);
  line(280, 190, 250, 190);
  line(280, 155, 310, 155);
  line(35, 270, 75, 270);
  line(75, 270, 75, 210);
  line(75, 210, 125, 210);
  line(210, 50, 210, 90);
  line(210, 90, 280, 90);
  line(245, 90, 245, 155);
  line(245, 155, 210, 155);
  line(210, 155, 210, 230);
  line(170, 350, 170, 300);
  line(170, 300, 75, 300);
  line(125, 300, 125, 270);
  line(250, 350, 250, 300);
  line(325, 350, 325, 300);
  line(365, 270, 280, 270);
  line(280, 270, 280, 300);
  line(365, 190, 310, 190);
  line(365, 125, 310, 125);
  pop();
}

function mousePressed() {
  background(32);
  //text
  noStroke();
  fill(255);
  textSize(50);
  text("start", 450, 160);
  text("end", 1039, 670);
}
