/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let parentNode = root;
    root.parent = null;
    
    let rootLevel = 1;
    
    let pNodeChecker = false;
    let qNodeChecker = false;
    
    while (root) {
        root.visited = true;
        root.level = rootLevel;
        
        if (root.val === p.val) {
            p = root;
            pNodeChecker = true;
        }
        
        if (root.val == q.val) {
            q = root;
            qNodeChecker = true;
        }
        
        // console.log(root.val, root.level);
        
        if (root.left === null && root.right === null) {
            root = root.parent;
            rootLevel--;
        } else if (root.left !== null) {
            if (root.left.visited === undefined) {
                root.left.parent = root;
                root = root.left;
                rootLevel++;
            } else if (root.right !== null) {
                if (root.right.visited === undefined) {
                    root.right.parent = root;
                    root = root.right;
                    rootLevel++;
                } else {
                    root = root.parent;
                    rootLevel--;
                }
            } else {
                root = root.parent;
                rootLevel--;
            }
        } else {
           if (root.right !== null) {
                if (root.right.visited === undefined) {
                    root.right.parent = root;
                    root = root.right;
                    rootLevel++;
                } else {
                    root = root.parent;
                    rootLevel--;
                }
            } else {
                root = root.parent;
                rootLevel--;
            } 
        }
    }
    
    while (true) {
        if (p.val === q.val) {
            break;
        } else {
            if (p.level > q.level && p.level > 1) {
                p = p.parent;
            } else {
                q = q.parent;
            }
        }
    }
    
    return p;
};