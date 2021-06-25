 const Engine = Matter.Engine
 const World = Matter.World
 const Bodies = Matter.Bodies
 const Constraint = Matter.Constraint
  
 var particles=[];
 var plinkos=[];
 var divisionsHeight=300;
 var divisions=[];
 var ground;

function setup() 
{
  createCanvas(600,600);
  myengine = Engine.create()
  myworld = myengine.world
  
  ground = new Ground(200,590,800,20)

  for(var s=0; s<=width; s=s+80)
  {
   divisions.push(new Divisions(s,height-divisionsHeight/2,divisionsHeight,10))
  }
  
  for(var p=10; p<=width; p=p+50)
  {
    plinkos.push(new Plinko(p,75));
  }
   
  for(var p=50; p<=width-10; p=p+50)
  {
   plinkos.push(new Plinko(p,175));
  }

  for(var p=100; p<=width; p=p+50)
  {
   plinkos.push(new Plinko(p,275))
  }

  for(var p=150; p<=width;p=p+50)
  {
    plinkos.push(new Plinko(p,375))
  }


  Engine.run(myengine)

  
}
function draw()
{
  rectMode(CENTER)
  background(0); 
  drawSprites();

   if(frameCount%60===0)
   {
     //shalini only pass x and y axis
    particles.push(new Particles(random(width/2-10,width/2+10),10))
   }

   for(var i=0; i<particles.length;i++)
   {
    particles[i].display();
   }
   
  for(var s = 0; s<divisions.length;s++)
  {
   divisions[s].display();
  }

  for(var p = 0; p<plinkos.length;p++ )
  {
    plinkos[p].display();
  }

  ground.display()

 }
