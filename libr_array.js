let MyArray={
  
    take(array, n){
        let newArray=[];
        for(let i=0;i<n;i++)
        {
            newArray[i]=array[i];
        }
        return newArray;
    },
    map(array, callback){
        let newArray=[];
        for(let i=0;i<array.length;i++){
        newArray[i]=callback(array[i]);
        }
        return newArray;
    },
    skip(array, n){
        let newArray=[];
        for(let i=n, j=0;i<array.length;i++, j++)
        {
            newArray[j]=array[i];
        }
        return newArray;
    },
    filter(array, callback){
        let newArray=[];
        let j=0;
        for(let i=0;i<array.length;i++)
        {
            if(callback(array[i]))
            {
                newArray[j]=array[i];
                j++;
            }
        }
        return newArray;
    },

    foreach(array, callback){
        for(let i=0;i<array.length;i++){
        array[i]=callback(array[i]);
        }
        return array;
    },
    // reduce(array, callback, initialValue=0){
    //     let accumulator, currentValue
    //     initialValue==0 ? {accumulator=array[0], currentValue = array[1] }:{accumulator=initialValue, currentValue = array[0] };
        
    //     for(let i=0;i<array.length;i++){
    //         callback(accumulator, currentValue);
    //     }
    //     return array;
    // }



}

console.log(MyArray.take([1,2,3,4,5,6,7], 4));
console.log(MyArray.map([1,2,3], a=>2*a));
console.log(MyArray.skip([1,2,3,4,5,6,7], 2));

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
console.log(MyArray.filter(words, word => word.length > 6));
console.log(MyArray.foreach([1,2,3], a=>2*a));
