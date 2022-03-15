
const flattenList = function (head)  {

	let stack = [];  
	let current = head; 

	while(current && stack.length === 0){ // node 6
        if(current.children !== null) {	
                stack.push(current.next);
                current.next = current.children;
            }
        if(current.next  === null){
            current.next = stack.pop();
        }
            current = current.next; 
    }

	return head;
	
}
