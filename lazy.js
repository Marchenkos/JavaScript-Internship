function filter(value) {
    let newArray = [];

    for(key of value) {
        if(key > 5) {
            newArray.push(key);
        }
    }

    return newArray;
}

function lazyFunction(array) {
    return array.map(filter);
    
}
console.log(lazyFunction([1,2,3,4,5]));
