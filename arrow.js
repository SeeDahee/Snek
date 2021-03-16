var sprite;


function setup() 
{
  createCanvas(800, 400);
  var snek = loadImage("snek.png");

  sprite = createSprite(400, 250, 50, 50);
  sprite.addImage("main", snek);
  sprite.scale = .8;

}


function draw() 
{
  background(255);
  drawSprites();
  
}


function keyPressed() 
{
  if (keyCode == RIGHT_ARROW) //if the right arrow is pressed
  {
    sprite.setSpeed(1.5, 0); //snek move to the right 
  }
  else if (keyCode == DOWN_ARROW) //if the down arrow is pressed
  {
    sprite.setSpeed(1.5, 90); //snek move down
  }
  else if (keyCode == LEFT_ARROW) //if the left arrow is pressed
  {
    sprite.setSpeed(1.5, 180); //snek move left
  }
  else if (keyCode == UP_ARROW) //if the up arrow is pressed
  {
    sprite.setSpeed(1.5, 270); //snek move up
  }

}