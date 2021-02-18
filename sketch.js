const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var maxDrops = 100;
var thunder1 , thunder2 , thunder3 , thunder4;
var drops=[],batman,batmanImage;
var maxDrops=100;
var thunderCreatedFrame = 0; 
var thunder;
function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png")
    thunder2 = loadImage("images/thunderbolt/2.png")
    thunder3 = loadImage("images/thunderbolt/3.png")
    thunder4 = loadImage("images/thunderbolt/2.png")
    batmanImage =  loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png")
}

function setup(){
   createCanvas(500,600);
   engine = Engine.create();
   world = engine.world;

   batman = createSprite(250,300,10,10);
   batman.addAnimation("walking boy",batmanImage);
   batman.scale=0.5
   if(frameCount%80 === 0){
       
    for(var i=0; i<maxDrops; i++){
     drops.push(new Drop(random(0,400), random(0,400)));
     }

}
}

function draw(){
    background("black")
    Engine.update(engine);
    var rand= Math.round(random(1,4));
    if(frameCount%50 === 0){
        
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(100,400), random(100,50), 10, 10);
        switch(rand)
        {
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.3)


    }

    if(thunderCreatedFrame + 10 === frameCount && thunder){
        thunder.destroy();
    }

    //umbrella.display();

    for(var i = 0; i < maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }
    
   
    drawSprites();
}   

