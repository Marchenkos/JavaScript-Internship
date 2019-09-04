function filter(arrayPar, n) {
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

console.log(lazyFunction([1,2,3,4,5], 3, filter));