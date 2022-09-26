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
 var deleteDuplicates = function(head) {
    let cur = head;
    while(cur) {
        if(!cur.next) break;
        while(cur.next && cur.val === cur.next.val) {
            cur.next = cur.next.next;
        }
        cur = cur.next;
    }
    return head
};