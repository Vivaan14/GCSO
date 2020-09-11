var car ,wall;
var speed,weight;
function setup() {
  createCanvas(1600,800);
   speed = random(55,90);
   weight = random(400,1500);
   var deformation = 0.5*weight*speed*speed/2250;
 car = createSprite(50,200,50,50);
  car.velocityX = speed;
  car.shapeColor = "white"
  var wall = createSprite(1000,200,60,445);
  wall.shapeColor = "black";

}

function draw() {
  background(0,0,255);
  if(wall.x - car.x < car.width+wall.width/2)  {
  car.velocityX = 0;
  if(deformation>180){
  car.shapecolor = color(255,0,0);
  }
  if(deformation>100 && deformation<100){
  car.shapecolor = color(230,230,0);
  }
  if(deformation<100){
  car.shapecolor = color(0,255,0);
  }
  }
  drawSprites();
}