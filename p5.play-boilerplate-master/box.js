class Box{
    constructor(x,y,wi,h){
        this.box1=Bodies.rectangle(x,y,wi,h,{restitution:0})
World.add(w,this.box1);
this.width=wi;
this.height=h;
    }
    display(){
        push();
        translate(this.box1.position.x,this.box1.position.y);
        rotate(this.box1.angle);
        fill("white");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}