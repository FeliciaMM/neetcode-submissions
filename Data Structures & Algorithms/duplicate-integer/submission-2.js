class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
       let seen ={}

        for(let i = 0 ; i<nums.length; i++){
            let currentNumber = nums[i];
            if(seen[currentNumber]!=undefined){
                return true;
            }else{
                seen[currentNumber] = i;
            }
        }
        return false;

     
    }    
}
