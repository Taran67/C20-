const Engine=Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;

var myWorld,myEngine,ground,rock, ground2, rock2;

function setup() {
  createCanvas(400,400);

  myEngine=Engine.create();
  myWorld=myEngine.world;

  //JSON
  var ground_option={
    isStatic:true,
    denisty:1
  }

  var rock_option={
    restitution:1,
    
  }
  

  ground=Bodies.rectangle(200,380,380,20,ground_option);
  World.add(myWorld,ground);
  console.log(ground);
  
  rock = Bodies.circle(100, 10, 20, rock_option);
  World.add(myWorld, rock);
  console.log(rock);

  ground2 = Bodies.rectangle(100, 200, 180, 20, ground_option)
  World.add(myWorld, ground2)
  console.log(ground2)

  rock2 = Bodies.circle(250, 50, 20, rock_option)
  World.add(myWorld, rock2)
  console.log(rock2)

}


function draw() 
{
  background("black");
  Engine.update(myEngine);
   
  push();
  rectMode(CENTER);
  fill("red")
  rect(ground.position.x,ground.position.y,380,20);
  pop();

  push();
  rectMode(CENTER);
  fill("white")
  rect(ground2.position.x,ground2.position.y,380,20);
  pop();
  
  push();
  fill("yellow")
  ellipseMode(RADIUS)
  ellipse(rock.position.x, rock.position.y, 20)
  pop();

  push();
  fill("cyan")
  ellipseMode(RADIUS)
  ellipse(rock2.position.x, rock2.position.y, 20)
  pop();
  
}

