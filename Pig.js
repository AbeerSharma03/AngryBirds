class Pig{

constructor(x,y){
    var option={
        restitution:0.7,
        density:1.5,

    }
this.body=Bodies.rectangle(x,y,40,50,option);
this.width=40;
this.height=50;
World.add(world,this.body);

}
display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("red");
    rect(0, 0, this.width, this.height);
    pop();
}












}
