 
//  INSTRUCTIONS

// 	We want to manage customer food orders in a restaurant:

//   - An Order has:
// 			- the customer name (string)
// 			- the date of the order (string)
// 			- the list of food orders (array of FoodOrder)


//   - An FoodOrder has:
// 			- the food name (string)
// 			- the price (number)

// 	Q1 : Create the 2 types.

// 	Q2 : Create the following orders :
// 				- customer = "HIM THE CRAZY"
// 				- date = "SEP 9"
// 				- food orders:
// 						- food : "french fries", price : 12
// 						- food  : "cambodian fries", price : 1
// 						- food : "ice scream", price : 4


// 				- customer = "RONAN THE CRAZY"
// 				- date = "SEP 10"
// 				- food orders:
// 						- food : "coca", price : 12
// 						- food  : "caco", price : 1
// 						- food  : "snake", price : 14
// 						- food  : "chiken", price : 11
						
						
// 	Q3 : Create a function that take as parameter a Order, and return the total price of the order
// 						getTotalPrice(order : Order) : number
						
						
// 	Q4 : Create a function that take as parameter a list of Order, and return which order is the most expensive
  
//            getMostExpensive(orders : Order[]) : Order
	

 type Order = {
	customer:string;
	 date:string; 
	 foodorders:foodorder[]
	};
 type foodorder ={
	food:string;
	 price:number
	};

 let orders:Order[] = [
	{
	customer:"HIM THE CRAZY",
	date:"SEP 9",
	foodorders: [
		{
			food : "french fries", price : 12
		},
		{
			food  : "cambodian fries", price : 1
		},
		{
			food : "ice scream", price : 4
		}
	]		
	},
	{
	customer:"RONAN THE CRAZY",
	date:"SEP 10",
	foodorders: [
		{
			food : "coca", price : 12
		},
		{
			food  : "caco", price : 1
		},
		{
			food  : "snake", price : 14
		},
		{
			food  : "chiken", price : 11
		}
	]
				
	}
];

function getTotalPrice(orders: Order[]): number {
	let total: number = 0;
	for (let order of orders) {
	  for (let foodOrder of order.foodorders) {
		total += foodOrder.price;
	  }
	}
	return total;
  }
  console.log(getTotalPrice(orders));

function getMostExpensive(orders: Order[]): Order {
  let mostExpensiveOrder: Order | undefined;
  let highestPrice = 0;

  for (const order of orders) {
    let orderTotal = 0;

    for (const foodOrder of order.foodorders) {
      orderTotal += foodOrder.price;
    }

    if (orderTotal > highestPrice) {
      highestPrice = orderTotal;
      mostExpensiveOrder = order;
    }
  }

  if (mostExpensiveOrder) {
    return mostExpensiveOrder;
  } else {
    throw new Error('No orders found');
  }
}

const mostExpensiveOrder = getMostExpensive(orders);
console.log('Most Expensive Order:', mostExpensiveOrder);