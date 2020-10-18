class paper{
  constructor(x, y,radius) {
    var options = {
        isStatic:false,
        'restitution':0.7,
        'friction':0.5,
        'density':1.2
    }
  this.body=Bodies.circle(x,y,radius,options)
  this.r=radius
    
    World.add(world, this.body);
  }
  display(){
   var pos=this.body.position;
   push();
    fill("red");
    ellipseMode(RADIUS);
    ellipse(pos.x,pos.y,this.r,this.r);
   pop();
  }
};
