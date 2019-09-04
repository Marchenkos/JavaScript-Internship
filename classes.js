class Shape {
    constructor(name, height, width) {
        this.name = name;
        this.height = height;
        this.width = width;
    }

    calculateArea(height, width) {
        return height * width;
    }
}

class Rectangle extends Shape {
    constructor(height, width) {
        super("Rectangle", height, width);
    }
    
    calculateArea() {
        return super.calculateArea(this.height, this.width);
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super("Square", sideLength, sideLength);
        this.sideLength = sideLength;
    }

    calculateArea() {
        return super.calculateArea(this.height, this.width);
    }
}

class ShapesStore extends Shape {
    constructor(shapesArray) {
        super();
        this.shapesArray = shapesArray;
    }

    areaSquare() {
        let areaValue = 0;

        for(let i=0; i < this.shapesArray.length; i++) {
            if(this.shapesArray[i].sideLength) {
                areaValue = areaValue + super.calculateArea(this.shapesArray[i].width, this.shapesArray[i].height);
            }
        }

        return areaValue;
    }

    areaRectangle() {
        let areaValue = 0;

        for(let i=0; i < this.shapesArray.length; i++) {
            if(!this.shapesArray[i].sideLength) {
                areaValue = areaValue + super.calculateArea(this.shapesArray[i].width, this.shapesArray[i].height);
            }
        }

        return areaValue;
    }
}

let rectangle1 = new Rectangle(5, 10);
let rectangle2 = new Rectangle(15, 2);
console.log("Area: " + rectangle1.calculateArea() + "\nWidth: " + rectangle1.width + "\nHeight: " + rectangle1.height);
let square1 = new Square(10);
let square2 = new Square(20);
let square3 = new Square(30);
console.log("Area: " + square1.calculateArea() + "\nSide length: " + square1.sideLength);
let store = new ShapesStore([rectangle1, square1, square2, rectangle2, square3]);
console.log("Total area of square: " + store.areaSquare());
console.log("Total area of rectangle: " + store.areaRectangle());