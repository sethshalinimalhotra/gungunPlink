class Plinko
 {
   //only take x and y axis
  constructor(x,y,)
  {
  var options = 
  {
    restitution: 1,
     isStatic:true
   }
   //hard code radius
  this.body = Bodies.circle(x,y,10,options)
  World.add(myworld,this.body)
  //hard code radius
  this.radius = 10
  }

  display()
   { 
      var pos = this.body.position
     push()
     translate(pos.x,pos.y)
     fill("white")
     ellipse(0,0,this.radius,this.radius)
     pop()
   }
}