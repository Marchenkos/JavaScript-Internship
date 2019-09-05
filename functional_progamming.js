function pureFunction(x, y, z) {
    return (x + y + z) * 10;
}

function cylinderArea(pi) {
    return (hight, radius) => {
        return 2 * pi * hight * radius + 2 * pi * radius;
    }
}

function cury(action) {
    return (parameter1) => {
        return (parameter2) => {
            return (parameter3) => {
                return action(parameter1, parameter2, parameter3);
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
        if(callback(array[key])) {
            newArray.push(key);
        }
    }
        
    return newArray;
}

function average(array) {
    let averageValue = 0;

    for(key in array) {
        averageValue = averageValue + array[key];
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
    return (memoizedFunction) => {
        let result = memoizedFunction(action);

        return (arguments) => {
            return result(arguments);
        };
    }
}

function memoize(action) {
    let cacheValues = new Map();

    return (...argms) => {
        let parameters = argms[0];

        console.log(parameters);
        console.log(cacheValues);
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

function multiplicationOfParameters(f) {
    return (...argms) => {
        let mult = 1;
        for(let i = 0; i < argms.length; i++) {
            mult = mult * argms[i];
        }

        return mult;
    }
}

let areaCalculation = cylinderArea(3.14);
console.log(areaCalculation(4, 5));
console.log(areaCalculation(14, 50));
let result = cury(pureFunction);
console.log(map([1,2,3], (a) => a - 1));
console.log(filter([11,2,30], (a) => a > 10));
let result2 = averageOfEven([1,2,3,4,5])(filter)(folding);
console.log(result2);
console.log(createMemoizedFunction(average)(memoize)([1,2,3]));
console.log(createMemoizedFunction(average)(memoize)([1,2,3]));
let mult = multiplicationOfParameters(pureFunction);
console.log(mult(10, 2, 30));
console.log(folding([1,2,3,4], (a, b) => a + b));