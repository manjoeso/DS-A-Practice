var threeSum = function(nums) {
    let answerArr = [];
    for(let i = 0; i < nums.length; i++){
        let x = nums[i];
        let hash = {};
        for(let j = i + 1; j < nums.length; j++){
            if(i < j){
                let target = 0 - x; // target = 1;
                let y = nums[j];
                if(!hash[y]) hash[y] = true; // doesn't catch duplicates, need counter?
                if(hash[target - y] && y !== hash[target-y]) {
                    answerArr.push([x,  y, target - y])
                }
            }
            
        }
    }
    return answerArr;
};






