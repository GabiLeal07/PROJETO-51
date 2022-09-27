var alexWesley, zombie, tiro; 
var edges;
var zombieGroup;
var backgroundImage;
var zombieImage;
var alexWesleyImage
var tiroImage;

function preload() {
   backgroundImage = loadImage("fundo.jpg");
   zombieImage = loadImage("zombieee.png");
   alexWesleyImage = loadImage("alex.png");
   tiroImage = loadImage("bala.png");
}


function setup() {
  createCanvas(1000,400);

  alexWesley = createSprite(30, 350, 20,20);
  alexWesley.addImage("alexWesley", alexWesleyImage);
    alexWesley.scale = 0.09;

  edges = createEdgeSprites();
}

function draw() {
  background(backgroundImage);
  alexWesley.bounceOff(edges);
  moveAlex();
  shoot();
  geraZombie();

  zombieGroup = new Group();
  
  drawSprites();

}


  function moveAlex(){
    
    if(keyDown(UP_ARROW)){
      alexWesley.y -= 5
    }
    if(keyDown(DOWN_ARROW)){
      alexWesley.y += 5
    }
  
    if(keyDown(LEFT_ARROW)){
      alexWesley.x -= 5
    }
  
    if(keyDown(RIGHT_ARROW)){
      alexWesley.x += 5
    }
  }

function shoot(){
  if(keyWentDown("space")){
    
    var tiro = createSprite(alexWesley.x, alexWesley.y, 5,5);
    tiro.velocityX = 10;
    tiro.addImage("tiro", tiroImage);
    tiro.scale = 0.06;
  }
}

function geraZombie(){
  if(frameCount % 50 == 0 ){
    zombie = createSprite(970, random(20,380),10,10);
    zombie.velocityX = -2;
    zombieGroup.add(zombie);
    zombie.addImage("zombie", zombieImage);
    zombie.scale = 0.08;
  }
}

//adicionar imagens pros personagens
//escolham um fundo