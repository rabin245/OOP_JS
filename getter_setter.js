function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  this.getDefaultLocation = function () {
    console.log(defaultLocation);
    return defaultLocation;
  };

  this.draw = function () {
    console.log("draw");
    console.log(this.defaultLocation);
  };

  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) throw new Error("Invalid location.");

      defaultLocation = value;
    },
  });
}

const circle = new Circle(10);
circle.defaultLocation;
circle.draw();
circle.defaultLocation = { x: 1, y: 3 };
circle.draw();
