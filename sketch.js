const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var box1;
var box2;
var ground;

function setup()
{
var canvas= createCanvas(400,400);
engine=Engine.create();
world=engine.world;

 box1=new Box(200,300,50,50);
 box2=new Box(240,100,50,100);
 //box3=new Box(11,12,11,11);
 ground=new Ground(10,390,1400,20);

}
function draw(){
 background(0);
  Engine.update(engine);
   box1.display();
   box2.display();
   // box3.display();
    ground.display();
  }