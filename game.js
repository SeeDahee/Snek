var player;
var enemy;
var angle;
var speed;



function setup() 
{
  createCanvas(800,400);

  speed = 1;
  angle = 270;

  var snek = loadImage("snek.png");
  var cat = loadImage("cat.png");

  player= createSprite(800, 100, 50, 50);
  player.addImage("main", snek);
  player.scale = .4;

  enemy= createSprite(400, 250, 50, 50);
  enemy.addImage("cat", cat);
  
}

function draw() 

{
  background(10);  
  enemy.setSpeed(speed, angle);
  drawSprites();
  checkForWallCollisions();
  
  if (player.overlap(enemy)) 
  {
    alert("MEOW!!!! You got caught!");
  }
}

function checkForWallCollisions() 

{
  if (enemy.position.x > 800) 
  
  {
  	angle = 180;
  }

  if (enemy.position.x < 0) 
  
  {
  	angle = 0;
  }

  if (enemy.position.y > 330) 
  
  {
  	angle = 270;
  }

  if (enemy.position.y < 75) 
  
  {
  	angle = 90;
  }

}

function keyPressed() 
{
  if (keyCode == RIGHT_ARROW) 
  {
    player.setSpeed(1.5, 0);
  }
  else if (keyCode == DOWN_ARROW) 
  {
    player.setSpeed(1.5, 90);
  }
  else if (keyCode == LEFT_ARROW) 
  {
    player.setSpeed(1.5, 180);
  }
  else if (keyCode == UP_ARROW) 
  {
    player.setSpeed(1.5, 270);
  }
}