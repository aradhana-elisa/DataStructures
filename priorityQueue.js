class Node{
    constructor(val ,priority){
        this.val = val;
        this.priority = priority;
    }
}

//In this code : lower value - highest priority 
class PriorityQueue {
    constructor(){
        this.values = [];
    }

    enqueue(value, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode); // add it to very end 
        //bubble up
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1; //keep track where newly inserted item is 
        const element = this.values[idx];

        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    //removing - the highest value (root)
    dequeue(){
        let min = this.values[0];
        let end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }        
        return min;
    }

    sinkDown(){
        let idx = 0;
        let length = this.values.length;
        let element = this.values[idx];

        while(true){
            let leftChidIndex = 2*idx+1;
            let rightChidIndex = 2*idx+2;

            let leftChild, rightChild;
            let swap = null;

            //check index in bound
            if(leftChidIndex < length){
                leftChild = this.values[leftChidIndex];
                if(leftChild.priority < element.priority){
                    swap = leftChidIndex;
                }
            }

            if(rightChidIndex < length){
                rightChild = this.values[rightChidIndex];
                if((swap == null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)){
                    swap = rightChildIndex;
                }
            }

            if(swap == null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;

        }
        
    }
}

