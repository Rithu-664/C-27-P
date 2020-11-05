class Rope{
    constructor(body1,body2,offSetX,offSetY){
        this.offSetX=offSetX;
        this.offSetY=offSetY;
     var prop={
         bodyA: body1,
         bodyB: body2,
         pointB: {x:this.offSetX,y:this.offSetY}
     }
     this.chain = Constraint.create(prop);
     World.add(world,this.chain);
    }

    display(){
        var pos1 = this.chain.bodyA.position;
        var pos2 = this.chain.bodyB.position;
        
        line(pos1.x,pos1.y,pos2.x+this.offSetX,pos2.y+this.offSetY);
    }
}