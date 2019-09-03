function pureFunction(x, y, z) {
    return (x + y + z) * 10;
}

function cury(f) {
    return (x) => {
        return (y) => {
            return (z) => {
                return f(x, y, z);
            };
        };
    };
}

function cylinderArea(pi) {
    return (h, r) => {
        return 2 * pi * r * h + 2 * pi * r;
    }
}

function map(array, callback) {
    let newArray = [];

    for(key in array) {
        newArray.push(callback(array[key]));
    }
    
    return newArray;
}

function filter(array, callback) {
    let newArray = [];

    for(key in array) {
        if(callback(array[key])) {
            newArray.push(array[key])
        }
    }
    
    array = newArray;
    return array;
}

function average(array) {
    let averageValue = 0;

    for(key in array) {
        averageValue = averageValue + array[key];
    }

    return averageValue / array.length;
}

function averageOfEven(array) {
    return (f1) => {
        let evenArray = f1(array, a => a % 2 == 0);

        return (f2) => {
           return f2(evenArray);
        }
    }
}

function createMemoizedFunction(f) {
    return (memoize) => {
        let mem = memoize(f);

        return mem([1,2,3]);
    }
}

function memoize(fn) {
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
           let result = fn(parameters);
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
// let result2 = averageOfEven([1,2,3,4,5])(filter)(average);
// console.log(result2);
console.log(createMemoizedFunction(average)(memoize));

let mult = multiplicationOfParameters(pureFunction);

console.log(mult(10, 2, 30));