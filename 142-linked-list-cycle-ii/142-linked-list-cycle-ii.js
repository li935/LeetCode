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
const detectCycle = head => {
  let p1 = head;
  let p2 = head;
  
  while (p2 && p2.next && p2.next.next) {
    p1 = p1.next;
    p2 = p2.next.next;
    if (p1 === p2) {
	  return detectCyclePos(head, p2);
	}
  }
  return null;
};

//phase 2 helper function to determine the actual cycle point (not just where the pointers intersected)
const detectCyclePos = (head, intersection) => {
  let p1 = head;
  let p2 = intersection;
  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p1;
};