class Rope
{
    constructor(bodyA, pointB){
        var options=
        {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.05,
            length:1
        }
        
        this.r = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.r);

    }
    fly(){
        this.r.bodyA =null;
    }
    
    display()
    {
        if(this.r.bodyA){
        var pointA = this.r.bodyA.position;
        var pointB= this.pointB;
        push();
  
        stroke("maroon");
        strokeWeight(3);
  
        line(pointA.x, pointA.y, pointB.x, pointB.y);
  
        pop();
        }
    }
}