class Ball{
  constructor(x, y, width, height) {
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
    }
      this.body = Bodies.rectangle(x, y, width, height);
      this.width = width;
      this.height = height;
      this.image = loadImage("wood2.png");
      this.trajectory = [];
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      pos.x = this.body.position.x;
      pos.y = this.body.position.y;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width,this.height);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);

      if (this.body.velocity.x > 10 && this.body.position.x > 200) {
        var position = [this.body.position.x, this.body.position.y];
        this.trajectory.push(position);
      }
    }
}