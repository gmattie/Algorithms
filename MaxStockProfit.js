/*
 * Algorithm
 * 
 */

const maxStockProfit = (values) => {

    let buyPrice = 0;
    let sellPrice = 0;
    let maxProfit = -1;

    values.reduce((previousValue, currentValue) => {

        if (previousValue < currentValue) {

            if (currentValue - previousValue > maxProfit) {

                buyPrice = previousValue;
                sellPrice = currentValue;
                maxProfit = sellPrice - buyPrice;
            }

            return previousValue;
        }

        return currentValue;
    });

    return {

        buy: buyPrice,
        sell: sellPrice,
        profit: maxProfit
    };
};

/*
 * Use Case
 * 
 */

const values = [7, 4, 100, 44, 3, 58, 48, 702, 1, 9];
const stocks = maxStockProfit(values);

console.log(`The maximum stock profit from [${values}] is ${stocks.profit} if you buy at ${stocks.buy} and sell at ${stocks.sell}`);
