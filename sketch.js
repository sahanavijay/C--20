var bg,sleep,brush,gym,eat,bath,move;
var astronaut;
function preload(){
  bg=loadImage("iss.png");
  sleep=loadAnimation("sleep.png");
  brush=loadAnimation("brush.png");
  bath=loadAnimation("bath1.png","bath2.png")
  gym=loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png")
  eat=loadAnimation("eat1.png","eat2.png")
  drink=loadAnimation("drink1.png","drink2.png")
  move=loadAnimation("move.png","move1.png")
}


function setup() {
  createCanvas(800,800);

  astronaut= createSprite(300, 230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1
}

function draw() {
  background(255,255,255); 
  textSize(20);
  fill("white") ;
  text("Instruction",20,35);
  textSize(15);
  text("up arrow=brushing",20,55);

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y=340;
  
  }
  
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y=340;
  
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("exercise",gym);
    astronaut.changeAnimation("exercise");
    astronaut.y=340;
  
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y=340;
  
  }

  if(keyDown("SPACE")){
    astronaut.addAnimation("drinking",drink);
    astronaut.changeAnimation("drinking");
    astronaut.y=340;
  }

  
  drawSprites();
}