var cubo;

function setup() {
  createCanvas(400,400);
  cubo=createSprite(200,200,50,50);
}

function draw() 
{
  background(20);
  drawSprites();
  if(keyIsDown(RIGHT_ARROW)){
    cubo.position.x=cubo.position.x + 2;
  }
  if(keyIsDown(LEFT_ARROW)){
    cubo.position.x=cubo.position.x - 2;
  }
}




