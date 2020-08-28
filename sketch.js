var score = 0;
var select_baloon;
var arrow, arrowImage, arrowG;
var bow, bow1;
var redbaloon, bluebaloon, greenbaloon, pinkbaloon;
var redbB, blueB, greenB, pinkB;
var backgroun, backgroun1; 

function preload(){
 //load your images here 
  bow = loadImage("bow0.png");
  greenbaloon = loadImage("green_balloon0.png");
  redbaloon = loadImage("red_balloon0.png");
  pinkbaloon = loadImage("pink_balloon0.png");
  bluebaloon = loadImage("blue_balloon0.png");
  backgroun = loadImage("background0.png","background20.png");
  arrowImage = loadImage("arrow0.png");
}

function setup() {
  createCanvas(600, 600);
   
  backgroun1=createSprite(100, 100, 400, 400);
  backgroun1.addImage(backgroun);
  backgroun1.scale=2.5; 
  backgroun1.x = backgroun1.width /1;
  
    bow1 = createSprite(480, 200, 20, 20);
    bow1.addImage(bow);
  
  redB = new Group();
  blueB = new Group();
  greenB = new Group();
  pinkB = new Group();
  arrowG = new Group();
  
}

function draw() {
 // background(100);
   backgroun1.velocityX=-3;
  //add code here
  if(backgroun1.x < 0){
    backgroun1.x = backgroun1.width /1;  
  }
  
  spawnselect_baloon();
  spawnarrow();
  
  bow1.y = mouseY;
   
  drawSprites();
  
  textSize(20);
  text("score" + score, 270, 30);
  
    
  if(arrowG.isTouching(pinkB)){
  pinkB.destroyEach();
    arrowG.destroyEach();
    score = score + 1;
  }
  
    if(arrowG.isTouching(blueB)){
  blueB.destroyEach();
    arrowG.destroyEach();
    score = score + 3;
  }
  
    if(arrowG.isTouching(greenB)){
  greenB.destroyEach();
    arrowG.destroyEach();
    score = score + 4;
  }
  
    if(arrowG.isTouching(redB)){
  redB.destroyEach();
    arrowG.destroyEach();
    score = score + 5;
  }
}

function spawnselect_baloon(){
   select_baloon = Math.round(random(1,4));
  console.log(select_baloon);
  
  if(World.frameCount % 80 == 0){
    
  if(select_baloon == 1){
     spawnredbaloon();
    }
    
 else if(select_baloon == 2){
     spawnbluebaloon();
    }  
    
 else if(select_baloon == 3){
     spawngreenbaloon();
    }  
    
 else if(select_baloon == 4){
     spawnpinkbaloon();
     }  
  }
}

function spawnarrow()
  {
if(keyDown("space"))
{  
arrow = createSprite(480, bow1.y, 20, 20);
  arrow.addImage(arrowImage);
  arrow.velocityX = -5;
  arrow.scale = 0.4; 
  arrow.lifetime = 100;
  arrowG.add(arrow);
}
 }

function spawnpinkbaloon()
{ 
   var pinkbaloon1 = createSprite(0,0);
    pinkbaloon1.addImage(pinkbaloon);
    pinkbaloon1.velocityX = 5;
    pinkbaloon1.y = Math.round(random(50,450));
  pinkbaloon1.lifetime = 100;
  pinkB.add(pinkbaloon1);
}

function spawnbluebaloon()
{   
     var bluebaloon1 = createSprite(0,0,0,0);
    bluebaloon1.addImage(bluebaloon);
    bluebaloon1.y = Math.round(random(50,450));
    bluebaloon1.velocityX=5;
    bluebaloon1.scale=0.1;
  bluebaloon1.lifetime = 100;
  blueB.add(bluebaloon1);
}

function spawnredbaloon()
{
   var redbaloon1 = createSprite(0,0,0,0);
   redbaloon1.addImage(redbaloon);
   redbaloon1.y = Math.round(random(50,450));
   redbaloon1.velocityX = 5;
   redbaloon1.scale=0.1;
  redbaloon1.lifetime = 100;
  redB.add(redbaloon1);
}

function spawngreenbaloon()
{ 
    var greenbaloon1 = createSprite(0,0,0,0);
  greenbaloon1.addImage(greenbaloon);
  greenbaloon1.y = Math.round(random(50,540));
  greenbaloon1.velocityX=5;
  greenbaloon1.scale=0.1;
  greenbaloon1.lifetime = 100;
  greenB.add(greenbaloon1);
} 
