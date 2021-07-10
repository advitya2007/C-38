var dog,dogImg,happyDogImg;
var database;
var foodS,foodStock;

function preload()
{
	//load images here
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");

  dog = createSprite(250,250);
  dog.addImage(dogImg);
  dog.scale=0.2;

  database = firebase.database();

  foodStock = database.ref("Food");
  foodStock.on("value",readStock);
}

function setup() {
	createCanvas(500, 500);
  
}


function draw() {  

background("yellow");

if(keyWentDown(UP_ARROW)){

  writeStock(foodS);
  dog.addImage(happyDogImg)
}

  drawSprites();


  fill("red");
  textSize(20);
  text("Press UP_ARROW key to feed", 100,50);
  text("Food:"+foodS,100,100)

}

function readStock(data){

  foodS = data.val(); 
}

function writeStock(x){

  if(x<=0){

    x = 0
  }else{

  x = x-1;
  }
  database.ref('/').update({

    Food:x
  })
}


