
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1, box2, box3, box4, ground1;
var paperBall;

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
		
	//Create the Bodies Here.
	ground1 = new Ground(0,630,1600,20);
	box1=new Box(width-260,570,20,100);
	box2=new Box(width-40,570,20,100);
	box3=new Box(width-150,610,200,20);
	paperBall=new PaperBall(50,628,18);
	
	Engine.run(engine);
}


function draw() {
	background(0);
	fill("white");
	ground1.display();
	box1.display();
	box2.display();
	box3.display();
	paperBall.display();
	drawSprites();
 }
function keyPressed() {
    if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:70, y:-70})
    }
}



