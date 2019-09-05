function map(array, callback) {
    let newArray = [];

    newArray.push(folding(array, callback));
        // newArray.push(callback(key));
    
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