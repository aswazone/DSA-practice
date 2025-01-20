





//============================================================= Tree ==============================================================================

class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    isEmpty(){
        return this.root === null;
    }

    insert(data){
        const newNode = new Node(data);
        if(this.isEmpty()) this.root = newNode;
        else this.insertNode(this.root, newNode);
    }
    insertNode(root, newNode){
        if(newNode.data < root.data){
            if(root.left === null) root.left = newNode;
            else this.insertNode(root.left, newNode);
        }else{
            if(root.right === null) root.right = newNode;
            else this.insertNode(root.right, newNode)
        }
    }
    search(root,target){
        if(!root) {
            return false;
        }else{
            if(root.data === target) return true;
            else if(target < root.data) return this.search(root.left, target);
            else return this.search(root.right, target);
        }
    }

    // DFS traversal
    preOrder(root){
        if(root){
            console.log(root.data);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.data);
            this.inOrder(root.right);
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.data);
        }
    }   

    // BFS traversal
    levelOrder(){
        const queue = [];
        queue.push(this.root);
        while(queue.length){
            let current = queue.shift()
            console.log(current.data);

            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
    }

    min(root){
        if(!root.left) return root.data;
        else return this.min(root.left)
    }
    max(root){
        if(!root.right) return root.data;
        else return this.max(root.right);
    }

}


const newBst = new BinarySearchTree()

newBst.insert(10)
newBst.insert(5)
newBst.insert(3)
newBst.insert(15)
newBst.insert(7)
console.log(newBst.search(newBst.root,15))
console.log(newBst.search(newBst.root,10))
console.log(newBst.search(newBst.root,2))
console.log(newBst.search(newBst.root,-1))
console.log(newBst.search(newBst.root,20))

newBst.preOrder(newBst.root)
newBst.inOrder(newBst.root)
newBst.postOrder(newBst.root)
newBst.levelOrder()
console.log(newBst.min(newBst.root))
console.log(newBst.max(newBst.root))

console.log(newBst)

//========================================================== Tree Traversal ====================================================
//Preorder traversal

