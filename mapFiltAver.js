function map(array, callback) {
    let newArray = [], newArray2 = array.reverse();

    for(let i = 0; i < array.length; i++) {
        newArray.push(folding(newArray2, callback));
        newArray2.pop();
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
    let averageValue = folding(array, (a, b) => a + b);

    return averageValue / array.length;
}

function folding(array, foldcCallback, initialValue) {
    let lastValue;
    console.log(array.length);

    if(initialValue) {
        lastValue = initialValue;
    }
    else {
        lastValue = array[0];
    }

    for(let i = 0; i < array.length; i++) {
        lastValue = foldcCallback(array[i], lastValue);
    }
    console.log(lastValue);
    return lastValue;
}

console.log(map([1, 5, 10, 5, 11, 44], (a) => a * 2));
// console.log(average([3, 3]));