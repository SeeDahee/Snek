var sprite;


function setup() 
{
  createCanvas(800, 600);

  var snek = loadImage("snek.png");

  sprite= createSprite(400, 250, 50, 50);
  sprite.addImage("main", snek);


  sprite.velocity.y = 0.5; //defining speed of snek's fall and the direct of snek's movement
  sprite.scale = .8; //making snek a lil smaller to fit
}
function draw() 
{
  background(255);
  drawSprites();
}
function mousePressed() 
{
  sprite.position.x = mouseX; //snek appears where the mouse is on the X plane
  sprite.position.y = mouseY; //snek appears where the mouse is on the Y plane
}