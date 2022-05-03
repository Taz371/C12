
var trex ,trex_running;
var groundImage;

function preload()
{
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundImage = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200);
  
  //create a trex sprite
  trex = createSprite(50,150,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;

  //create a ground sprite
  ground = createSprite(390, 180, 1000, 20);
  ground.addImage("ground", groundImage);
  ground.x = ground.width/2;

  //createing invisible ground
  invisibleGround = createSprite(390, 200, 1000, 20);
  invisibleGround.visible = false;
}

function draw(){
  background(220);

  console.log(trex.y);
  if (keyDown("space") && trex.y < 170)
  {
    trex.y = trex.y - 10;
  }

  trex.velocityY = trex.velocityY + 0.8;

  if (ground.x < 0)
  {
    ground.x = ground.width/2;
  }

  ground.x = ground.x - 5;
  console.log(ground.x);

  trex.collide(invisibleGround);
  drawSprites();
}
