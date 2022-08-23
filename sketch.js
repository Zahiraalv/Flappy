var flappy;
var ground, invisibleGround, groundImage;

function preload() {

  groundImage = loadImage("ground2.png");
  flappyImage = loadImage("flappy.gif")
}

function setup() {
createCanvas(600, 400);

//crear sprite de Trex
flappy = createSprite(50,160,20,50);
flappy.addImage("running", flappyImage);
flappy.scale = 0.5;
  
//crear sprite de suelo
ground = createSprite(200,380,400,20);
ground.addImage("ground",groundImage);
ground.x = ground.width /2;
ground.velocityX = -4;
  
invisibleGround= createSprite(200,390,400,10);
}

function draw() {
background(220);

//hacer que el Trex salte al presionar la barra espaciadora
if (keyDown("space")) {
  flappy.velocityY = -10;
}

flappy.velocityY = flappy.velocityY + 0.8

if (ground.x < 0) {
 ground.x = ground.width / 2;
}

flappy.collide(invisibleGround);
invisibleGround.visible = false;

drawSprites();
}
