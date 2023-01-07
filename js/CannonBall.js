class CannonBall {
  constructor(x, y) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: true
    };
    this.r = 40;

    this.body = Bodies.circle(x, y, this.r, options);

    this.image = loadImage("./assets/cannonball.png");
    this.tower = loadImage("./assets/gray.jpg");

    // crear una matriz vacía para almacenar la trayectoria 
 

    World.add(world, this.body);
  }

  //disparando la bala de cañón
  shoot() {
    var velocity = p5.Vector.fromAngle(cannon.angle);
    velocity.mult(20);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    console.log(pos);
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.r, this.r);
    pop();

    //agregar la condición para revisar si la velocidad de la bala es mayor a 0 y la posición es mayor a 300
  

    //obtener todos los valores dentro de la matriz de trayectoria y dibujar una imagen.

    //for (var i = 0; i < this.trajectory.length; i++) {
      //image(this.image, this.trajectory[i][0], this.trajectory[i][1], 5, 5);
    //}
    
  }
}
