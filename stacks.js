// Stack : It is a collection of data, abstract data structure follows LIFO
// Use Cases: Undo/Redo; Tracking the history of the browser 
// push and pop if using array 
class Node {
	constructor(val){
		this.val = val;
		this.next = null;
	}
}

//class for Stack
class Stack{
	//constructor
	constructor(){
		this.first = null;
		this.last = null;
		this.size = 0;
	}
	
	// adding elements to a linkedList - at the start
	push(val) {
		let newNode = new Node(val);
		if(this.size === 0) {
			this.first = newNode;
			this.last = newNode;
		}else {
			let firstNode = this.first;
			this.first = newNode;
			this.first.next = firstNode;
		}
		this.size++;
		return this;
	}
	
	//removing value from linkedList - from the start
	pop(){
		if(this.size === 0) return null;
		let removedNode = this.first;
		if(this.first === this.lasy){
			this.last = null;
		}
		this.first = this.first.next;
		this.size--;
		return removedNode.val; // returning the value of the removed node 
	}
	
}