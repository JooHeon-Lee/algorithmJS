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
 var isBalanced = function(root) {
    const dfs = function (node) {
      if(!node) return 0;
      const left = dfs(node.left); // -1 or 왼쪽 자식의 최대 깊이
      const right = dfs(node.right); // -1 or 오른쪽 자식의 최대 깊이

      if(left === -1 || right === -1 || Math.abs(left - right) > 1) return -1; // unbalanced, call stack 타고 올라가서 최종적으로 -1 return 한다.

      return 1 + Math.max(left, right); // 원래대로 라면, 트리의 가장 깊은 깊이를 return 한다.
  }

  return dfs(root) !== -1;  
};