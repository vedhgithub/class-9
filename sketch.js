
function setup() {
  createCanvas(600,600);
  box=createSprite(200,200,20,20)
  box1=createSprite(300,300,30,30)
  box2=createSprite(400,400,40,40)
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
    box.position.x=box.position.x+5
  }
  if (keyIsDown(LEFT_ARROW)) {
    box1.position.x=box1.position.x-5
    
  }
  if (keyIsDown(UP_ARROW)) {
    box2.position.y=box2.position.y-5
    
  }

 drawSprites()
}




