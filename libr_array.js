let MyArray = {
    array : [],

    chain(array) {
        this.array = array;

        return this;
    },

    take (n, arrayValue = this.array) {
        let newArray = [];

        for(let i = 0; i < n; i++) {
            newArray[i] = arrayValue[i];
        }

        if(this.array != arrayValue) {
        this.array = newArray;

        return this.array;
        }

        this.array = newArray;

        return this;
    },

    map(callback, arrayValue = this.array) {
        let newArray = [];

        for(let i = 0; i < arrayValue.length; i++) {
            newArray[i] = callback(arrayValue[i]);
        }

        if(this.array != arrayValue) {
           this.array = newArray;

           return this.array;
        }

        this.array = newArray;

        return this;
    },

    skip(n, arrayValue = this.array) {
        let newArray = [];

        for(let i = n, j = 0; i < arrayValue.length; i++, j++) {
            newArray[j] = arrayValue[i];
        }

        if(this.array != arrayValue) {
           this.array = newArray;

           return this.array;
        }

        this.array = newArray;

        return this;
    },

    filter(callback, arrayValue = this.array) {
        let newArray = [];
        let j = 0;

        for(let i = 0; i < arrayValue.length; i++) {

            if(callback(arrayValue[i])) {
                newArray[j] = arrayValue[i];
                j++;
            }

        }

        if(this.array != arrayValue) {
           this.array = newArray;

           return this.array;
        }

        this.array = newArray;

        return this;
    },
    
    foreach(callback, arrayValue = this.array) {
        let newArray = [];

        for(let i = 0; i < arrayValue.length; i++) {
            newArray[i] = callback(arrayValue[i]);
        }

        if(this.array != arrayValue) {
           this.array = newArray;

           return this.array;
        }

        this.array = newArray;

        return this;
    },

    value : () => this.array
}

console.log(MyArray.chain([1,2,3]).take(2).map(a => 2 * a).skip(1).value());
console.log(MyArray.take(4, [1,2,3,4,5,6,7]));
console.log(MyArray.map(a => 2 * a, [1,2,3,4,5,6,7]));
console.log(MyArray.skip(2, [1,2,3,4,5,6,7]));
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
console.log(MyArray.filter(word => word.length > 6, words));
console.log(MyArray.foreach(a => 2 * a, [1,2,3]));

function squared(array) {
    let newArray = [];

    for(let i = 0; i < array.length; i++) {
        newArray[i] = array[i] * array[i];
    }

    return newArray;
}

const memoize = () => {
    let cacheValues = new Map();

    return (array) => {

       if(cacheValues.has('array')) {
           console.log("from cache");

           return cacheValues.get('array');
       }

       else {
           console.log("calculating");
           let result = squared(array);
           cacheValues.set('array', result);
           
           return result;
       }
   }
}
const memoizedAdd = memoize();
console.log(memoizedAdd([1,2,3]));  
console.log(memoizedAdd([1,2,3]));  
