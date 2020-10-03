class Plinko {
    constructor(x, y, radius) {
      
	 var options ={
		restitution: 0.5,
		isStatic : true,
		friction : 0.3,
		density : 20
    }

      this.body = Bodies.circle(x, y, 5, options);
      World.add(world, this.body);
    
    }
    display(){
      var pos =this.body.position;
      fill("white");
      ellipseMode(RADIUS);
      ellipse(pos.x,pos.y,10,10);
      
      pop();
    }
};
