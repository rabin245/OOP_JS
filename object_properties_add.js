function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(10);
console.log(circle);

circle.location = { x: 1 };

// bracket notation
// circle['location'] = {x: 1};
// dont know properyname ahead of time
const propertyName = "location";
circle[propertyName] = { x: 1 };

// property name is not valid identifier
const propertyName1 = "center-location"; // with whitespace as well 'center location'
// circle.center-location doesnot work
circle[propertyName1] = { x: 1 };

console.log(circle);

// deleting properties

delete circle.location;
delete circle["center-location"];
console.log(circle);
