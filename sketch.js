var movingRect, fixedRect;



function setup() {
  createCanvas(1200,800);
  movingRect=createSprite(600,400,50,50);
  movingRect.shapeColor="red"
  fixedRect=createSprite(200,400,50,50);
  fixedRect.shapeColor="yellow"
}

function draw() {
  background("black");
  movingRect.y=World.mouseY; 
  movingRect.x=World.mouseX;
  if(movingRect.x - fixedRect.x === fixedRect.width/2 + movingRect.width/2 ||
     fixedRect.x-movingRect.x === fixedRect.width/2 + movingRect.width/2||
     movingRect.y - fixedRect.y === fixedRect.height/2 + movingRect.height/2 || 
     fixedRect.y-movingRect.y === fixedRect.height/2 + movingRect.height/2
      ){
    fixedRect.shapeColor="green";
    movingRect.shapeColor="blue";
  }
  
      drawSprites();
}