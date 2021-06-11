
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, groundObject, paperObject;	
var world, engine;

function setup() {
	createCanvas(1400, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(800,590);
	dustbinObj=new dustbin(1200,650);
	paperObject = new Paper(40,40,20);
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(100);
 
  groundObject.display();
  dustbinObj.display();
  paperObject.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:95,y:-95})
	}
}

