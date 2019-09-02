let MyArray={
    take(array, n){
        let newArray= array.slice(0,n);
        return newArray;
    }
}

console.log(MyArray.take([1,2,3,4,5,6,7], 4));