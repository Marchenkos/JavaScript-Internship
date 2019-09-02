let MyArray={

    array: [],

    chain(array){
     this.array=array;
     return this;
    },

    take (n, arrayValue=this.array){
        let newArray=[];
        for(let i=0;i<n;i++)
        {
            newArray[i] = arrayValue[i];
        }
     if(this.array!=arrayValue)
     {
        this.array=newArray;
        return this.array;
     }
        this.array=newArray;
        return this;
    },
    map(callback,arrayValue=this.array){
        let newArray=[];
        for(let i=0;i<arrayValue.length;i++){
            newArray[i]=callback(arrayValue[i]);
        }
        if(this.array!=arrayValue)
        {
           this.array=newArray;
           return this.array;
        }
        this.array=newArray;
        return this;
    },
    skip(n,arrayValue=this.array){
        let newArray=[];

        for(let i=n, j=0;i<arrayValue.length;i++, j++)
        {
            newArray[j]=arrayValue[i];
        }
        if(this.array!=arrayValue)
        {
           this.array=newArray;
           return this.array;
        }
        this.array=newArray;

        return this;
    },
    filter(callback,arrayValue=this.array){
        let newArray=[];

        let j=0;
        for(let i=0;i<arrayValue.length;i++)
        {
            if(callback(arrayValue[i]))
            {
                newArray[j]=arrayValue[i];
                j++;
            }
        }
        if(this.array!=arrayValue)
        {
           this.array=newArray;
           return this.array;
        }
        this.array=newArray;

        return this;
    },

    foreach(callback,arrayValue=this.array){
        let newArray=[];

        for(let i=0;i<arrayValue.length;i++){
            newArray[i]=callback(arrayValue[i]);
        }
        if(this.array!=arrayValue)
        {
           this.array=newArray;
           return this.array;
        }
        this.array=newArray;

        return this;
    },
    value(){
        return this.array;
    }

}

console.log(MyArray.chain([1,2,3]).take(2).map(a=>2*a).skip(1).value());
console.log(MyArray.take(4,[1,2,3,4,5,6,7]));
console.log(MyArray.map(a=>2*a,[1,2,3,4,5,6,7]));
console.log(MyArray.skip( 2,[1,2,3,4,5,6,7]));

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
console.log(MyArray.filter( word => word.length > 6,words));
console.log(MyArray.foreach( a=>2*a,[1,2,3]));

function q(array){
    for(key in array)
    {
        array[key]=array[key]*array[key];
    }
    return array;
}

const memoize = (fn)=>{
    let cacheValues={};
   return (...args)=>{
    let n = args[0];  // тут работаем с единственным аргументом

       if(n in cacheValues){
           console.log("from cache");
           return cacheValues[n];
       }
       else{
        let result=fn(n);
        cacheValues[n]= result;
                console.log("calculating");
 
        return result;
       }

   }
}
const memoizedAdd = memoize(q);
console.log(memoizedAdd([1,2,3]));  // вычислено
console.log(memoizedAdd([1,2,3]));  // взято из кэша
