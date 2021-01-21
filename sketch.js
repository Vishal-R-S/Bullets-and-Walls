var bullet, speed, weight;
var wall, thickness;

function setup ()
{
  createCanvas(1366, 400);

  speed = random(223,331);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(200, 200, 50, 20);
  bullet.shapeColor = "blue";
  wall = createSprite(1300, 200, thickness, height/2);
  wall.shapeColor = "yellow";
}

function draw ()
{
  background("black");

  bullet.velocityX = speed;
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage = 0.5*weight*speed*speed/thickness*thickness*thickness;
    if(damage > 10)
    {
      wall.shapeColor = color(255,0,0);
    }
    if(damage < 10)
    {
      wall.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}