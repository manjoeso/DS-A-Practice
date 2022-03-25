/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    const newHead = new ListNode(null)
    let tail = newHead;
    
    let current1 = l1
    let current2 = l2;    
    let remainder = 0;

    while(current1 !== null || current2 !== null || remainder !== 0){
        // some conditional checking if 1 or 2 is there
        let val1 = (current1 === null ? 0 : current1.val);
        let val2 = (current2 === null ? 0 : current2.val);
        
        let sum = val1 + val2 + remainder;
        if(sum <= 9){
            remainder = 0;
        } else {
            remainder = 1; 
        }
        sum = sum % 10;
        
        tail.next = new ListNode(sum);
        tail = tail.next;
        
        if(current1 !== null) current1 = current1.next;
        if(current2 !== null) current2 = current2.next;
    }
    return newHead.next;
};