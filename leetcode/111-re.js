/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var minDepth = function(root) {
    // root 노드 자체가 null이면 높이=0
    if(!root) {
        return 0;
    }
    
    // root 노드의 자식 노드가 없는 경우 높이=1
    if(!root.left && !root.right) {
        return 1;
    }
    
    // 자식노드의 높이에 1을 더한다.(현재 루트노드의 높이 = 1)
    var leftDepth = minDepth(root.left) + 1;
    var rightDepth = minDepth(root.right) + 1;
    
    // 왼쪽 자식 노드가 없는 경우, 오른쪽 자식 노드를 루트노드로 하는 노드의 높이를 구한다.
    if(!root.left) {
        return rightDepth;
    }
    // 오른쪽 자식 노드가 없는 경우, 왼쪽 자식 노드를 루트노드로 하는 노드의 높이를 구한다.
    if(!root.right) {
        return leftDepth;
    }
           
    // 왼쪽과 오른쪽 자식노드 중 높이가 작은 값을 구한다.
    return Math.min(leftDepth, rightDepth);
    
};