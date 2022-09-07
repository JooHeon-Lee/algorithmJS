/**
 * Quick sort와 동일함. Quick sort 공부하기.
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

const solution = (l1,l2) => {
    const n3 = new ListNode();
    let cur = n3
    let n1 = l1
    let n2 = l2
    if(n1.val > n2.val) {
        cur.val = n2.val
        n2 = n2.next
        
    }else {
        cur.val = n1.val
        n1 = n1.next
    }

    while(n1.next || n2.next) {
        if(n1.val > n2.val) {
            cur = n3.next || new ListNode()
            cur.val = n2.val

        }else {
            cur = n3.next || new ListNode()
            cur.val = n1.val
        }
    }

return n3
}


const sol = (list1,list2) => {
    if (!list1) return list2;
    if (!list2) return list1;
    
    if (list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
}