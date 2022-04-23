// Factory Function
function createCircle(radius) {
  return {
    // radius: radius,
    radius, //same as above
    draw: function () {
      console.log("draw");
    },
  };
}

const circle = createCircle(1);

circle.draw();

// Constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const another = new Circle(1); // using new keyword makes 'this' point to object instead of global/window object
another.draw();
