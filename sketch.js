const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform1, platform2;
var polygon_img;

function preload(){
    polygon_img = loadImage("ball.png");
}

function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;
  strokeWeight(1);
  platform1 = new Ground(490, 350, 300, 20);
  platform2 = new Ground(850, 250, 250, 20);
  ground = new Ground(500,470,1000,20);

  //platform 1
  //layer 1
  box1 = new Box(400, 320, 30, 40);
  box2 = new Box(430, 320, 30, 40);
  box3 = new Box(460, 320, 30, 40);
  box4 = new Box(490, 320, 30, 40);
  box5 = new Box(520, 320, 30, 40);
  box6 = new Box(550, 320, 30, 40);
  box7 = new Box(580, 320, 30, 40);
  
  //layer 2
  box8 = new Box1(430, 280, 30, 40);
  box9 = new Box1(460, 280, 30, 40);
  box10 = new Box1(490, 280, 30, 40);
  box11 = new Box1(520, 280, 30, 40);
  box12 = new Box1(550, 280, 30, 40);
  
  //layer 3
  box13 = new Box(460, 240, 30, 40);
  box14 = new Box(490, 240, 30, 40);
  box15 = new Box(520, 240, 30, 40);
  
  //top layer
  box16 = new Box1(490, 200, 30, 40);

  //platform 2
  //layer 1
  box17 = new Box1(790, 220, 30, 40);
  box18 = new Box1(820, 220, 30, 40);
  box19 = new Box1(850, 220, 30, 40);
  box20 = new Box1(880, 220, 30, 40);
  box21 = new Box1(910, 220, 30, 40);
  
  //layer 2
  box22 = new Box(820, 180, 30, 40);
  box23 = new Box(850, 180, 30, 40);
  box24 = new Box(880, 180, 30, 40);
  
  //top layer
  box25 = new Box1(850, 140, 30, 40);

  polygon = new Ball(100, 250, 30 , 30);
  slingShot = new Chain(polygon.body, {x: 100, y: 200});
}

function draw() {
  background(255,255,255);
  Engine.update(engine);  
  platform1.display();
  platform2.display();
  ground.display();
 
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();
  box15.display();
 
  box16.display();
 
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  box22.display();
  box23.display();
  box24.display();

  box25.display();
 
  slingShot.display();
  polygon.display();
  drawSprites();
}
function mouseDragged() {
  Matter.Body.setPosition(polygon.body,{x: mouseX,y: mouseY});
}

function mouseReleased() {
  slingShot.fly();
}
function keyPressed() {
  if (keyCode === 32) {
    slingShot.attach(polygon.body);
  }
}