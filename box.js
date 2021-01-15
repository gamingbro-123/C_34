class Box
{
    constructor(xpos,ypos,width,height)
    {
        var options = 
        { 
            isStatic:false,
            restitution:1,
            friction:0,
            density:0.8
        }
        
        this.body = Bodies.rectangle(xpos,ypos,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display()
    {
        push();
        fill("cyan");
        
        rectMode(CENTER);
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        rect(0,0,this.width,this.height);
        pop();
    }
       

}