/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  if(transactions.length > 0){
    const categoryItem = [];
    const prices = [];
    for(let i = 0; i < transactions.length; i++){
      if(!categoryItem.includes(transactions[i].category)){
        const newCategary = transactions[i].category;
        categoryItem.push(newCategary);
        let price = 0;
        for(let j = 0; j < transactions.length; j++){
          if(transactions[j].category == newCategary){
            price += transactions[j].price;
          }
        }
        prices.push(price);
      }
    }
    const ans = [];
    for(let i = 0; i < categoryItem.length; i++){
      ans.push({category: categoryItem[i], totalSpent: prices[i]});
    }
    return ans;
  }
  return [];
}

module.exports = calculateTotalSpentByCategory;
