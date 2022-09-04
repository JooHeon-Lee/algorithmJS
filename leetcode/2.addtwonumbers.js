
/*
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
*/
var addTwoNumbers = function(l1, l2) {
    const answer = new ListNode();
    let n1 = l1;
    let n2 = l2;
    let cur = answer;
    let carry = false;
    
    let val = n1.val + n2.val;
    if(val > 9){
        carry = true;
        val = val % 10;
    }
    cur.val = val;
    
    while(n1.next || n2.next){
        n1 = n1.next || new ListNode();
        n2 = n2.next || new ListNode();
        cur.next = new ListNode();
        cur = cur.next;
        val = n1.val + n2.val;
        if(carry){
            val++;
            carry = false;
        }
        if(val > 9){
            carry = true;
            val = val % 10;
        }
        cur.val = val;
    }
    if(carry){
        cur.next = new ListNode(1);
    }
    
    return answer;
};
