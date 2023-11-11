class Piso{
    constructor(x,y,a,at){
        this.x = x;
        this.y = y;
        this.ancho=a;
        this.alto = at;
        var variablePiso={
            isStatic:true
        }
        this.body = Bodies.rectangle(this.x,this.y,this.ancho,this.alto,variablePiso);
        this.image = loadImage("ground.png")
        World.add(world,this.body);
    }
    display(){
        push();
        fill("#F2E300")
        rect(this.x,this.y,this.ancho,this.alto);
        
        pop();
    }
}