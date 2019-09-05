function map(array, callback) {
    return folding(array, callback);
}

function filter(array, callback) {
    let newArray = [], retunAray = [];
    newArray = folding(array, callback);

    for(let i = 0; i < array.length; i++) {
        if(newArray[i] == true) {
            retunAray.push(array[i])
        }
    }
    
    return retunAray;
}

function average(array) {
    let averageValue = folding(array, (a, b) => a + b);

    return averageValue[array.length - 1] / array.length;
}

function folding(array, foldcCallback, initialValue) {
    let lastValue = 0, newArray = [];

    if(initialValue) {
        lastValue = initialValue;
    }

    for(let i = 0; i < array.length; i++) {
        lastValue = foldcCallback(array[i], lastValue);
        newArray.push(lastValue);
    }

    return newArray;
}

console.log(map([1, 5, 10, 5, 11, 44], (a) => a * 2));
console.log(filter([1, 5, 10, 5, 11, 44], (a) => a > 5));
console.log(average([3, 5, 6]));