function Circle(radius) {
  this.radius = radius;
  // local variables are not part of object
  // and get destroyed after exiting the scope of object
  let defaultLocation = { x: 0, y: 0 };

  let computeOptimumLocation = function (factor) {
    // do something
  };

  this.draw = function () {
    computeOptimumLocation(0.1);
    // local function can be used here because of closure
    // because its inside the closure of this.draw
    // it doesnot die and can be accessed inside draw

    console.log("draw");
  };
}

const circle = new Circle(10);
circle.draw();
