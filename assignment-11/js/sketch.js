var headX = 240;
var headY = 70;
var headDirection = 1;

var pointleftX = 210;
var pointrightX = 260;
var pointY = 55;
var eyedirection = 1;

var neckX = 215;
var neckY = 50;
var neckdirection = 1;

var mouthX = 240
var mouthY = 205
var mouthdirection = 1;
var mouthgoing = 1;

var bodyX = 80;
var bodyY = 240;
var bodyDirection = 1.5;
//80, 325, 240, 170, 375, 325

var hairX = 210;
var hairY = 150;
var hairdirection = 3;
var hairgoing = 1;

var shoulderX = 210;
var shoulderY = 150
var shoulderdirection = 2;


var size = 22;
var textX = 300
var textY = 150
var textdirection = 1;
var textydirection =1;
var count = 0;
var sizeDirection = 2;
function setup()
{
  createCanvas(500,600);
}
function draw()
{
  background(120,45,78);
  text('Anneliese in 2D', 100, 410);
  fill(255,255,255);
  textSize(10);
  fill(210, 180, 140);
  // arms
  line(320, 380, 255, 295)
  line(140, 360, 255, 295)
  line(140, 160, 205, 195)
  line(240, 260, 305, 135)
  // neck

  rect(neckX,100,neckY,70);
    neckX+=neckdirection;
    if(neckX >= 355 || neckX <= 40)
    {
        neckdirection *= -1;
    }
  // head direction

    circle(headX,headY,125);
    headX+=headDirection;
    if(headX >= 380 || headX <= 65)
    {
        headDirection *= -1;
    }


  // mouth moving
  line(mouthX, 100, mouthY, 95);
  mouthX+= mouthdirection;
  mouthY+= mouthgoing;
      if(mouthX >= 380 || mouthX <= 65)
    {
        mouthdirection *= -1;
      mouthgoing *= -1;
    }

  strokeWeight(10);
  stroke('blue');
  //eyes left to then right then left
  point(pointleftX, pointY);
  pointleftX+=eyedirection;
      if(pointleftX >= 400 || headX <= 65)
    {
        eyedirection *= -1;
    }
  //righteye
    point(pointrightX, pointY);
  pointrightX+=eyedirection;
      if(pointrightX >= 400 || headX <= 6)
    {
        eyedirection *= -1;
    }


  stroke('brown');
  // hair moving out

  line(hairX, 20, hairY, 105);

  line(200, 30, 140, 105);
  line(260, 10, 380, 105);
  line(260, 20, 370, 105);
  line(200, 20, 270, 5);

  strokeWeight(1);
  stroke('black');
  fill(0,255,255);
    if(shoulderY <=200)
    {
      fill('purple');
    }

  // body up and down
  triangle(80, 325, 240, bodyY, 375, 325);
     bodyY += bodyDirection;
    if(bodyY <= 100 || bodyY >= 450 )
    {
        bodyDirection *= -1;

    }
//shoulders
square(shoulderX,shoulderY, 60);
  shoulderY += shoulderdirection;
  if(shoulderY <=0 || shoulderY >= 450)
{
  shoulderdirection *= -1;
}

  // text change
  text('By: Anneliese Lloyd', textX, textY);
  textX += textdirection;
  textY += textydirection;
    if(textX <=98 || textX >= 400|| textY <=0 || textY >= 300)
{
  textdirection *= -1;
  textydirection *= -1;
}
  fill(0,255,255);
  if(sizeDirection >=1)
    {
      fill('purple');
    }
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 50)
    {
        sizeDirection *=-1;
        count = 0;
    }






}
