function pureFunction(x, y, z) {
    return (x + y + z) * 10;
}

function cylinderArea(pi) {
    return (hight, radius) => {
        return 2 * pi * radius * hight + 2 * pi * radius;
    }
}

function cury(action) {
    return (param1) => {
        return (param2) => {
            return (param3) => {
                return action(param1, param2, param3);
            };
        };
    };
}

function map(array, callback) {
    let newArray = [];

    for(key of array) {
        newArray.push(callback(key));
    }
    
    return newArray;
}

function filter(array, callback) {
    let newArray = [];

    for(key of array) {
        if(callback(key)) {
            newArray.push(key);
        }
    }
    
    return newArray;
}

function average(array) {
    let averageValue = 0;

    for(key of array) {
        averageValue = averageValue + key;
    }

    return averageValue / array.length;
}

function folding(array, callback, initialValue) {
    let lastValue = 0;

    if(initialValue) {
        lastValue = initialValue;
    }

    for(key of array) {
        lastValue = callback(lastValue, key);
    }

    return lastValue;
}

function averageOfEven(array) {
    return (action1) => {
        let evenArray = action1(array, a => a % 2 == 0);

        return (action2) => {
           let result = action2(evenArray, (a, b) => a + b);

           return result / evenArray.length;
        }
    }
}

function createMemoizedFunction(action) {
    return (memoize) => {
        let mem = memoize(action);

        return (parameters) => {
            return mem(parameters);
        }    
    }
}

function memoize(action) {
    let cacheValues = new Map();

    return (...argms) => {
        let parameters = [];
        parameters = argms[0];

        if(cacheValues.has(parameters.toString())) {
           console.log("From cache");

           return cacheValues.get(parameters.toString());
        }
        else {
           console.log("Calculating");
           let result = action(parameters);
           cacheValues.set(parameters.toString(), result);
           
           return result;
        }
    }
}

function multiplicationOfParameters(action) {
    return (...argms) => {
        let mult = 1;
        for(let i = 0; i < argms.length; i++) {
            mult = mult * argms[i];
        }

        return mult;
    }
}

function forLazy(arrayPar, n) {
    let newArray = []; 
    
    for(key of arrayPar) {
        if(key > n) { 
        newArray.push(key);
        }
    } 
    
    return newArray; 
} 
    
let lazyFunction = function(array, n, action) { 
    let arrayPar = [];

    for(let i = 0; i < arguments.length - 1; i++) {
        arrayPar.push(arguments[i]);
    }

    return action.apply(this, arrayPar); 
} 

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

let areaCalculation = cylinderArea(3.14);
console.log(areaCalculation(4, 5));
let result = cury(pureFunction);
console.log(result(2)(3)(5));
console.log(map([1,2,3], (a) => a - 1));
console.log(filter([11,2,30], (a) => a > 2));
console.log(averageOfEven([1,2,3,4,5])(filter)(folding));
let mult = multiplicationOfParameters(pureFunction);
console.log(mult(10, 2, 30));
console.log(folding([1,2,3,4], (a, b) => a + b));
console.log(lazyFunction([1,2,3,4,5], 3, forLazy));
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