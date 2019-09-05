function pureFunction(a1, a2, a3, a4, a5, a6) {
    let sum = 0;

    for(arg of arguments) {
        sum = sum + arg;
    }

    return sum * 10;
}

function applyPartial(action, n) {
    return (...arguments) => {
        let fixArguments = [];

        for(let i = 0; i < n; i++) {
            fixArguments.push(1);
        }
        
        return action.apply(this, [...fixArguments, ...arguments]);
    }
}

let partial1 = applyPartial(pureFunction, 2);
console.log(partial1(3, 3, 2, 6));
let partial2 = applyPartial(pureFunction, 4);
console.log(partial2(15, 4));