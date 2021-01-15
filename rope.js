class Rope
{
    constructor(body1,body2)
    {
        var options = 
        {
           bodyA:body1,
           bodyB:body2,
           length:300,
           stiffness:0.2
        }

        this.rope = Constraint.create(options);
        World.add(world,this.rope);

    }

    display()
    {
        var pos1 = this.rope.bodyA.position;
        var pos2 = this.rope.bodyB.position;

        line(pos1.x,pos1.y,pos2.x,pos2.y)

    }
}