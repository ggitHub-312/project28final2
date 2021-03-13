class Slingshot{

    constructor(b1,b2){
        var options ={
            bodyA:b1,
            pointB:b2,
            length:10,
            stiffness:0.05
        }
        this.pointB= b2;
        this.link=Constraint.create(options)
        
        World.add(world,this.link)

    }
    display(){


       
       


        
        var p1 = this.link.bodyA.position
        var p2 = this.pointB
       
    }

    fly(){
        this.link.bodyA = null;
    }

    attach(body){

    this.link.bodyA = body
    }
}