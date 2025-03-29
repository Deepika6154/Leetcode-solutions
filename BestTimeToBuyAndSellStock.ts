function maxProfit(prices: number[]): number {
    let minPrice = Infinity; // Track lowest price seen so far
    let maxProfit = 0; // Track maximum profit
    
    for (let price of prices) {
        minPrice = Math.min(minPrice, price); // Update minimum price
        maxProfit = Math.max(maxProfit, price - minPrice); // Calculate profit
    }
    
    return maxProfit;
};