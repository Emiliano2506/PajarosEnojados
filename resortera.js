class Resortera{
    constructor(x,y,a,at){
        this.x = x;
        this.y = y;
        this.ancho=a;
        this.alto = at;
        var variablePiso={
            isStatic:true
        }
        this.body = Bodies.rectangle(this.x,this.y,this.ancho,this.alto,variablePiso);
        this.image = loadImage("sling2.png");
        this.image = loadImage("sling1.png");
        World.add(world,this.body);
    }
    display(){
        push();
        rect(this.x,this.y,this.ancho,this.alto);
        image(this.image,this.x,this.y,this.ancho,this.alto);
        pop();
    }
}