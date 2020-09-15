var monkey,monkeyImage;
var invisibleGround;
var bananaImage,bananaGroup;
var jungle,jungleImage;
var stoneImage,stoneGroup;
var score;

function preload(){
  
  monkeyImage = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage = loadImage("banana.png");
  
  jungleImage = loadImage("jungle.jpg");
  
  stoneImage = loadImage("stone.png");
  
  }

function setup(){

  createCanvas(400,400);
  
  jungle = createSprite(200,200,10,10);
  jungle.addImage("jungle",jungleImage);
  jungle.x = jungle.width /2;
  jungle.velocityX = -2;
  
    monkey = createSprite(54,344,10,10);
  monkey.addAnimation("monkey",monkeyImage);
  monkey.scale = 0.10;
  
   invisibleGround = createSprite(62,376,400,10);
  invisibleGround.visible = false;
  
   score = 0;
  
  bananaGroup = new Group();
  
  stoneGroup = new Group();
  
}

function draw(){
  
  background(225);

  monkey.collide(invisibleGround);
  
  score = score + 1;
  
  if(keyDown("space")){
  monkey.velocityY = -6;
  }

   monkey.velocityY = monkey.velocityY + 0.8;
  
  if(monkey.y < 121){
  monkey.velocityY = monkey.velocityY + 20;
  }
  
  if(jungle.x < 0){
  jungle.x = jungle.width/2;
  }
  
    if(bananaGroup.isTouching(monkey)){
    monkey.scale = monkey.scale + 0.01;
    bananaGroup.destroyEach();
  }
  
    if(stoneGroup.isTouching(monkey)){
    monkey.scale = monkey.scale - 0.01;
    stoneGroup.destroyEach();
    score = 0;
  }   
  
  drawSprites();
  
  textSize(15);
  fill("black");
  text("SCORE :" + score,276,26);
  
  spawnBanana();
  
  stone();
  
}

function spawnBanana(){
  if(frameCount % 60 === 0){
  var banana = createSprite(400,320,10,10);
  banana.addImage("banana",bananaImage);
  banana.y = Math.round(random(161,245));
  banana.scale = 0.05;
  banana.velocityX = -3;
  banana.lifetime = 200;
    bananaGroup.add(banana);
  }
  
}

function stone(){
  if(frameCount % 80 === 0){
  var stone = createSprite(400,350,10,10);
  stone.addImage("stone",stoneImage);
  stone.x = Math.round(random(400,0));
  stone.scale = 0.1;
  stone.velocityX = -3;
  stone.lifetime = 200;
    stoneGroup.add(stone);
  }
}