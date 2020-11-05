
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bo4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var bobDiameter=30*2;

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	bob1 =  new Bob(725,275,30);
	bob2 = new Bob(667,275,30);
	bob3 = new Bob(607,275,30);
	bob4 =  new Bob(547,275,30);
  bob5 =  new Bob(487,275,30);
  roof =  new Roof(600,75,400,20);
	rope1 = new Rope(bob1.body,roof.body,bobDiameter*2,0);
	rope2 = new Rope(bob2.body,roof.body,bobDiameter*1,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,-bobDiameter*1,0);
	rope5 = new Rope(bob5.body,roof.body,-bobDiameter*2,0);
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  //console.log(bob1.body.position)
  
  Engine.update(engine);
  

  text(mouseX+" , "+mouseY,mouseX,mouseY);
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-50,y:-45});
    console.log(bob1.body.position.x)

  }
 
}