/**
 * @param {string} s
 * @return {string}
 */
 var decodeString = function(s) {
    // Input: s = "2[abc]3[cd]ef"    
    // Input: s = "3[a]2[bc]"  
        
        
    // Input: s = "3[a2[c]]"
        let answerStr = '';
        let stack = []; // [3, '[', 'a', 2 // decoded string = 'c'
        let num; 
    
        for(let i = 0; i < s.length; i++){
            if(s[i] === ']'){
                let decodedString = '';
                while(stack[stack.length - 1] !== '[') {
                    decodedString += stack.pop();
                }
                
                stack.pop() // pops off the open parenthesis 
                
                while(typeof(stack[stack.length - 1]) === 'number' && stack.length > 0){
                    num = stack.pop();
                }
                
                while(num !== 0){
                    for(let j = decodedString.length; j >= 0 ; j--){
                        stack.push(decodedString[j])
                    }
                    num --;
                }
                
            } else {
                stack.push(s[i])
            }
        }
        let result = ''
        
        for(let i = stack.length - 1; i >= 0; i--){
            result += stack[i]
            stack.pop();
        }
        return result;
    };
    