//Binary Heap - Heap is a tree structure, similar to BST but with different rules.
// MaxBinary Heap - each node can have atmost two children and parent is always larger than the children. no order to left vs right.
// For Every index of array n -> Left child is stored at 2n+1 and Right Child is stored at 2n+2

class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }

    insert(element){
        // add the element at the end
        this.values.push(element);
        //bubble up
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1; //keep track where newly inserted item is 
        const element = this.values[idx];

        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    //removing - the highest value (root)
    extractMax(){
        let max = this.values[0];
        let end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }        
        return max;
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
                if(leftChild>element){
                    swap = leftChidIndex;
                }
            }

            if(rightChidIndex < length){
                rightChild = this.values[rightChidIndex];
                if((swap == null && rightChild>element) || (swap !== null && rightChild > leftChild)){
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

