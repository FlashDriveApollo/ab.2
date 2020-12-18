const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,350,70,70);
    box2 = new Box(900,350,70,70);
    ground = new Ground(600,height,1200,20);
    Pig1=new Pig(800, 350);
    Bird1=new Bird(100, 100);
    Log1=new Log(800, 330, 300, PI/2);

    box3=new Box(700, 250, 70, 70);
    box4=new Box(900, 250, 70, 70);
    Pig2 = new Pig(800, 250);
    Log2 = new Log(800, 230, 300, PI/2);

    box5=new Box(800, 170, 70, 70);
    Log5 = new Log(750, 120, 150, PI/7);
    Log6 = new Log(850, 120, 150, -PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    Pig1.display();
    Bird1.display();
    box2.display();
    ground.display();
    Log1.display();

    box3.display();
    box4.display();
    Pig2.display();
    Log2.display();

    box5.display();
    Log5.display();
    Log6.display();
}