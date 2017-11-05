let orderCount = 0;

const takeOrder = (crustType, topping) => {
  orderCount ++;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);  
};

/* const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
}; */
// Refactored
const getSubTotal = itemCount => itemCount * 7.5;

/* const getTax = (orderCount) => {
    return getSubTotal(orderCount) * .06;
}; */
// Refactored
const getTax = orderCount => getSubTotal(orderCount) * 0.06;

/* const getTotal = (orderCount) => {
    return getTax(orderCount) + getSubTotal(orderCount);
}; */
// Refactored
const getTotal = orderCount => getTax(orderCount) + getSubTotal(orderCount);

takeOrder('thin crust', 'bacon');  //orderCount 1
console.log(getTotal(orderCount));
takeOrder('original crust', 'pepperoni'); //orderCount 2
console.log(getTotal(orderCount));
takeOrder('thin crust', 'bacon and mushrooms'); //orderCount 3
console.log(getTotal(orderCount));