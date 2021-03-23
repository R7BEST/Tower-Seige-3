class Box
{
    constructor(x,y,width,height){
    var options={
    restitution:0.4,
    
    friction:0.001
    }
    
    this.visiblity= 225
    this.body = Bodies.rectangle(x,y,width,height,options)
    this.width= width;
    this.height=height;
    World.add(world, this.body)
    
}
score(){
  if (this.visiblity < 0 && this.visiblity > -100){
    score++;
  }
}

display(){
    
    if(this.body.speed <5)
    {
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    /*strokeWeight(4);
    stroke("orange");
    fill("yellow");*/
    rect(0, 0, this.width, this.height);
    pop();
  }
  else{
    World.remove(world, this.body)
    push();
    this.visiblity= this.visiblity-5;
    pop();
  }
 }
 
};
