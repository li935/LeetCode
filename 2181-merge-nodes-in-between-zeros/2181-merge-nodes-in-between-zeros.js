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
var mergeNodes = function(head) {
    let zeroChecker = -1;
    let mergeNode = 0;
    let mergeNodeList = {val: 0, next: null};
    let mergeNodeHead = mergeNodeList;
    
    while (head) {
        if (head.val === 0) {
            if (zeroChecker === -1) {
                zeroChecker = 1;
            } else if (zeroChecker === 1) {
                mergeNodeList.next = {val: mergeNode, next: null};
                mergeNodeList = mergeNodeList.next;
                mergeNode = 0;
            }
        } else {
            mergeNode += head.val;
        }
        
        head = head.next;
    }
    
    return mergeNodeHead.next;
};
