class Boat {
    constructor(x, y, width, height, boatPos) {
        var options = {
            restitution: 0.8,
            friction: 1.0,
            density: 1.0,
        }

        //crear un objeto rectangular y almacenarlo en this.body
       

        this.width = width;
        this.height = height;
        this.boatPosition = boatPos;
        this.image = loadImage("assets/boat.png");

        //agregar el cuerpo al mundo
        

    }

    display() {

        //obtener al ángulo y la posición del cuerpo
     
      
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, this.boatPosition, this.width, this.height);
        noTint();
        pop();
      }


}