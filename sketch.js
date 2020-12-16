var bullet, wall;
var speed, weight;
var Thickness;

function setup() {
  createCanvas(1600,400);

speed=random(55,90)
weight=random(400,1500)

bullet=createSprite(50,200,20,20)

wall=createSprite(1500,200,60, height/2)

bullet.VelocityX = speed;


}

function draw() {
  background(255,255,255);  
 
  weight=32;
  Thickness=70;
  bullet.velocityX=233;
  var damage=(0.5 * weight * speed* speed)/(Thickness * Thickness * Thickness);

if(damage>9)
{
  wall.shapeColor=color(255,0,0);
  bullet.shapeColor=color(255,0,0);
}

if(damage<9)
{
  wall.shapeColor=color(0,255,0);
  bullet.shapeColor=color(0,255,0);
}


drawSprites();
}  




