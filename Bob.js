class Bob{
    constructor(x,y,r){
    
     var prop={
         isStatic: false,
        restituiton: 1,
         friction: 0,
         density: 0.8
     }
    
     this.body=Bodies.circle(x,y,r,prop);
     this.r=r;
     World.add(world,this.body);
     console.log(this.r)
    }

    display(){
        push()
        rectMode(CENTER);
        fill("pink");
        translate(this.body.position.x,this.body.position.y);

        ellipse(0,0,this.r*2,this.r*2);
        
        pop()
    }
}