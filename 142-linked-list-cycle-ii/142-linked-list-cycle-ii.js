/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var detectCycle = head => {
    let slow = head;
    let fast = head;
    
    while (fast && fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) {
            console.log(head.val, fast.val);
            return detectCyclePos(head, fast);
        }
    }
    
    return null;
};

const detectCyclePos = (head, intersection) => {
    let slow = head;
    let fast = intersection;
  
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    
    return fast;
};