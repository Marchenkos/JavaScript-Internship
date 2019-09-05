function pureFunction(a1, a2, a3, a4, a5, a6) {
    let sum = 0;

    for(arg of arguments) {
        sum = sum + arg;
    }

    return sum * 10;
}
 
function curry(action) {
    let arity = action.length;
    return function returnFunction(...args) {
        if(args.length >= arity) {
            return action.apply(this, args);
        }
        else {
            return (...moreArgs) => {
                let newArgs = [...args, ...moreArgs];
                return returnFunction(...newArgs);
            }
        }
    }
}

let result = curry(pureFunction);
console.log(result(2)(3)(5)(3)(5)(2));