var sprite;

function setup() 
{
    createCanvas(800, 600);

    var snek = loadImage("snek.png");

    sprite = createSprite(400, 250, 50, 50);
    sprite.addImage("main", snek);
    sprite.mouseActive = true;
    //connect the mouse to the sprite
}


function draw() 
{
    background(255, 255, 255);

    if (sprite.mouseIsOver){ //if the mouse is on the sprite
        sprite.rotation = -10; //sprite rotates a lil
    }

    else //if the mouse is NOT on the sprite
    {
        sprite.rotation = 0; //sprite does not move
    }

    drawSprites();
}
