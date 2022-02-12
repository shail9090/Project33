var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var particle;
var turn=0;
var gameState="start";
var divisionHeight=300;
var divisions = [];
var score = 0;
var count=0;


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    
      }


    
}
 
function mousePressed()
{
 // console.log("I am here");
    if(gameState!=="end")
    {
      count++;
      particle=new Particle(mouseX, 10, 10, 10);
    }
}



function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  text("score:",690,40)
  text(score,750,40);

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  //  if(frameCount%60===0){
  //    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  //    score++;
  //  }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

 console.log(particle);
 console.log(count);
   if(particle!=null)
   {
       particle.display();
      console.log(particle.body.position.x);
         if(particle.body.position.y>760)
         {
            if(particle.body.position.x<300)
           {
               score=score+500;
           } 
          
           if(particle.body.position.x>=300 && particle.body.position.x<500)
           {
               score=score+100;
           } 
          
           if(particle.body.position.x>=600 && particle.body.position.x<900)
           {
             score=score+200;
           }

         particle=null;
         if(count>= 5) gameState = "end";

       } // for y
     
       
     } // if particle is null
}