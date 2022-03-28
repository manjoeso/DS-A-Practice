var flatten = function(head) {
    let stack = []; // []
    let current = head;
    
    while(current){
        if(current.child){
            if(current.next) stack.push(current.next)
            let child = current.child;
            current.next = child;
            child.prev = current; 
            current.child = null; 
        }
        else if(current.next === null && stack.length !== 0){
            let nextNode = stack.pop(); // 4
            nextNode.prev = current;
            current.next = nextNode;
        }
        current.child = null;
        current = current.next;
    }
    return head;
};