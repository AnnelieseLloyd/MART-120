// x and y for my character
var characterX = 100;
var characterY = 100;
// define the key codes for each letter
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

// creating 2 shapse when the mouse is clicked
var mouseShapeX;
var mouseShapeY;
var mouseSquareL;
function setup()
{
    createCanvas(600, 600);
    // get a random speed when the it first starts

    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}

function draw()
{
    background(120,85,110);
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
  //rules text
    fill (25,200,205);
    text('Here are the Rules:',200,30);
    text('Move the circle with keyboard and try to go around obstacles',70,50);
    text('Make it to the exit to win',180,70);
  //obstacle
  rect(200,275,23,40)
    // exit message
    textSize(16);
    text("EXIT", width-50,height-50)

    //character
    fill(23,40,123);
    circle(characterX,characterY,25);

    // handle the keys
    if(keyIsDown(w))
    {
        characterY -= 10;
    }
    if(keyIsDown(s))
    {
        characterY += 10;
    }
    if(keyIsDown(a))
    {
        characterX -= 10;
    }
    if(keyIsDown(d))
    {
        characterX += 10;
    }

    // potential enemy
    fill(200,200,96);
    // draw the shape
    circle(shapeX, shapeY, 10);

     // get a random speed when the it first starts
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // move the shape
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    // check to see if the shape has gone out of bounds
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

    // check to see if the character has left the exit
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }

    // create the shape based on the mouse click
    fill(120,200,140);
    rect(mouseShapeY, mouseShapeX, 20);
    fill(200,20,200);
    circle(mouseShapeX, mouseShapeY, 30);

}

function mouseClicked()
{

    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
    mouseShapeL = 30
}
/*
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        characterX -= 10;
    }
    else if (keyCode === RIGHT_ARROW) {
        characterX += 10;
    }
    else if (keyCode === UP_ARROW) {
        characterY -= 10;
    }
    else if (keyCode === DOWN_ARROW) {
        characterY += 10;
    }
  }
  */
