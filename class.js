class Rectangle {
  // public field declaration
  height = 0;
  width;

  // private field declaration
  #scale;
  constructor(height, width, scale) {
    this.height = height;
    this.width = width;
    this.#scale = scale;
  }

  //   method
  calculateArea() {
    return this.height * this.width;
  }
  //   getter
  get area() {
    return this.calculateArea();
  }

  //   static method & props
  static displayName = "Coord";
  static displayFunc() {
    console.log(this.displayName);
    console.log("This is static function of class.");
  }

  //   private method
  #privateMethod() {
    return "This is private method.";
  }
  displayPrivateMember() {
    return this.#scale;
  }
  displayPrivateMethod() {
    return this.#privateMethod();
  }
}

const p = new Rectangle(10, 4, 1.5);
console.log(p);
console.log(p.calculateArea());
console.log(p.area);

Rectangle.displayFunc();
console.log(Rectangle.displayname);

console.log(p.displayPrivateMember());
console.log(p.displayPrivateMethod());

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // call the super class constructor and pass in the name parameter
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

let d = new Dog("Shido");
d.speak();
