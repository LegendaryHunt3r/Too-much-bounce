class log{
    constructor(x,y,h,a){
        this.box1=Bodies.rectangle(x,y,15,h,{friction:1})
World.add(w,this.box1);
this.width=15;
this.height=h;
Matter.Body.setAngle(this.box1,a)
    }
    display(){
        push();
        translate(this.box1.position.x,this.box1.position.y);
        rotate(this.box1.angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}