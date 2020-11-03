const Engine=Matter.Engine; 
const World=Matter.World; 
const Bodies=Matter.Bodies;
var engine,world;
var wall,car; 
var speed,weight;
function setup(){ 
var canvas = createCanvas(400,400); 
engine=Engine.create(); 
world=engine.world; 

speed=random(55,90);
weight=random(400,150);

var wall_options={restitution:1.0}
wall=Bodies.rectangle(100,200,300,200,wall_options);
World.add(world,wall);

car=createSprite(50,200,50,50);
wall=createSprite(300,200,60,height/2);
World.add(world,car);} 
function draw(){ 
background(220);
Engine.update(engine);
car.velocityX=speed;

if(wall.x-car.<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
    if(deformation)>180{
   car.shapeColor(255,0,0) ;  } 
   if(deformation<180 && deformation>100){
    car.shapeColor=colo(230,230,0); }
    if(deformation<180){
        car.shapeColor(0,255,0) ;  }   
   
    )
}
}
