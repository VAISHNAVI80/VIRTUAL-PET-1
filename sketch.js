const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

//Create variables here
var dog,dog1, happydog, database, foodS, foodstock;


function preload()
{
dog = loadImage ("images/dogImg.png");
happydog = loadImage("images/dohImg1.png");
}

function setup() {
  createCanvas(500,500);
  database = firebase.database();

  engine = Engine.create();
  world = engine.world;
  
dog1.createSprite(250,250,25,25);
dog1.addImage(dog);

foodstock=database.ref('FOOD');
foodstock.on ("value", readStock)




  Engine.run(engine);
}


function draw() {  
background(46, 139, 87);
if (keyWentDown(UP_ARROW)){
writeStock (foodS);
dog.addImage(happydog)
}



  drawSprites();
  //add styles here

Text("PRESS UP_ARROW TO FEEDTHE DRAGO MILK",50,50,);
stroke (22);



}

function readStock(data){
foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    FOOD:x
  })
}













