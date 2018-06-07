// Create Binary Search Tree 
function BST() {
    this.root = null;

    function Node(val) {
        this.value = val;
        this.right = null;
        this.left = null;
    }

    // Adds a new node to the BST. Does not reorder nodes but appends the new node to the end of the BST following the standard BST chain of logic (placed on right or left side depending on the previous node value compared to new node value). (Equal values insert to the left side).

    this.add = function (val) {
        if (!this.root) {
            this.root = new Node(val);
            console.log(
                `A root has been defined for your BST with a value of ${val}.`
            );
            return this;
        }
        let walker = this.root;
        while (true) {
            if (val >= walker.value && walker.right) {
                walker = walker.right;
            } else if (val >= walker.value && !walker.right) {
                walker.right = new Node(val);
                console.log(
                    `A new node with the value of ${val} has been inserted at the end of your BST.`
                );
                return this;
            }

            if (val < walker.value && walker.left) {
                walker = walker.left;
            } else if (val < walker.value && !walker.left) {
                walker.left = new Node(val);
                console.log(
                    `A new node with the value of ${val} has been inserted at the end of your BST.`
                );
                return this;
            }
        }
    };

    // Inserts a new node to the BST while ensuring the node is in the correct position based on its numerical value. (reorders *only* conflicting BST nodes to place new node in proper numerical location).

    // WARNING! Console.log messages are not working when inserting values that are less than the root value, for some reason.
    this.insert = function (val) {
        let root = this.root;

        if (!root) {
            this.root = new Node(val);
            console.log(
                `A root has been defined for your BST with a value of ${val}.`
            );
            return this;
        }

        let currentNode = this.root;
        const newNode = new Node(val);

        while (currentNode) {
            if (newNode.value <= currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    `A new node with the value of ${val} has been inserted in the BST in a position that corresponds to its numerical value.`;
                    return this;
                } else if (
                    newNode.value <= currentNode.value &&
                    newNode.value > currentNode.left.value
                ) {
                    let temp = currentNode.left;
                    currentNode.left = newNode;
                    newNode.left = temp;
                    `A new node with the value of ${val} has been inserted in the BST in a position that corresponds to its numerical value.`;
                    return this;
                } else {
                    currentNode = currentNode.left;
                }
            } else if (newNode.value > currentNode.value) {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    console.log(
                        `A new node with the value of ${val} has been inserted in the BST in a position that corresponds to its numerical value.`
                    );
                    return this;
                } else if (
                    newNode.value > currentNode.value &&
                    newNode.value < currentNode.right.value
                ) {
                    let temp = currentNode.right;
                    currentNode.right = newNode;
                    newNode.right = temp;
                    `A new node with the value of ${val} has been inserted in the BST in a position that corresponds to its numerical value.`;
                    return this;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }
    };
    console.log('A new BST has been created with a null root and no nodes.');

    // This outer function calls the inner function recursively which counts the total number of nodes in the BST.
    this.outerCountNodes = function () {
        let numNodes = 0;
        let current = this.root;

        // The original function call, which calls the function (rCountNodes) defined below.
        numNodes = rCountNodes(current, numNodes);

        function rCountNodes(current, numNodes) {
            // Break condition
            if (current === null) {
                return numNodes;
            } else {
                numNodes++;

                // The recursive function calls occur here.
                // We pass zero to the numNodes parameter to prevent numNodes from increasing exponentially as the recursion progresses.
                numNodes += rCountNodes(current.right, 0);
                numNodes += rCountNodes(current.left, 0);
                return numNodes;
            }
        }

        // After the recursive function calls finish, console log and return the final value.
        console.log(`The total number of nodes in your BST is ${numNodes}`);
        return numNodes;
    };
}

var MyBST = new BST();
MyBST.add(770).add(613).insert(666).insert(666).insert(777).insert(888);
MyBST.outerCountNodes();
// End BST