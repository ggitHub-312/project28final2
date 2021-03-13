class Stone{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restituiton:0,
            friction :1 ,
            density:1      
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(x,y,r,options);
        this.image = loadImage("stone.png")
       
        World.add(world,this.body);
    }

    display(){

    var stonePos = this.body.position

    push()
    translate(stonePos.x,stonePos.y)
    imageMode(CENTER)
    ellipseMode(CENTER)
    image(this.image,0,0,this.r,this.r)

    pop()
}
}
