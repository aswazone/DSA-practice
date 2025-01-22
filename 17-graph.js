




//=================================================================== Graph =============================================================================

// Type of representation of Graphes

adjacencyMatrix = [   //      A   B   C
    [0 , 1 , 0],      //  A  [0 , 1 , 0],   
    [1 , 0,  1],      //  B  [0 , 1 , 0],   
    [0 , 1 , 0],      //  C  [0 , 1 , 0],   
]

// console.log(adjacencyMatrix[0][1])
// console.log(adjacencyMatrix[1][0])
// console.log(adjacencyMatrix[1][2])
// console.log(adjacencyMatrix[2][1])

// ```````````````````````````````````````````

adjacencyList = {
    'A': 'B',
    'B': 'A,B',
    'C': 'B',
}

// console.log(adjacencyList['A'])
// console.log(adjacencyList['B'])
// console.log(adjacencyList['C'])

// ====================================================== Concept ============================================================

class Graph {
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = new Set();
    }
    addEdge(vertex1, vertex2){
        if(!this.adjacencyList[vertex1]) this.addVertex(vertex1);
        if(!this.adjacencyList[vertex2]) this.addVertex(vertex2);

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
}


const graph = new Graph();
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

graph.addEdge('A','B')
graph.addEdge('B','C')

console.log(graph)

//        B
//       / \
//      A   C