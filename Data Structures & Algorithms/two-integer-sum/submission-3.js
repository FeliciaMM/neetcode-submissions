class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let seen = {};
        for( let i = 0; i<nums.length; i++){
            let currentNumber = nums[i];
            let neededNumber = target-currentNumber
            if(seen[neededNumber]!=undefined){
                return[seen[neededNumber],i];
            }
            seen[currentNumber] = i;
        }
        return [];
    }
}
