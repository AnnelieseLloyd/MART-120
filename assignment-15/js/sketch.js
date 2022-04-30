// x and y for character
var characterX = 200;
var characterY = 100;


// x and y for a shape
var shapeX = 50;
var shapeY = 60;
var shapeXSpeed;
var shapeYSpeed;

//array
var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];


// creating 2 shapes when the mouse is clicked
var mouseShapeX;
var mouseShapeY;
var mouseSquareL;

//calling rect.js
var rectangleObject;
var rectangleObject2;
var rectangleObject3;

function setup()
{
    createCanvas(600, 600);
    // call function random speed when the it first starts
    rectangleObject = new Rectangle(100,200,10,50,120,35,200);
    rectangleObject2 = new Rectangle(200,350,10,59,23,420,34);
    rectangleObject3 = new Rectangle(350,703,10,52,456,23,120);
    //random movement
    random();
    // get a random speed when the it first starts
 for (var i = 0; i < 50; i++) {
     shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeXs[i] = getRandomNumber(500);
     shapeYs[i] = getRandomNumber(600);
     diameters[i] = getRandomNumber(30);
 }

}
//calling rectangle made in seperate pg



function draw()
{


    background(120,85,110);
    // call border function
    borders();

    //displaying rectangle
    rectangleObject.display();
    rectangleObject2.display();
    rectangleObject3.display();



  //function text
textrulesandexit();
  //function obstacle
obstacle();




    //call character
character();

    // call the keys
charactermovement();


    // call circle enemy
enemy();

     // call a random speed when the it first starts and move shape
xandyshapespeedsandmovement();
    // call shape is out of bounds
outofbounds();


    // call to see if the character won
youwon();

    // call the shapes based on the mouse click
mouseclickshapes();

}
     // function a random speed when the it first starts and move shape
//function xandyshapespeedsandmovement()
{
// function get a random speed when the it first starts

//shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 4);
//shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

// move the shape

//shapeX += shapeXSpeed;
//shapeY += shapeYSpeed;
}
// draw the shape
  for (var i = 0; i < shapeXs.length; i++) {
      circle(shapeXs[i], shapeYs[i], diameters[i]);
      shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
      shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);




      // move the shape
      shapeXs[i] += shapeXSpeeds[i];
      shapeYs[i] += shapeYSpeeds[i];
      // check to see if the shape has gone out of bounds
      if (shapeXs[i] > width) {
          shapeXs[i] = 0;
      }
      if (shapeXs[i] < 0) {
          shapeXs[i] = width;
      }
      if (shapeYs[i] > height) {
          shapeYs[i] = 0;
      }
      if (shapeYs[i] < 0) {
          shapeYs[i] = height;
      }
  // function shape is out of bounds
function outofbounds()
{
  if(shapeX > width)
  {
      shapeX = 0;
  }
  if(shapeX < 0)
  {
      shapeX = width;
  }
  if(shapeY > height)
  {
      shapeY = 0;
  }
  if(shapeY < 0)
  {
      shapeY = height;
  }
}
// function to see if the character won
function youwon()
{
  if(characterX > width && characterY > width-50)
  {
      fill(0);
      stroke(5);
      textSize(26);
      text("You Won the Game!", width/2-50, height/2-50);
  }
}
// function the shapes based on the mouse click
function mouseclickshapes()
{
  fill(120,200,140);
  rect(mouseShapeY, mouseShapeX, 20);
  fill(200,20,200);
  circle(mouseShapeX, mouseShapeY, 30);
}
  // function the keys
function charactermovement()
{

      if(keyCode === DOWN_ARROW)
      {
          characterY += 5;
      }
      if(keyCode === UP_ARROW)
      {
          characterY -= 5;
      }
      if(keyCode === LEFT_ARROW)
      {
          characterX -= 5;
      }
      if(keyCode === RIGHT_ARROW)
      {
          characterX += 5;
      }
}
  //function buld enemy circle
function enemy()
{
  fill(200,200,96);
  // draw the shape
  circle(shapeX, shapeY, 10);
}
  //function character
function character()
{
  fill(23,140,123);
  circle(characterX,characterY,25);
}
  // function border
function borders()
{
  stroke(2);
  fill(120,120,120);
  // top border
  rect(0,0,width,10);
  // left border
  rect(0,0,10,height);
  // bottom border
  rect(0, height-10,width, 10);
  // right upper border
  rect(width-10,0,10,height-50);
}



  //function characters mouseclick
function mouseClicked()
{

    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
    mouseShapeL = 30
}
//function of text and exit
function textrulesandexit()

{
  fill (25,200,205);
  text('Here are the Rules:',200,30);
  text('Move the circle with keyboard and try to go around obstacles',70,50);
  text('Make it to the exit to win',180,70);
  // exit message
  textSize(16);
  text("EXIT", width-50,height-50);
}
function obstacle()
{
    rect(200,275,23,40);
}
function random()
{
  // get a random speed when the it first starts

  shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 2);
  shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 2);

}
