class Ball
{
    constructor(xpos,ypos,radius)
    {
        var options = 
        { 
            isStatic:false,
            restitution:1,
            friction:0,
            density:0.8
        }
        
        this.ball = Bodies.circle(xpos,ypos,radius,options);
        this.radius = radius;
        World.add(world,this.ball);
    }

    display()
    {
        push();
        fill("lime");
        
        ellipseMode(RADIUS);
        ellipse(this.ball.position.x,this.ball.position.y,this.radius,this.radius);
        pop();
    }
       

}