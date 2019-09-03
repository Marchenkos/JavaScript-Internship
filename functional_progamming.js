function pureFunction(x, y, z) {
    return (x + y + z) * 10;
}

function cury(f) {
    return (x) => {
        return (y) => {
            return (z) => {
                return f(x, y, z);
            };
        };
    };
}

function cylinderArea(pi) {
    return (h, r) => {
        return 2 * pi * r * h + 2 * pi * r;
    }
}

let areaCalculation = cylinderArea(3.14);
console.log(areaCalculation(4, 5));
console.log(areaCalculation(14, 50));
let result = cury(pureFunction);
console.log(result(2)(3)(5));