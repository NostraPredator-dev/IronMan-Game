var bg, backgroundImg;
var iron, ironImg;
var stone, stoneImg;
var stoneGrp;
var diamond, diamondImg;
var diamondGrp;
var score = 0;
var spkGrp;
var spike, spkImg;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironImg = loadImage("images/iron.png");
  stoneImg = loadImage("images/stone.png");
  diamondImg = loadImage("images/diamond.png");
  spkImg = loadImage("images/spikes.png");
}

function setup() {
  createCanvas(1270, 630);
  bg = createSprite(641, 310);
  bg.addImage(backgroundImg);
  iron = createSprite(400,550,30,30)
  iron.addImage(ironImg);
  iron.scale = 0.2;
  stoneGrp = new Group();
  diamondGrp = new Group();
  spkGrp = new Group();
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
  else
  {
    iron.y = iron.y + 2;
  }
  if (keyDown("s"))
  {
    iron.y = iron.y + 4;
  }
  if (keyDown("a"))
  {
    iron.x = iron.x - 8;
  }
  if (keyDown("d"))
  {
    iron.x = iron.x + 8;
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
  generateStones();
  for (var i = 0; i < stoneGrp.length;i++)
  {
    var temp = stoneGrp.get(i);
    if(temp.isTouching(iron))
    {
      iron.collide(temp);
    }
    else
    {
      iron.velocityY = 0;
    }
  }
  generateDiamonds();
  for (var i = 0; i < diamondGrp.length;i++)
  {
    var temp = diamondGrp.get(i);
    if(temp.isTouching(iron))
    {
      score++;
      temp.destroy();
    }
  }
  generateSpikes();
  for (var i = 0; i < spkGrp.length;i++)
  {
    var temp = spkGrp.get(i);
    if (temp.isTouching(iron))
    {
      score = score - 5;
      temp.destroy();
    }
  }
  textSize(25);
  drawSprites();
  fill("orange")
  text("Score = " + score,1050,50) 
}

function generateStones()
{
  if (frameCount % 45 == 0)
  {
    stone = createSprite(random(0,1300),0,random(100,200),20);
    stone.addImage(stoneImg);
    stone.scale = 1.2;
    stone.velocityY = 5;
    stone.lifetime = 150;
    stoneGrp.add(stone);
  }
}

function generateDiamonds()
{
  if (frameCount % 60 == 0)
  {
    diamond = createSprite(random(50,1250),0,5,5);
    diamond.addImage(diamondImg);
    diamond.scale = 0.7;
    diamond.velocityY = 5;
    diamond.lifetime = 150;
    diamondGrp.add(diamond);
  }
}

function generateSpikes()
{
  if (frameCount % 100 == 0)
  {
    spike = createSprite(random(0,1300),0,2,2);
    spike.addImage(spkImg);
    spike.scale = 0.4;
    spike.velocityY = 5;
    spike.lifetime = 150;
    spkGrp.add(spike);
  }
}