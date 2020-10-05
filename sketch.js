var fixed_rect, moving_rect;


function setup() {
  createCanvas(800,400);

  fixed_rect = createSprite(400, 200, 50, 50);
  fixed_rect.shapeColor = 'green'
  moving_rect = createSprite(600, 200, 80, 40);
  moving_rect.shapeColor = 'green'
  //moving_rect.velocityX=-3;
}

function draw() {
  background('lightblue'); 
  
  
moving_rect.x = mouseX;
moving_rect.y = mouseY;



if(moving_rect.x - fixed_rect.x ==fixed_rect.width/2 + moving_rect.width/2
  && fixed_rect.x - moving_rect.x ==fixed_rect.width/2 + moving_rect.width/2 && 
  moving_rect.y-fixed_rect.y==moving_rect.height/2 + fixed_rect.height/2
  && fixed_rect.y-moving_rect.y==moving_rect.height/2 + fixed_rect.height/2){

  //  moving_rect.velocityX=moving_rect.velocityX*(-1)
   
    

  fixed_rect.shapeColor = 'red'
  moving_rect.shapeColor = 'red'

}
else{
  fixed_rect.shapeColor = 'green'
  moving_rect.shapeColor = 'green'

}


  drawSprites();
}