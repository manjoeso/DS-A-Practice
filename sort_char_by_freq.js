var frequencySort = function(s) {
    let count = {};
    for(let i = 0; i < s.length; i++){
        (s[i] in count) ? count[s[i]] += 1 : count[s[i]] = 1
    }
    // {"t":1,"r":1,"e":2}
    let chars = Object.keys(count).sort((a,b) => count[b] - count[a]);
    
    let returnStr = '';
    // return chars;
    
    for(let i = 0; i < chars.length; i++){
        for(let j = 0; j < count[chars[i]]; j++){
            returnStr += chars[i];
        }
    }
    return returnStr;
};