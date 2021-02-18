class Drop{
    constructor(x,y,r){
        var options={
            restitution: 0.5,
            friction: 0.1
        
        }
   
     this.radius = 3;
     this.body = Bodies.circle(x,y,3,options)
    World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        
       
        ellipseMode(CENTER);
        strokeWeight(2)
        stroke("blue")
        fill("blue")
        ellipse(pos.x,pos.y,this.radius,this.radius)
        
    }
    update(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x: random(0,400), y: random(0,400)})
        }
    }
    
}