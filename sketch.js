const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particle = [];
var plinkos = [];
var divitions = [];
var divisionHeight=300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);

  ground = new Ground(600,height,1200,20);

 
  for (var j = 20; j <=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for (var x = 15; x <=width-10; x=x+50){
    plinkos.push(new Plinko(x,175));
  }
  
  for (var j = 10; j <=width; j=j+50){
    plinkos.push(new Plinko(j,275));
  }

  for (var j = 5; j <=width; j=j+50){
    plinkos.push(new Plinko(j,375));
  }

  for (var k= 0; k <=width; k=k+80){
    divitions.push(new DIVITION(k,height-divisionHeight/2,10,divisionHeight));
  }
  
}
function draw() {
  background(0); 
  Engine.update(engine); 
  
  //drawSprites();
  
  ground.display();
 // line1.display();
  //line2.display();
 //line3.display();
 //line4.display();
 //line5.display();
//line6.display();

for (var j = 0; j < plinkos.length; j++)
{
  plinkos[j].display(); 
}



for (var k = 0; k < divitions.length; k++)
{
  divitions[k].display(); 
}

if(frameCount%40===0){
  particle.push(new particlE(random(width/2-10, width/2+10),10,10));
}

for (var j= 0; j < particle.length; j++)
{
  particle[j].display(); 
}

}
