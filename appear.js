var sprite;


function setup() 
{
  createCanvas(800, 600);
  //this make the game space

  var snek = loadImage("snek.png");
  //we are calling snek into the code

  sprite= createSprite(400, 250, 50, 50);
  sprite.addImage("main", snek);
  //make the sprite and then connect the image to the sprite


}
function draw() 
{
  background(255);
  drawSprites(); //make snek appear on the canvas!
}