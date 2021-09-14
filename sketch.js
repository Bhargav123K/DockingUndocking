   var bg , sc1, sc2, sc3, sc4, issImage
   var spaceCraft
   var hasDocked = false;




function preload(){
     bg = loadImage("spacebg.jpg");
     sc1 = loadImage("spacecraft1.png");
     sc2 = loadImage("spacecraft2.png");
     sc3 = loadImage("spacecraft3.png");
     sc4 = loadImage("spacecraft4.png");
     issImage = loadImage("iss.png");

}

function setup() {
  createCanvas(800,400);
  spaceCraft = createSprite(285,200);
  spaceCraft.addImage(sc1);
  spaceCraft.scale = 0.15;

  iss = createSprite(330,130);
  iss.addImage(issImage);
  iss.scale = 0.25;
}

function draw() {
  background(bg);  
  spaceCraft.addImage(sc1);
 if(!hasDocked){
    spaceCraft.x = spaceCraft.x+random(-1,1);
 

 if(keyDown("UP_ARROW")){
  spaceCraft.addImage(sc2);
     spaceCraft.y = spaceCraft.y-2
 }

 if(keyDown("DOWN_ARROW")){
  spaceCraft.addImage(sc1);
}

if(keyDown("LEFT_ARROW")){
  spaceCraft.addImage(sc4);
  spaceCraft.x = spaceCraft.x-1
}

if(keyDown("RIGHT_ARROW")){
  spaceCraft.addImage(sc3);
  spaceCraft.x = spaceCraft.x+1
}
 }

 if(spaceCraft.y<=(iss.y+70) && spaceCraft.x <= (iss.x-10)){
           hasDocked = true
           textSize(25);
           fill("white");
           text("Docking successful!", 200, 300);
 }

  drawSprites();
}