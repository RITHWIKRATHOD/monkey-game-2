var PLAY=1;
var END=0;
var gameState = PLAY;

var monkey , monkey_running
var groud,groudImage;
var FoodGroup, obstacleGroup,o1,o2;
var score
var invisibleGround;
var jumpSound;
var gameover,gameOver;
var stopImage;
function preload(){
  

    monkey_running =    loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png",
                                                             "sprite_3.png","sprite_4.png","sprite_5.png",
"sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
   groundImage =loadImage("2122.jpg");
  jumpSound =loadSound("jump.mp3");
  
  o1 =loadImage("wood.png")
  o2 =loadImage("stone.png")
  gameOver = loadImage("gameover.png")
gameoverSound =loadSound("gameover.mp3")
  m2 = loadImage("sprite_6.png");
}



function setup() {
  createCanvas(450,300)
ground =createSprite(0,0,10,10);
  ground.addImage("g1",groundImage);
  ground.x =ground.width/2;
  ground.scale =2;
  ground.velocityX=-4;
  
    FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
  monkey=createSprite(50,260,10,10);
  monkey.addAnimation("m1",monkey_running);
  monkey.addAnimation("m2",m2)
  monkey.scale = 0.11;
  
  score =0;
  
  gameover =createSprite(225,150,10,10)
  gameover.addImage("g1",gameOver);
  gameover.scale =0.3;
  gameover.visible =false;
  
  invisibleGround=createSprite(70,260,800,5);
  invisibleGround.visible =false;
}





function draw() {
background("white");
  

  monkey.collide(invisibleGround);
  

  
   monkey.velocityY = monkey.velocityY + 0.5
  

  
  if (gameState===PLAY){
    
  banana();
  obstacle();
      if(ground.x<0){
    ground.x =ground.width/2
}
    textSize(20);
  fill("white");
score = score + Math.round(getFrameRate()/60);
  text("Survival Time : "+ score,20 ,30)
  if(keyDown("space")&& monkey.y>215 )   {
    monkey.velocityY=-13;
    jumpSound.play();
  }

    
    
  }else if(gameState ===END){
          if(monkey. isTouching(obstacleGroup)){
            monkey.changeAnimation("m2",m2);
             
    gameover.visible=true;
    gameoverSound.play();
    obstacleGroup.destroyEach();
        FoodGroup.destroyEach();      
            
    ground.velocityX=0;
    
           
  }
    

  }
                if(monkey. isTouching(obstacleGroup)){
  gameState = END;  
  }
  
  
  
  
  
  
  
  drawSprites();

   textSize(20);
  fill("white");
 text("Survival Time : "+ score,20 ,30)
  
  
  
  
}

function banana (){
  if(frameCount%80 ===0){
  var banana = createSprite (400,200,10,10);
    banana.addImage ("b1",bananaImage);
    banana.scale =0.02;
    banana.y=Math.round(random(120,180))
    banana.velocityX=-4;
    banana.lifetime =100;
    FoodGroup.add(banana);
}
  
  
}

function obstacle(){
  if(frameCount%300 === 0){
    var obstacle =createSprite(400,240,10,10)
   
    
       obstacle.addImage("o1",o2)
      obstacle.scale =0.2;
 
    obstacle.velocityX =-4;
    obstacle.lifetime = 100;
    obstacleGroup.add(obstacle);
  }
  
  
}


