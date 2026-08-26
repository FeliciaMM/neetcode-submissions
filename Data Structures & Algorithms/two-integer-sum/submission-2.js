class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let seen = {};
        for(let i = 0; i<nums.length;i++){
            seen[nums[i]] = i;
        }

        for(let i = 0; i< nums.length; i++){
            let complement = target - nums[i];
            if(seen[complement]!== undefined && seen[complement] !== i){
                return [i,seen[complement]];
            }  
        }
        return false;
    }
}
