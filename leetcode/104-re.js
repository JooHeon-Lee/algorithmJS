// 가장 깊은 노드의 길이 구하는 문제
//깊이우선탐색으로 해결 가능

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
 var maxDepth = function(root) {
    let depth = 0; 
    const dfs = (root, len) => { 
        if(!root) { 
            depth = Math.max(len - 1, depth); 
            return; 
        } 
        dfs(root.left, len + 1); 
        dfs(root.right, len + 1); 
    } 
    dfs(root, 1); 
    return depth;
};