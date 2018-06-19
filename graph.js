// BE AWARE! Some of the function below do not return an actual value, or they return "this" (in order to allow chained methods), they simply console.log the appropriate response and return "this" which allows chaining methods.
// This lack of return values is purposeful. It can be manipulated to return the expected response from whatever program calls it.

// Additionally, I have not weighted the edges in this graph since this graph was not designed with any specifc purpose in mind, the weight of an edge would have no meaning here.

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

	// Checks if a vertex exists with the ID passed by the user. If true, returns the index of the vertex.
	this.vertexExists = function(vertId) {
		for (var i = 0; i < this.vertices.length; i++) {
			if (this.vertices[i].id === vertId) {
			  console.log(`True. A vertex with the ID of ${vertId} exists.`);
        // This returns the index where the vertex was found. This allows this method to be referenced by others easily.
				return i;
			} else {
				continue;
			}
		}
    // If no vertex was found during loop.
    console.log(`False. No vertex with an ID matching ${vertId} was found.`);
    return false;
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
			return true;
		} else {
			console.log(
				`removeVertex failed since no vertex with an ID matching ${vertId} was found.`
			);
			return false;
		}
	};

	// Function that gets the value of a specified vertex. Calls the vertexExists method.
	this.getVertexValue = function(vertId) {
    const vertexIndex = this.vertexExists(vertId);
		if (vertexIndex !== false) {
				if (this.vertices[vertexIndex].id === vertId) {
					console.log(
						`The value of Vertex ${vertId} is ${this.vertices[vertexIndex].value}`
					);
					return true;
				}
		} else {
			console.log('getVertexValue failed since vertex ${vertId} does not exist.');
			return false;
		}
	};

	// Function that sets sets or changes the value of a vertex. Calls the vertexExists method.
	this.setVertexValue = function(vertId, val) {
    const vertexIndex = this.vertexExists(vertId);
		if (vertexIndex !== false) {
				if (this.vertices[vertexIndex].id === vertId) {
					console.log(
						`Successfully set the value of vertex ${vertId} with "${val}". Original value was "${this
							.vertices[vertexIndex].value}".`
					);
					return true;
				}
		} else {
			console.log(`setVertexValue failed since vertex ${vertId} does not exist.`);
			return false;
		}
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
	this.edgeExists = function(vertId1, vertId2) {
		if (this.edges.length <= 0) {
			console.log(`No edge exists between ${vertId1} and ${vertId2}.`);
			return false;
		} else {
			for (var i = 0; i < this.edges.length; i++) {
				if (this.edges[i][0] === vertId1 && this.edges[i][1] === vertId2) {
					console.log(
						`True. An edge does exist between vertices ${vertId1} and ${vertId2} at index ${i} (in this.vertices).`
					);
					// This returns the index where the edge was found. This allows this method to be reference by others easily.
					return i;
				}
			}
			console.log(`No edge exists between vertices ${vertId1} and ${vertId2}.`);
			return false;
		}
	};

	// This function removes a directed edge (one-way) from between two edges. This does not remove both of the edges (if they exist), just the specified one.
	this.removeOneEdge = function(vertId1, vertId2) {
    const edgeIndex = this.edgeExists(vertId1, vertId2);
		if (edgeIndex !== false) {
      // Remove the specified edge from the edges array.
      this.edges.splice(edgeIndex, 1);
      console.log(`A one-way edge betwen vertices ${vertId1} and ${vertId2} has been removed.`);
      return true;
    } else {
      console.log(`removeOneEdge failed since no edge exists between vertices ${vertId1} and ${vertId2}`);
      return false;
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
// MyGraph.edgeExists(2, 1);
// MyGraph.removeOneEdge(0,3);
// MyGraph.vertexExists(1);
MyGraph.getVertexValue(3);
// MyGraph.setVertexValue(1, "testsetvalue");