var bgImg, path, catImg, catImg1, catImg2, tom, mouseImg, mouseImg1, mouseImg2, jerry;
function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg = loadImage("images/cat1.png");
    mouseImg = loadImage("images/mouse1.png");
    catImg1 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg1 = loadAnimation("images/mouse2.png","images/mouse3.png");
    catImg2 = loadImage("images/cat4.png");
    mouseImg2 = loadImage("images/mouse4.png");
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites her
    path = createSprite(500,350,20,30);
    path.addImage(bgImg);
    path.scale = 1;

    tom = createSprite(850,550,15,15);
    tom.addImage(catImg);
    tom.scale = 0.2;
    
    jerry = createSprite(200,530,25,25);
    jerry.addImage(mouseImg);
    jerry.scale = 0.1


    
    

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        
    tom.addImage("sitting",catImg2);
    tom.changeImage("sitting");

    jerry.addImage("finding",mouseImg2);
    jerry.changeImage("finding");

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      jerry.addAnimation("teasing",mouseImg1);
      jerry.changeAnimation("teasing");
      jerry.frameDelay = 25;


  }

  if(keyCode === LEFT_ARROW){
      tom.x = tom.x -15

      tom.addAnimation("tomRunning",catImg1);
      tom.changeAnimation("tomRunning");
  }


}
