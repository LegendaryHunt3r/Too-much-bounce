const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
var engine,w;
var ball;
function setup() {
  createCanvas(800,10000);
  
  engine=Engine.create();
  w=engine.world;

  pig1=new pig(150,300);
  pig2=new pig(150,180);

  log1=new log(150,220,300,90);
  log2=new log(150,80,300,90);
  log3=new log(190,-100,100,-15);
  log4=new log(90,-100,100,15);

//ball=Bodies.circle(400,200,50,{restitution:0.5,density:0.0000001})

//World.add(w,ball);

var property={isStatic:true,friction: 1};

  ground=Bodies.rectangle(200,400,400,20,property);
  World.add(w,ground);

  box1=new Box(100,300,80,80);
  box2=new Box(200,300,80,80);
  box3=new Box(100,180,80,80);
  box4=new Box(200,180,80,80);
  box5=new Box(150,2,80,80);

Engine.run(engine);
console.log(ground.position.x);
}

  function draw() {
  background(255,255,255);  
  rectMode(CENTER);
  rect (ground.position.x,ground.position.y,400,20);
//ellipseMode(RADIUS);
 // ellipse (ball.position.x,ball.position.y,50,50)

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  pig1.display();
  pig2.display();

  log1.display();
  log2.display();
  log3.display();
  log4.display();
}