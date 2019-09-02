let MyArray={
    take(array, n){
        let newArray= array.slice(0,n);
        return newArray;
    },
    map(array, callback){
        let newArray;
        for(let i=0;i<array.length;i++){
        newArray[i]=callback(array[i]);
        }
        return newArray;
    }

}

console.log(MyArray.take([1,2,3,4,5,6,7], 4));
console.log(MyArray.map([1,2,3], a=>2*a));