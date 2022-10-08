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
 * @return {boolean}
 */
 let isSymmetric = function(root) {
    return root == null || isMirror(root.left, root.right);
};

let isMirror = function(leftSub, rightSub) {
    if (leftSub == null && rightSub == null) return true;
    if (leftSub == null || rightSub == null) return false;
    return (leftSub.val == rightSub.val)
        && isMirror(leftSub.right, rightSub.left)
        && isMirror(leftSub.left, rightSub.right);
};