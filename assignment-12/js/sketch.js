// x and y for character
var characterX = 200;
var characterY = 100;


// x and y for a shape
var shapeX = 50;
var shapeY = 60;
var shapeXSpeed;
var shapeYSpeed;

// creating 2 shapes when the mouse is clicked
var mouseShapeX;
var mouseShapeY;
var mouseSquareL;
function setup()
{
    createCanvas(600, 600);
    // get a random speed when the it first starts

    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 2);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 2);
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
    fill(23,140,123);
    circle(characterX,characterY,25);

    // handle the keys

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


    // circle enemy
    fill(200,200,96);
    // draw the shape
    circle(shapeX, shapeY, 10);

     // get a random speed when the it first starts
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 4);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // move the shape
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    // check to see if the shape is out of bounds
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

    // check to see if the character won
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Won the Game!", width/2-50, height/2-50);
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
