/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    const getLengthOfList = head => {
        let idx = 0;
        
        while (head) {
            idx += 1;
            head = head.next;
        }
        
        return idx;
    }
    
    const getIterationsOfReverse = length => {
        return Math.floor(length / 2);
    }
    
    const length = getLengthOfList(head);
    const iterations = getIterationsOfReverse(length);
    
    const node = head;
    
    for (let i = 0; i < iterations; i++) {
        let tempHead = head;

        for (let j = i; j < length - i - 1; j++) {
            tempHead = tempHead.next;
        }

        const tempVal = head.val;
        head.val = tempHead.val;
        tempHead.val = tempVal;

        head = head.next;
    }

    return node;
};