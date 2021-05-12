class Umbrella{
    constructor(x,y){
        var options = {
            friction: 0.1,
            isStatic: true
        }

        this.body = Bodies.circle(x,y,75,options);
        this.image = loadImage("images/walking/1.png");
        World.add(world,this.body);
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,-10,45,300,300);
        pop();
    }
}