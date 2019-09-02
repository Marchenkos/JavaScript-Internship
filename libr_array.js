
function squared(array){
    let newArray=[];
  for(let i=0;i<array.length;i++){
      newArray[i]=array[i]*array[i];
  }
    return newArray;
}

const memoize = () => {

    let cacheValues= new Map();

    return (array) => {

       if(cacheValues.has('array')){
           console.log("from cache");
           return cacheValues.get('array');
       }
       else{
        
        console.log("calculating");
        let result= squared(array);
        cacheValues.set('array', result);
      

        return result;
       }

   }
}
const memoizedAdd = memoize();
console.log(memoizedAdd([1,2,3]));  
console.log(memoizedAdd([1,2,3]));  