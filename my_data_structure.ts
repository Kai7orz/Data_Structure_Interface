//スタック・キューの両方として利用できるデータ構造の実装を行う

interface StackInt{
    peekLast():number|undefined; //リストの最後の要素を返す
    pop():number|undefined;
    push(n:number):void;
}

interface QueueInt{
    peekFirst():number|undefined;
    poll():number|undefined;
    push(n:number):void;
}

interface DequeueInt extends StackInt,QueueInt{
    addFirst(n:number):void;
}

class CustomDataStructure implements DequeueInt{

    private numberArray:number[];
    constructor(){
        this.numberArray = [];
    }

    public peekLast():number|undefined{
        if(this.numberArray.length === 0){
            throw new Error("stack is empty");
        }
        return this.numberArray[this.numberArray.length-1];
    }

    public peekFirst():number|undefined{
        if(this.numberArray.length === 0){
            throw new Error("stack is empty");     
        }
        return this.numberArray[0];
    }

    public pop():number|undefined{
        if(this.numberArray.length === 0){
            throw new Error("stack is empty");
        }
        return this.numberArray.pop();
    }

    public poll():number|undefined{
        if(this.numberArray.length === 0){
            throw new Error("stack is empty");
        }
        return this.numberArray.shift();
    }

    public push(n:number):void{
        this.numberArray.push(n);
    }

    public addFirst(n:number):void{
        this.numberArray.unshift(n);
    }

}


const ds = new CustomDataStructure();

ds.push(10); 
ds.push(20); 
ds.push(30); 

console.log(ds.peekLast());  
console.log(ds.pop());       
console.log(ds.peekFirst()); 
console.log(ds.poll());      

ds.addFirst(5); 
console.log(ds.peekFirst()); 
console.log(ds.peekLast());   
