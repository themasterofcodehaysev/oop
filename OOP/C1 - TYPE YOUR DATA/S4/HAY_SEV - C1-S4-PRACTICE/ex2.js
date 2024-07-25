//  INSTRUCTIONS
var orders = [
    {
        customer: "HIM THE CRAZY",
        date: "SEP 9",
        foodorders: [
            {
                food: "french fries", price: 12
            },
            {
                food: "cambodian fries", price: 1
            },
            {
                food: "ice scream", price: 4
            }
        ]
    },
    {
        customer: "RONAN THE CRAZY",
        date: "SEP 10",
        foodorders: [
            {
                food: "coca", price: 12
            },
            {
                food: "caco", price: 1
            },
            {
                food: "snake", price: 14
            },
            {
                food: "chiken", price: 11
            }
        ]
    }
];
function getTotalPrice(order) {
    var total = 0;
    for (var _i = 0, orders_1 = orders; _i < orders_1.length; _i++) {
        var orderfood = orders_1[_i];
        for (var _a = 0, _b = orderfood.foodorders; _a < _b.length; _a++) {
            var foodOrder = _b[_a];
            total += foodOrder.price;
        }
    }
    return total;
}
console.log(getTotalPrice(orders));
function getMostExpensive(orders) {
    var mostExpensiveOrder;
    var highestPrice = 0;
    for (var _i = 0, orders_2 = orders; _i < orders_2.length; _i++) {
        var order = orders_2[_i];
        var orderTotal = 0;
        for (var _a = 0, _b = order.foodorders; _a < _b.length; _a++) {
            var foodOrder = _b[_a];
            orderTotal += foodOrder.price;
        }
        if (orderTotal > highestPrice) {
            highestPrice = orderTotal;
            mostExpensiveOrder = order;
        }
    }
    if (mostExpensiveOrder) {
        return mostExpensiveOrder;
    }
    else {
        throw new Error('No orders found');
    }
}
var mostExpensiveOrder = getMostExpensive(orders);
console.log('Most Expensive Order:', mostExpensiveOrder);
