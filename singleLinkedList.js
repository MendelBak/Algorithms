// Create a Single Linked List.
// I tried to return the SLL itself as much as possible when appropriate, for example, after adding a new node, to enable chaining methods but in some cases it would make sense to have an actual return value instead which then neccessitates a separate function call.
function SLL() {
	this.head = null;
	console.log(
		'Successfully created an empty Single Linked List. It does not yet have a head or any nodes.'
	);

	// Node creation.
	function Node(val) {
		this.value = val;
		this.next = null;
	}

	// Checks to see if a head node exists. If not, it will create one. Used in creation functions like .add or .addFront.
	this.headCheckWithNodeCreation = function(val) {
		if (!this.head) {
			this.head = new Node(val);
			console.log(
				`You've successfully created a new head node with a value of ${val}.`
			);
			return this;
		}
	};

	// Appends a new node to a Single Linked List.
	this.add = function(val) {
		if (this.headCheckWithNodeCreation(val)) {
			return this;
		}
		let walker = this.head;
		while (walker.next) {
			walker = walker.next;
		}
		walker.next = new Node(val);
		console.log(
			`You've successfully created a new node with a value of ${val}.`
		);
		return this;
	};

	// Prepends a new node the the front of the SLL.
	this.addFront = function(val) {
		if (this.headCheckWithNodeCreation(val)) {
			return this;
		}
		const newNode = new Node(val);
		newNode.next = this.head;
		this.head = newNode;
		console.log(
			`You've successfully added a new node with a value of ${val} to the head of this SLL.`
		);
		return this;
	};

	// Checks if the SLL contains a specific value (user submitted).
	this.contains = function(val) {
		if (!this.head) {
			console.log(
				`This Single Linked List does not contain any nodes. ("Contains" Function)`
			);
			return false;
		}
		let walker = this.head;
		while (walker.next) {
			if (walker.value === val || walker.next.value === val) {
				console.log(`The value "${val}" was found in the Single Linked List.`);
				return true;
			}
			walker = walker.next;
		}
		console.log(
			`The value "${val}" is not contained in this Single Linked List.`
		);
		return false;
    };
    
        // Recursively search the SLL for a value.
	this.rSLLContains = function(val, walker = this.head) {
		if (walker.value === val) {
			console.log('The value you were searching was found in the SLL.');
			return true;
		} else if (!walker.next) {
			console.log('The value you were searching for was not found.');
			return false;
		}
		walker = walker.next;
		return this.rSLLContains(val, walker);
	};

	// Return the length of a Single Linked List.
	this.countLength = function() {
		if (!this.head) {
			console.log(
				`This Single Linked List does not contain any nodes. ("countLength" Function)`
			);
			return this;
		}
		let walker = this.head;
		let counter = 1;
		while (walker.next) {
			counter++;
			walker = walker.next;
		}
		console.log(`The SLL contains ${counter} nodes.`);
		return counter;
	};

	// Prints Values and Next values of all nodes contained in a Single Linked List.
	this.printNodes = function() {
		if (!this.head) {
			console.log(
				`This Single Linked List does not contain any nodes. ("printNodes" Function)`
			);
			return this;
		}
		let counter = 1;
		let walker = this.head;
		let returnString = '';
		while (walker.next) {
			returnString += `Node #${counter}, Value:${walker.value}, Next:${walker
				.next.value} -> `;
			counter++;
			walker = walker.next;
		}
		returnString += `Node #${counter}, Value:${walker.value}, Next:${walker.next} -> The total number of nodes in this SLL is ${counter}`;
		console.log(returnString);
		return returnString;
	};

	// Removes the head node from the SLL.
	this.removeHead = function() {
		if (!this.head) {
			console.log(
				`This Single Linked List does not contain any nodes. ("removeHead" Function)`
			);
			return this;
		}
		this.head = this.head.next;
		console.log('The head node was removed from this Single Linked List.');
		return this;
	};

	// Remove a node if it contains a specific value.
	this.remove = function(val) {
		if (!this.head) {
			console.log(
				`This Single Linked List does not contain any nodes. ("remove" Function)`
			);
			return this;
		}
		if (this.head.value !== val && this.head.next === null) {
			console.log(
				'Could not find a node matching your value. No node wwas removed.'
			);
			return this;
		}
		if (this.head.value === val && this.head.next === null) {
			this.head = null;
			console.log(
				`One node, matching your value of ${val}, has been successfully removed.`
			);
			return this;
		}
		if (this.head.value === val) {
			this.head = this.head.next;
			console.log(
				`One node, matching your value of ${val}, has been successfully removed.`
			);
			return this;
		}
		let prevNode = this.head;
		let walker = this.head.next;
		if (walker.value === val && walker.next === null) {
			prevNode.next = null;
			console.log(
				`One node, matching your value of ${val}, has been successfully removed.`
			);
			return this;
		}
		while (walker.next) {
			if (walker.next.value === val && walker.next.next === null) {
				walker.next = null;
				console.log(
					`One node, matching your value of ${val}, has been successfully removed.`
				);
				return this;
			}
			if (walker.value === val) {
				prevNode.next = walker.next;
				console.log(
					`One node, matching your value of ${val}, has been successfully removed.`
				);
				return this;
			}
			walker = walker.next;
		}
		return this;
    };
    
	// Bracket below is the ending bracket for the SLL creation function.
}

//
// Separate functions that apply to SLLs.
//


// Returns a copy of a given SLL.
// Should work properly but needs some more testing to ensure.
function copySLL(SLLToBeCopied) {
	if (!SLLToBeCopied.head) {
		return false;
	}
	let walker1 = SLLToBeCopied.head;
	let newSLL = new SLL();
	newSLL.head = walker1;
	let walker2 = newSLL.head;
	while (walker1.next) {
		walker1 = walker1.next;
		walker2.next = walker1;
		walker2 = walker2.next;
	}
	return newSLL;
}

// Create a SLL using above SLL() function.
var mySLL = new SLL();
// Add nodes to the original SLL.
mySLL.add(1).add(2).add(4);

mySLL.rSLLContains(454);
// Create a new variable and run the copySLL() function while passing the original SLL as an argument.
// var SLL2 = new copySLL(mySLL);
// Verify that the copy is correct.
// SLL2.printNodes()
