class Block{
    constructor(x,y,width,height){
        var options={
            friction:0.0,
            restitution:0.4
        }
        this.Visibility = 255;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        if(this.body.speed < 3){
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
        }
        else{
            World.remove(world,this.body);
            push();
            this.Visibility = this.Visibility - 5;
            tint(255,this.Visibility);
            pop();
        }
    }
}