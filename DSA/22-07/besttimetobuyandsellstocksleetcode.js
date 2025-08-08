/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // Handle edge case: if array is empty or has only one day, no profit possible.
    if (prices.length <= 1) {
        return 0;
    }

    // Initialize minPrice to a very large number (or the first price)
    // We want to find the lowest price to buy at.
    let minPrice = Infinity; // Or prices[0] if you prefer to start loop from index 1

    // Initialize maxProfit to 0. We can always choose not to make a transaction.
    let maxProfit = 0;

    // Iterate through each price in the array
    for (let i = 0; i < prices.length; i++) {
        const currentPrice = prices[i];

        // Step 1: Update minPrice.
        // If the current price is lower than the lowest price found so far,
        // it becomes our new potential buying point.
        if (currentPrice < minPrice) {
            minPrice = currentPrice;
        } else {
            // Step 2: Calculate potential profit if we sell today.
            // If the current price is NOT lower than minPrice, it means we could potentially
            // sell for a profit if we bought at minPrice.
            const currentProfit = currentPrice - minPrice;

            // Step 3: Update maxProfit.
            // If this current profit is greater than our recorded maxProfit, update it.
            if (currentProfit > maxProfit) {
                maxProfit = currentProfit;
            }
            // A more concise way to write Step 2 & 3:
            // maxProfit = Math.max(maxProfit, currentPrice - minPrice);
        }
    }

    return maxProfit;
};

// Test Cases
console.log(`[7, 1, 5, 3, 6, 4] -> Max Profit: ${maxProfit([7, 1, 5, 3, 6, 4])}`); // Expected: 5
console.log(`[7, 6, 4, 3, 1] -> Max Profit: ${maxProfit([7, 6, 4, 3, 1])}`);       // Expected: 0
console.log(`[2, 4, 1] -> Max Profit: ${maxProfit([2, 4, 1])}`);                 // Expected: 2 (Buy at 2, sell at 4)
console.log(`[1] -> Max Profit: ${maxProfit([1])}`);                           // Expected: 0
console.log(`[] -> Max Profit: ${maxProfit([])}`);                             // Expected: 0
console.log(`[2, 1, 2, 1, 0, 1, 2] -> Max Profit: ${maxProfit([2, 1, 2, 1, 0, 1, 2])}`); // Expected: 2 (Buy at 0, sell at 2)