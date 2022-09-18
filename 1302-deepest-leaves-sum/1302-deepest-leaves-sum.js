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
var deepestLeavesSum = function(root) {
    let depth = 0;
    let maxDepth = 0;
    const depthList = [];
    
    root.parent = null;
    
    while (root) {
        root.visited = true;
        root.depth = depth;
        
        depthList.push({
            val: root.val,
            depth: root.depth
        });
        
        if (depth > maxDepth) {
            maxDepth = depth;
        }
        
        if (root.left === null && root.right === null) {
            root = root.parent;
            depth--;
        } else if (root.left !== null) {
            if (root.left.visited !== undefined) {
                if (root.right !== null) {
                    if (root.right.visited !== undefined) {
                        root = root.parent;
                        depth--;
                    } else {
                        root.right.parent = root;
                        root = root.right;
                        depth++;
                    }
                } else {
                    root = root.parent;
                    depth--;
                }
            } else {
                root.left.parent = root;
                root = root.left;
                depth++;
            }
        } else {
            if (root.right.visited !== undefined) {
                root = root.parent;
                depth--;
            } else {
                root.right.parent = root;
                root = root.right;
                depth++;
            }
        }
    }
    
    return depthList.reduce((acc, cur) => {
        if (cur.depth === maxDepth) {
            acc += cur.val;
        }
        
        return acc;
    }, 0);
};