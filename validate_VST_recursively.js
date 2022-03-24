

var isValidBST = function(root, max = Infinity, min = -Infinity) {
    if(root === null) return true;
    if(root.val >= max) return false;
    if(root.val <= min) return false;
    
    return (isValidBST(root.left, root.val, min) && isValidBST(root.right, max, root.val))
    // overall left it true, now checks overall right
};

