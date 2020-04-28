var car1,wall;
var speed1, weight1; 
function setup() {
  createCanvas(1600, 400);
  speed1=random(55,90)
  weight1=random(400,1500)
  
  car1=createSprite(50, 200, 50,50);   
  car1.velocityX = 0;
  car1.shapeColor=color(255);

  wall=createSprite(1500,200, 60,400);
  wall.shapeColor=color(80,80,80);
}


function draw() 
{
  background(0);

  if(keyDown("space"))
  {
    car1.velocityX = speed1;
  }

  if(wall.x - car1.x < (car1.width + wall.width)/2)
  {
  	car1.velocityX =  0;
  	var deformation = 0.5 * weight1 * speed1 * speed1/22509;
	if(deformation>180)
	{
		car1.shapeColor = color(255,0,0);
	}

	if(deformation<180 && deformation>100)
	{
		car1.shapeColor = color(230,230,0);
	}

	if(deformation<100)
	{
		car1.shapeColor = color(0,255,0);
	}
  }  
  
  drawSprites();
 
}