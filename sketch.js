var canvas, backgroundImage;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function preload(){

  
}

function setup(){
  engine = Engine.create();
  world = engine.world;
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  player = new Player(displayWidth/4,displayHeight-500,200,140);
  game = new Game();
  ground = new Ground(displayWidth/2,displayHeight,displayWidth,200);
  
}


function draw(){
  
  background("white");
  Engine.update(engine);
  player.display();
  game.play();
  ground.display();

}
