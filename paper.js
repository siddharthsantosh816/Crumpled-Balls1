class PaperBall{

    constructor(x,y,radius){
       
      var options={
          restitution:0.3,
          isStatic:false,
          friction:0.8,
          density:1.65
      }

      this.body=Matter.Bodies.circle(x,y,radius,options);
      this.radius=radius;
     // this.height=height;
      World.add(world,this.body);
    }
     
   display() {
       
        var pos=this.body.position;
        fill("white");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius);
   }
}