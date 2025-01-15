// DSA
// function secondLargest(arr){
//     let largest = Number.NEGATIVE_INFINITY;
//     let secondLargest = Number.NEGATIVE_INFINITY;
    
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] > largest){
//             secondLargest = largest;
//             largest = arr[i];
//         }else if(arr[i] > secondLargest && arr[i] != largest){
//             secondLargest = arr[i];
//         }
//     }
//     return secondLargest;
// }

// console.log(secondLargest([-1,-2,-3,-4,-5,-6,7]))

//------------------------------------------------------
// function removeDup(arr){
    
//     if(arr.length == 0) return -1;
//     arr.sort((a,b)=> a-b)   
//     let i=0;
//     for(let j=0;j<arr.length;j++){
//          if(arr[i] !== arr[j]){
//             i++;
//             arr[i] = arr[j];
//          }
//     }
//     arr.length = i+1;
//     return arr;
// }

// console.log(removeDup([1,2,2,3,3,3,4]))

//--------------------------------------------------------------

// function selectionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let min = i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j] < arr[min]){
//                 min = j;
//             }
//         }
//         if(min!==i){
//             [arr[i],arr[min]]=[arr[min],arr[i]]
//         }
//     }
//     return arr;
// }

// console.log(selectionSort([8,20,-2,4,-6]))

//-----------------------------------------------------------------------

// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let key = arr[i]
//         let j = i-1;
//         while(j>=0 && arr[j] > key){
//             arr[j+1] = arr[j];
//             j--;
//         }
//         arr[j+1] = key;
//     }
//     return arr;
// }

// console.log(insertionSort([8,20,-2,4,-6]))

//--------------------------------------------------------------------------------

// function quickSort(arr){
//     if(arr.length < 2) return arr;
//     let pivot = arr[arr.length-1];
//     let left = []
//     let right = []
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i] < pivot) left.push(arr[i])
//         else right.push(arr[i]);
//     }
//     return [...quickSort(left), pivot, ...quickSort(right)];
// }

// console.log(quickSort([8,20,-2,4,-6]))

//-------------------------------------------------------------------------------

// function mergeSort(arr){
//     if(arr.length < 2) return arr;
//     let mid = Math.floor((arr.length)/2);
//     let leftArr =arr.slice(0, mid)
//     let rightArr =arr.slice(mid);

//     return merge(mergeSort(leftArr), mergeSort(rightArr));
// }

// function merge(leftArr, rightArr){
//     let sortedArr =[];

//     while(leftArr.length && rightArr.length){
//         if(leftArr[0] <= rightArr[0]) sortedArr.push(leftArr.shift())
//         else sortedArr.push(rightArr.shift())
//     }
//     return [...sortedArr, ...leftArr, ...rightArr]
// }

// console.log(mergeSort([8,20,-2,4,-6]))

//------------------------------------------------------------------------------
// class Stack {
//     constructor(){
//         this.stack = [];
//     }
//     push(x){
//         this.stack.push(x)
//     }
//     pop(){
//         if(this.isEmpty()) return 'Stack is Empty !!'
//         this.stack.pop()
//     }
//     top(){
//         return this.stack[this.size()-1]
//     }
//     size(){
//         return this.stack.length
//     }
//     isEmpty(){
//         return this.size() === 0
//     }
//     print() {
//         let res
//         console.log(this.stack.join(' '))
//    }


// }
// {//operation
// const newStack = new Stack()

// newStack.push(10)
// newStack.push(20)
// newStack.push(30)
// newStack.push(40)
// newStack.push(50)
// newStack.pop()
// newStack.pop()
// newStack.pop()
// console.log(newStack.top())
// newStack.print()

// }

class Queue {
    constructor(){
        this.queue = [];
    }
    enqueue(){}
    dequeue(){}
    top(){}
    isEmpty(){}
    isEmpty(){}
}