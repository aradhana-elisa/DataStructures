// Stack : It is a collection of data, abstract data structure follows LIFO
// Use Cases: Undo/Redo; Tracking the history of the browser 
 
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
	
	// adding elements to a linkedList 
	push(val) {
		let newNode = new Node(val);
		if(this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		}else {
			let lastNode = this.tail;
			lastNode.next = newNode;
			newNode.prev = lastNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}
	
	//removing value from linkedList 
	pop(){
		if(this.length === 0) return undefined;
		let removedNode = this.tail;
		if(this.length === 1){
			this.head = null;
			this.tail = null;
		}else {
			let newTail = removedNode.prev;
			this.tail = newTail;
			newTail.next = null;
			removedNode.prev = null;
		}
		this.length--;
		return removedNode;
	}
	
	//removes from start of linkedList
	shift(){
		if(this.length === 0) return undefined;
		let firstElement = this.head;
		if(this.length === 1){
			this.head = null;
			this.tail = null;
		}else {
			let newHead = firstElement.next;
			this.head = newHead;
			newHead.prev = null;
			firstElement.next = null;			
		}
		this.length--;
		return firstElement;
	}
	
	//adds from start of linkedList
	unshift(val){
		let newNode = new Node(val);
		if(this.length === 0){
			this.head = newNode;
			this.tail = newNode;
		}else {
			let oldHead = this.head;
			this.head = newNode;
			newNode.next = oldHead;
			oldHead.prev = newNode;
		}
		this.length++;
		return this;
	}
	
	//Get 
	get(index){
		//check for invalid index
		if(index === 0 || index >= this.length) return null;
		// chcek whether to start from head/tail
		if(index < this.length/2){
			//start from the head
			let count = 0;
			let current = this.head;
			while(count !== index){
				current = current.next;
				count++;
			}
		}else {
			//start from the tail 
			let count = this.length - 1;
			let current = this.tail;
			while(count !== index){
				current = current.prev;
				count--;
			}
		}
		return current;
	}
	
	//SET 
	set(index, value){
		//check for invalid index
		if(index === 0 || index >= this.length) return null;
		let foundNode = this.get(index);
		if(foundNode != null){
			foundNode.val = val;
			return true;
		}
		return false;
	}
	
	//Insert into linkedList
	insert(index, val){
		//check for invalid index
		if(index >= this.length) return null;
		//making use of previously declared unshift and push functions 
		if(index === 0) return this.unshift(val);
		if(index === this.length) this.push(val);
		
		let newNode = new Node(val); 
		let beforeNode = this.get(index - 1); 
		let afterNode = beforeNode.next;
		
		beforeNode.next = newNode;
		newNode.prev = beforeNode;
		newNode.next = afterNode;
		afterNode.prev = newNode;
		
		this.length++;
		return this;
	}
	
	//Remove
		// 1 -> 2 -> 4 -> 5
	// 		    1
	remove(index){
		if(index >= this.length) return null;
		//making use of previously declared shift and pop functions 
		if(index === 0) return this.shift();
		if(index === this.length) this.pop();
		
		let nodeToRemove = this.get(index);
		let prevNode = nodeToRemove.prev;
		let nextNode = nodeToRemove.next;
		
		prevNode.next = nextNode;
		nextNode.prev = prevNode;
		nodeToRemove.next = null;
		nodeToRemove.prev = null;
		
		this.length--;
		return nodeToRemove;
	}
	
}