var reverseList = function(head, prev = null) {

    if(head === null) return null; // recursively, this is the tail. 

    next = head.next;
    head.next = prev;
    return reverseList(next, head)
};