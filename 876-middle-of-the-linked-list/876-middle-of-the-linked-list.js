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
var middleNode = function(head) {
    const getLength = (head) => {
        let length = 0;
        
        while (head) {
            head = head.next;
            length++;
        }
        
        return length - 1;
    };
    
    for (let i = 0; i < getLength(head); i++) {
        head = head.next;
    }
    
    return head;
};