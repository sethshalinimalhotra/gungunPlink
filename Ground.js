class Ground
{
  constructor(x,y,width,height)
  {
   var options={isStatic:true}

   this.body = Bodies.rectangle(x,y,width,height,options)
   this.height = height;
   this.width = width;
   World.add(myworld,this.body)
   
  }
  display()
  {
    fill("white")
    rectMode(CENTER)
    rect(this.body.position.x,this.body.position.y,this.width,this.height)
  }
}