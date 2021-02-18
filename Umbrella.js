class Umbrella{
    constructor(x,y){
        var options={
            isStatic: true
        }
this.umbrellaImage = loadImage("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png")
       
     this.body = Bodies.circle(x,y,50,options)
     this.radius = 80;
     World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER)
        image(this.umbrellaImage, pos.x, pos.y+50,300,400)
    }
}