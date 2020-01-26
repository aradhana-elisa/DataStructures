// Queue : It is a collection of data, abstract data structure follows FIFO
// Use Cases: Downloading a file, print queue, 
// push + shift OR unshift + pop
class Node {
	constructor(val){
		this.val = val;
		this.next = null;
	}
}

//class for Queue
class Queue{
	//constructor
	constructor(){
		this.first = null;
		this.last = null;
		this.size = 0;
	}
	
	// adding elements to a linkedList - at the end
	enqueue(val) {
		let newNode = new Node(val);
		if(this.size === 0){
			this.first = newNode;
			this.last = newNode;
		}else {
			let lastNode = this.last;
			lastNode.next = newNode;
			this.last = newNode;
		}
		this.size++;
		return this;
	}
	
	//removing value from linkedList - from the start
	dequeue(){
		if(this.size === 0) return null;
		
		if(this.size === 1){
			this.first = null;
			this.last = null;
		}else {
			let oldFirst = this.first;
			this.first = oldFirst.next;
		}
		this.size--;
		return oldFirst.val;
	}	
}