let MyArray={

    array: [],

    chain(array){
     this.array=array;
     return this;
    },

    take (n){
        let newArray=[];
        for(let i=0;i<n;i++)
        {
            newArray[i] = this.array[i];
        }
        this.array=newArray;
        return this;
    },
    map(callback){
        let newArray=[];
        for(let i=0;i<this.array.length;i++){
            newArray[i]=callback(this.array[i]);
        }
        this.array=newArray;
        return this;
    },
    skip(n){
        let newArray=[];

        for(let i=n, j=0;i<this.array.length;i++, j++)
        {
            newArray[j]=this.array[i];
        }
        this.array=newArray;
        return this;
    },
    filter(callback){
        let newArray=[];

        let j=0;
        for(let i=0;i<this.array.length;i++)
        {
            if(callback(array[i]))
            {
                newArray[j]=this.array[i];
                j++;
            }
        }
        this.array=newArray;

        return this;
    },

    foreach(callback){
        let newArray=[];

        for(let i=0;i<this.array.length;i++){
            newArray[i]=callback(this.array[i]);
        }
        this.array=newArray;

        return this;
    },
    value(){
        return this.array;
    }
 


}

console.log(MyArray.chain([1,2,3]).take(2).foreach(a=>2*a).skip(1).value());
