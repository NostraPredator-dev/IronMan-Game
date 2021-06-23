var bg, backgroundImg;
var iron, ironImg;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironImg = loadImage("images/iron.png");
}

function setup() {
  createCanvas(1365, 629);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  iron = createSprite(400,550,30,30)
  iron.addImage(ironImg);
  iron.scale = 0.2;
}

function draw() {
  /*iron.bounceOff(edges[0]);
  iron.bounceOff(edges[1]);
  iron.bounceOff(edges[2]);
  iron.bounceOff(edges[3]);*/
  if (keyDown("w"))
  {
    iron.y = iron.y - 4;
  }
  if (keyDown("s"))
  {
    iron.y = iron.y + 4;
  }
  if (keyDown("a"))
  {
    iron.x = iron.x - 4;
  }
  if (keyDown("d"))
  {
    iron.x = iron.x + 4;
  }
  if (iron.x < 12)
  {
    iron.x = 12;
  }
  if (iron.x > 1170)
  {
    iron.x = 1170;
  }
  if (iron.y < 50)
  {
    iron.y = 50;
  }
  if (iron.y > 580)
  {
    iron.y = 580;
  }
  bg.velocityY = 4;
  if (bg.y > 363)
  {
    bg.y = bg.height/3;
  }
  drawSprites(); 
}

