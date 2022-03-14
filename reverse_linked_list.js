var reverseList = function(head) {
    // three pointers, current, prev and next nodes;
    if(head === null) return null;
    
    let prev = null;
    let currentNode = head;
    let next;
    while(currentNode !== null){
        next = currentNode.next;
        currentNode.next = prev; 
        prev = currentNode;
        currentNode = next; // reference point
    }
    return prev;
    
    
    
    
};