const Engine = Matter.Engine; //laws of Physics
const World = Matter.World; // will apply the laws of physics on all the bodies inside the world
const Bodies = Matter.Bodies; //individual body properties
const Constraint = Matter.Constraint;


var engine, world;
var ground,ground2;
var box1,box2,box3;
var ball1;
var rope;



function setup() {
  createCanvas(1200,400);

  engine = Engine.create()
  world = engine.world;

  ground = new Ground(600,375,1200,10);

  box1 = new Box(200,50,100,100);

  box2 = new Box(200,100,100,100);

  box3 = new Box(200,150,100,100);

  ball1 = new Ball(500,200,50);

  ground2 = new Ground(500,50,230,10);

  rope = new Rope(ball1.ball,ground2.body);

  

}

function draw() {
  background(220,255,255);  
  
  Engine.update(engine);

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  ball1.display();
  ground2.display();
  rope.display();
  

  

}

function keyPressed()
{
  
  if(keyCode === UP_ARROW)
  {
    console.log(ball1);
    Matter.Body.applyForce(ball1.ball,ball1.ball.position,{x:-50,y:-50});
  }
}
