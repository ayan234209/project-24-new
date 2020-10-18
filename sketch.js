
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var log1,log2,log3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700)
	engine = Engine.create();
	world = engine.world;

ground=new ground(400,660,800,20)

 

paperObject=new paper(200,500,20);
console.log(paperObject);

bottomSprite=createSprite(650,650,200,20);
bottomSprite.shapeColor=("red");

leftSprite=createSprite(550,610,20,100);
leftSprite.shapeColor=("red");

rightSprite=createSprite(750,610,20,100);
rightSprite.shapeColor=("red");

leftBody = Bodies.rectangle(550, 610, 20, 100 , {isStatic:true} );
	 World.add(world,leftBody);

bottomBody = Bodies.rectangle(650, 650, 200, 20 , {isStatic:true} );
   World.add(world,bottomBody);
   
   rightBody = Bodies.rectangle(750, 610, 20, 100 , {isStatic:true} );
	 World.add(world,rightBody);

	//Create the Bodies Here.

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paperObject.display();
 
  drawSprites();
 
}
function keyPressed(){
if(keyCode===UP_ARROW){

Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:50,y:-50});

}


}



