function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(10);

for (let key in circle) {
  //   console.log(key, circle[key]);

  if (typeof circle[key] !== "function") console.log(key, circle[key]);
}

const keys = Object.keys(circle);
console.log(keys); // [ 'radius', 'draw' ]

if ("radius" in circle) console.log("Circle has radius.");