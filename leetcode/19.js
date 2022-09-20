/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let cur = head
    let list = head
    let length = 1
    let prev,index = 0
    while(list.next) {
        length++
        list = list.next
    }
    
    if(n === length) {
        head = cur.next
    }else {
        while(index++ < length - n){
            prev = cur;
            cur = prev.next;
        }
        prev.next = cur.next;
    }
    cur.next = undefined
    
    return head
}