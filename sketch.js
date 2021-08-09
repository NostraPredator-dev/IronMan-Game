var bg //Background
var backgroundImg; //Variable to store backgroung Image
var iron //IronMan 
var ironImg; //Store Image of IronMan
var stone //Stones (or) Bricks
var stoneImg; //Store Image of Stone
var stoneGrp; //Group to store all Stones
var diamond //Diamonds
var diamondImg; //Store Image of the Diamond
var diamondGrp; //Group to store all Diamonds
var score = 0; //Score of how many diamonds collected
var spkGrp; //Group to store all the Spikes
var spike //Spike
var spkImg; //Store Image of the Spike

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironImg = loadImage("images/iron.png");
  stoneImg = loadImage("images/stone.png");
  diamondImg = loadImage("images/diamond.png");
  spkImg = loadImage("images/spikes.png");
}

function setup() {
  createCanvas(1270, 630); //Area of game
  bg = createSprite(641, 310); //Adding background
  bg.addImage(backgroundImg);
  iron = createSprite(400,550,30,30) //Creating IronMan
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
  if (keyDown("w")) //Movement of IronMan
  {
    iron.y = iron.y - 4;
  }
  else
  {
    iron.y = iron.y + 2;
  }
  if (keyDown("s")) //Movement of IronMan
  {
    iron.y = iron.y + 4;
  }
  if (keyDown("a")) //Movement ofIronMan
  {
    iron.x = iron.x - 8;
  }
  if (keyDown("d")) //Movement ofIronMan
  {
    iron.x = iron.x + 8;
  }
  if (iron.x < 12) //Bringing IronMan in range
  {
    iron.x = 12;
  }
  if (iron.x > 1170) //Bringing IronMan in range
  {
    iron.x = 1170;
  }
  if (iron.y < 50) //Bringing IronMan in range
  {
    iron.y = 50;
  }
  if (iron.y > 580) //Bringing IronMan in range
  {
    iron.y = 580;
  }
  bg.velocityY = 4;
  if (bg.y > 363) //Looping Background
  {
    bg.y = bg.height/3;
  }
  generateStones(); //Method Call of generating Stone
  for (var i = 0; i < stoneGrp.length;i++) //Colliding IronMan with stones
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
  generateDiamonds(); //Method Call of generating Diamonds
  for (var i = 0; i < diamondGrp.length;i++) //Increasing score as IronMan touches Diamond
  {
    var temp = diamondGrp.get(i);
    if(temp.isTouching(iron))
    {
      score++; //Increament of score
      temp.destroy(); //Removing diamond after collected
    }
  }
  generateSpikes(); //Method call of generating Spikes
  for (var i = 0; i < spkGrp.length;i++) //Decreasing score as IronMan touches Spike
  {
    var temp = spkGrp.get(i);
    if (temp.isTouching(iron))
    {
      score = score - 5; //Decreament of score
      temp.destroy(); //Removing spike after touched
    }
  }
  textSize(25);
  drawSprites();
  fill("orange")
  text("Score = " + score,1050,50) //Displaying Score 
}

function generateStones() //Function to generate Stone
{
  if (frameCount % 45 == 0)
  {
    stone = createSprite(random(0,1300),0,random(100,200),20); //Generating Stones
    stone.addImage(stoneImg);
    stone.scale = 1.2;
    stone.velocityY = 5;
    stone.lifetime = 150;
    stoneGrp.add(stone); //Adding generated stone to the group
  }
}

function generateDiamonds() //Function to generate Diamonds
{
  if (frameCount % 60 == 0)
  {
    diamond = createSprite(random(50,1250),0,5,5); //Generating Diamond
    diamond.addImage(diamondImg);
    diamond.scale = 0.7;
    diamond.velocityY = 5;
    diamond.lifetime = 150;
    diamondGrp.add(diamond); //Adding generated diamond to the group
  }
}

function generateSpikes() //Function to generate Spike  
{
  if (frameCount % 100 == 0)
  {
    spike = createSprite(random(0,1300),0,2,2); //Generating Spike
    spike.addImage(spkImg);
    spike.scale = 0.4;
    spike.velocityY = 5;
    spike.lifetime = 150;
    spkGrp.add(spike); //Adding generated spike to the group
  }
}