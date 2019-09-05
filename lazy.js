function forLazy(arrayPar, n) {
    let newArray = []; 
    
    for(key of arrayPar) {
        if(key > n) { 
        newArray.push(key);
        }
    } 
    
    return newArray; 
} 
    
function lazy(action) { 
    let arrayPar = Array.prototype.slice.call(arguments, 1);
    
    return () => {
        return action.apply(this, arrayPar); 
    }
}

let lazyAction = lazy(forLazy, [1,2,3,4,5], 3);
console.log(lazyAction());