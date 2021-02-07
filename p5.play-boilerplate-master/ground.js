class ground{
    constructor(x,y,wi,h){
        this.box1=Bodies.rectangle(x,y,wi,h,{isStatic:true})
World.add(w,this.box1);
this.width=wi;
this.height=h;
    }
    display(){
        push();
        translate(this.box1.position.x,this.box1.position.y);
        rotate(this.box1.angle);
        fill("pink");
        ectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}