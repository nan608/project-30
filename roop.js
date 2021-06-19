class Roop{
    constructor(x,y,z)
    {
        var options={
            bodyA:x,
            bodyB:y,
            pointB:{x:z,y:0},
            lenghth:255
        }

        this.roop = Constraint.create(options)
        World.add(world,this.roop)
        this.pointB=z
    }

    display(){
        push()
        strokeWeight(2)
        line (this.roop.bodyA.position.x,this.roop.bodyA.position.y,this.roop.bodyB.position.x +this.pointB ,this.roop.bodyB.position.y)
        pop ()
    }
}