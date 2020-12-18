const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;
    
    box1 = new Box(600,580,50,50);
    box2 = new Box(800,580,50,50);
    
    ground = new Ground(500,height,1000,20);
    pig1= new Pig(700,580);
   
    log= new Log(700,530,275,PI/2);
   
    box3 = new Box(600,500,50,50);
    box4 = new Box(800,500,50,50);
    pig2= new Pig(700,500);
    log2=new Log(700,470,275,PI/2);
    box5=new Box(700,450,50,50);
    log3=new Log(630,450,125,PI/7);
    log4=new Log(770,450,125,-PI/7);
    bird=new Bird(300,700);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(log3)
    //console.log(box2.body.position.x);
   // console.log(box2.body.position.y);
   // console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    pig1.display();
    pig2.display();
    log.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();


}