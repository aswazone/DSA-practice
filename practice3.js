class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
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
            else this.insertNode(root.right, newNode);
        }
    }
    search(root, target){
        if(!root) return false;
        else {
            if(root.data === target) return true;
            else if(target < root.data) return this.search(root.left, target);
            else return this.search(root.right, target);
        }
    }
}

const newBST = new BST();
newBST.insert(12)
newBST.insert(2)
newBST.insert(20)

console.log(newBST.search(newBST.root,20))
console.log(newBST.search(newBST.root,2))
console.log(newBST)