// BE AWARE! None of the function below return an actual value, they simply console.log the appropriate response and return "this" which allows chaining methods.
// This lack of return values is purposeful. It can be manipulated to return the expected response from whatever program calls it.

//Create an directed Graph.
function Graph() {
	this.edges = [];
	this.vertices = [];
	this.id = 0;

	console.log('A new Graph, containing no vertices, has been created.');

	function Vertex(id, val) {
		this.id = id;
		this.value = val;
	}

	// This function creates a new vertex and adds it to the Graph. The value is optional, since it's not necessary for the creation of the vertex, but rather holds a value for the user.
	this.addVertex = function(val = null) {
		this.vertices.push(new Vertex(this.id, val));
		console.log(
			`A new Vertex has been created ID:${this.id}, Value:${val}, Edges: None.`
		);
		this.id++;
		return this;
	};

	// Checks if a vertex exists with the ID passed by the user.
	this.vertexExists = function(vertId) {
		let foundVertex = false;
		for (var i = 0; i < this.vertices.length; i++) {
			if (this.vertices[i].id === vertId) {
				foundVertex = true;
				break;
			} else {
				continue;
			}
		}

		// Assess loop results
		if (foundVertex === true) {
			console.log(`True. A vertex with the ID of ${vertId} exists.`);
		} else {
			console.log(`False. No vertex with an ID matching ${vertId} was found.`);
		}
		return this;
	};

	// This function removes the specified vertex and all edges pointing to and from it.
	this.removeVertex = function(vertId) {
		let foundVertex = false;
		for (var i = 0; i < this.vertices.length; i++) {
			if (this.vertices[i].id === vertId) {
				this.vertices.splice(i, 1);
				foundVertex = true;
				break;
			} else {
				continue;
			}
		}
		// Assess loop results
		if (foundVertex === true) {
			for (var j = 0; j < this.edges.length; j++) {
				if (this.edges[j][0] === vertId || this.edges[j][1] === vertId) {
					this.edges.splice(j, 1);
					j--;
				}
			}
			console.log(
				`One vertex with an ID of ${vertId}, and all the edges pointing to and from it, has been removed from the Graph.`
			);
		} else {
			console.log(
				`removeVertex failed since no vertex with an ID matching ${vertId} was found.`
			);
		}
		return this;
	};

	// This function creates a one way edge (connection) between two vertices.
	this.addEdge = function(id1, id2) {
		if (this.edges.length <= 0) {
			this.edges.push([id1, id2]);
			console.log(
				`A one way edge (connection) between vertices ${id1} and ${id2} has been created.`
			);
			return this;
		} else {
			for (var i = 0; i < this.edges.length; i++) {
				if (this.edges[i][0] === id1 && this.edges[i][1] === id2) {
					console.log(
						`You cannot create a new edge between vertices ${id1} and ${id2} since that edge already exists.`
					);
					return this;
				} else {
					this.edges.push([id1, id2]);
					console.log(
						`A one way edge between vertices ${id1} and ${id2} has been created.`
					);
					return this;
				}
			}
		}
	};

	//This function determines whether or not two vertices already have a specific, (one way) edge (connection).
	this.edgeExists = function(id1, id2) {
		if (this.edges.length <= 0) {
			console.log(`No edge exists between ${id1} and ${id2}.`);
			return this;
		} else {
			for (var i = 0; i < this.edges.length; i++) {
				if (this.edges[i][0] === id1 && this.edges[i][1] === id2) {
					console.log(
						`True. An edge does exist between vertices ${id1} and ${id2}.`
					);
					return this;
				} else {
					console.log(`No edge exists between vertices ${id1} and ${id2}.`);
					return this;
				}
			}
		}
	};
}

var MyGraph = new Graph();
MyGraph.addVertex('Hello Mendel').addVertex('Bye Mendel').addVertex();
MyGraph.addEdge(1, 2)
	.addEdge(2, 1)
	.addEdge(1, 0)
	.addEdge(0, 1)
	.addEdge(0, 2)
	.addEdge(2, 0);
MyGraph.vertexExists(1);
MyGraph.removeVertex(2);
MyGraph.vertexExists(1);
MyGraph.edgeExists(1, 0);
