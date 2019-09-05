function forLazy(arrayPar, n) {
    let newArray = []; 
    
    for(key of arrayPar) {
        if(key > n) { 
        newArray.push(key);
        }
    } 
    
    return newArray; 
} 
    
let lazy = function(action, array) { 
    let arrayPar = [];

    for(let i = 0; i < arguments.length - 1; i++) {
        arrayPar.push(arguments[i]);
    }

    return action.apply(this, arrayPar); 
}
console.log(lazyFunction([1,2,3,4,5], 3, forLazy));

let lazyAction = lazy(action, parameters);
lazyAction();