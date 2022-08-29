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
        let lengthOfList = 0;
        
        while (head) {
            lengthOfList += 1;
            head = head.next;
        }
        
        return lengthOfList;
    };
    
    const getIterationsOfList = length => {
        return Math.floor(length / 2);
    };
    
    const length = getLengthOfList(head);
    const iterations = getIterationsOfList(length);
    
    const node = head;
    
    for (let i = 0; i < iterations; i++) {
        let tempHead = head;

        for (let j = i + 1; j < length - i; j++) {
            tempHead = tempHead.next;
        }

        const tempVal = head.val;
        head.val = tempHead.val;
        tempHead.val = tempVal;

        head = head.next;
    }

    return node;
};