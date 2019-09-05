function map(array, callback) {
    let newArray = [];

    newArray = folding(array, callback);
    // newArray.push(folding(array, callback));
    //     // newArray.push(callback(key));
    
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
    let averageValue = folding(array, (a, b) => a + b);

    return averageValue / array.length;
}

function folding(array, foldcCallback, initialValue) {
    let lastValue = 0;

    if(initialValue) {
        lastValue = initialValue;
    }

    for(let i = 0; i < array.length; i++) {
        lastValue = foldcCallback(lastValue, array[i], i);
    }

    return lastValue;
}

console.log(average([1, 2, 3]));
console.log(map([1, 2, 3], (a) => a * 2));