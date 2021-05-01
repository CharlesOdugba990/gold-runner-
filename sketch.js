var hero, City_of_gold,hero_Image,alien_Image,ground,alien_group,gameState,PLAY,END,Life,life_Image,life2_Image,life3_Image;




function preload(){
  hero_Image = loadAnimation("Images/Hero/Hero.jpg","Images/Hero/Hero1.jpg","Images/Hero/Hero2.jpg","Images/Hero/Hero3.jpg","Images/Hero/Hero4.jpg","Images/Hero/Hero5.jpg","Images/Hero/Hero6.jpg","Images/Hero/Hero7.jpg")
  alien_Image = loadImage("Images/Allien1.jpg")
  bg = loadImage("Images/City-of-Gold.jpg")
  life_Image = loadImage("Images/Life.png")
  life2_Image = loadImage("Images/Life 2.jpg")
  life3_Image = loadImage("Images/Life 3.jpg")
  
  
}


function setup() {
  createCanvas(800,400);
  City_of_gold = createSprite(400,200,10,10)
  City_of_gold.addImage(bg)
  City_of_gold.scale = 2.5
  City_of_gold.velocityX = -3

  PLAY = 0
  END = 1
  Life = 3
  hero = createSprite(100,350,50,50);
  hero.addAnimation("time",hero_Image);
  hero.scale = 0.7
  ground = createSprite(400,390,800,10);
  ground.visible = false
  Lifes = createSprite(50,60,5,5);
  Lifes.scale = 0.1

  if(Life === 3)
  Lifes.addImage(life_Image)
  else if(Life === 2)
  Lifes.addImage(life2_Image)
  else
  Lifes.addImage(life3_Image)
  
  alien_group = createGroup()
  gameState = PLAY
  
}

function draw() {
  background(220);
  hero.collide(ground)
 if(gameState === PLAY){
  if(City_of_gold.x < 300)
  City_of_gold.x = 400
   

if(keyDown("space"))
  hero.velocityY = -4
  hero.velocityY += 0.4

  spawnAlien();
  if( hero.isTouching(alien_group))
    Life = Life-1
  if(Life === 0)
    gameState = END
 }
 

if(gameState === END){
  text("gameOver",400,200)
  
  
}





  
  drawSprites();
}

function spawnAlien(){
  
  if (frameCount % 180 === 0  ){
    var alien = createSprite(800,330,50,50);
    alien.velocityX = -4;
    alien.addImage(alien_Image);
    alien.scale = 0.15;
    alien_group.add(alien)
  
  }
}
