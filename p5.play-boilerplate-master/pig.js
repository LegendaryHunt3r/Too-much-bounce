class pig{
    constructor(x,y){
        this.box1=Bodies.rectangle(x,y,10,10,{restitution:0})
World.add(w,this.box1);
this.width=10;
this.height=10;
    }
    display(){
        push();
        translate(this.box1.position.x,this.box1.position.y);
        rotate(this.box1.angle);
        fill("green");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}