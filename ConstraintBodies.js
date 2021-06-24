class ConstraintBodies{
    constructor(bodyA,pointB,length){
    var options={
        bodyA:bodyA,
        pointB:pointB,
        length:length,
        stiffness:0.02
    }
        this.chain = Matter.Constraint.create(options);
        World.add(world,this.chain);
        

    }
    display(){
        if(this.chain.bodyA){
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.pointB.x,this.chain.pointB.y);
        }
    }
    fly(){
        this.chain.bodyA=null

    }
}