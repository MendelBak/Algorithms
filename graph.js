
//Create the data structure Graph (assign it to a variable).
function Graph() {
	this.connections = [];
	this.nodes = [];
	this.id = 0;

	function Node(val, id) {
		this.id = id;
		this.value = val;
	}

	// This function creates a new node and adds it to the Graph. The value is optional, since it's not necessary for the creation of the node, but rather holds a value for the user.
	this.addNode = function(val) {
		this.nodes.push(new Node(this.id, (val = '')));
		console.log(`A new Node with the ID of ${this.id} has been created`);
		this.id++;
		return this;
	};

	// This function creates a one way connection/relationship between two nodes.
	this.addConnection = function(id1, id2) {
		if (this.connections.length <= 0) {
			this.connections.push([id1, id2]);
			console.log(
				`A one way connection between nodes ${id1} and ${id2} has been created.`
			);
			return this;
		} else {
			for (var i = 0; i < this.connections.length; i++) {
				if (this.connections[i][0] === id1 && this.connections[i][1] === id2) {
					console.log(
						`You cannot create a new connection between nodes ${id1} and ${id2} since that connection already exists.`
					);
					return this;
				} else {
					this.connections.push([id1, id2]);
					console.log(
						`A one way connection between nodes ${id1} and ${id2} has been created.`
					);
					return this;
				}
			}
		}
	};

	//This function determines whether or not two nodes already have a specific, (one way) connection/relationship.
	this.connectionExists = function(id1, id2) {
		if (this.connections.length <= 0) {
			console.log(`The connection between ${id1} and ${id2} does not exist.`);
			return this;
		} else {
			for (var i = 0; i < this.connections.length; i++) {
				if (this.connections[i][0] === id1 && this.connections[i][1] === id2) {
					console.log(`A connection exists between ${id1} and ${id2}.`);
					return this;
				} else {
					console.log(
						`The connection between ${id1} and ${id2} does not exist.`
					);
					return this;
				}
			}
		}
	};
}

var MyGraph = new Graph();
MyGraph.addNode('Hello Mendel').addNode('Bye Mendel');
MyGraph.addConnection(0, 1).addConnection(1, 0).addConnection(0, 1);
MyGraph.connectionExists(0,1);
