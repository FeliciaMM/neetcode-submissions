class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let r = 1
       let Maxprofit = 0;
       while(r<prices.length){
        if(prices[l]<prices[r]){
            let profit = prices[r]-prices[l];
            Maxprofit = Math.max(Maxprofit,profit);
        }else{
            l=r
        }
        r++;
       }
       return Maxprofit;
    }
}
