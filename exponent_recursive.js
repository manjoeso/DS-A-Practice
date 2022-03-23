var myPow = function(x, n) {
    if(n === 0) return 1; 
    
    const posRecursion = function(x, n){
        if(n === 0) return 1; 
        
        return x * posRecursion(x, n - 1)
    }
    
    const negRecursion = function(x , n){
        if(n === 0) return 1; 
        
        // 1/ (2 * 2) = 1/4 
        // 1 / (2 * (2, -1)) 1 * 2 = 2 
        // 1 / (2 * (2, 0))) return 1 
        return (1 / (x * negRecursion(x, n + 1)))
    }
    
    if(n > 0) return posRecursion(x, n);
    return negRecursion(x, n);
    
};