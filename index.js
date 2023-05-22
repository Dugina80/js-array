/*Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.+*/


let shoppingList = [
    { name: "milk", quantity: 1, purchase: true, price: 50, sum: 0 },
    { name: "cheese", quantity: 1, purchase: true, price: 100, sum: 0 },
    { name: "apple", quantity: 3, purchase: true, price: 30, sum: 0 },
    { name: "bread", quantity: 1, purchase: true, price: 25, sum: 0 },
    { name: "coffee", quantity: 1, purchase: false, price: 200, sum: 0 },
];

/*const purchasedItems = shoppingList.filter(item => item.purchase);
const notPurchasedItems = shoppingList.filter(item => !item.purchase);

console.log('Непридбані товари:');
notPurchasedItems.forEach(item => console.log(item.name));

console.log('Придбані товари:');
purchasedItems.forEach(item => console.log(item.name));*/

/*function markAsPurchased(productName) {
    const item = shoppingList.find((item) => item.name === productName);
    if (item) {
      item.purchase = true;
    }
  }
  
  markAsPurchased("milk");
  console.log(shoppingList);*/


//Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім) +

/*function removeProduct(productName) {
    shoppingList = shoppingList.filter((item) => item.name !== productName);
  }
  
  removeProduct("milk");
  console.log(shoppingList);*/


//Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.+
/*
function calculateTotal() {
    let total = 0;
  
    shoppingList.forEach((item) => {
      if (item.purchase) {
        const itemTotal = item.quantity * item.price;
        total += itemTotal;
      }
    });
  
    return total;
  }
  
  const totalSum = calculateTotal();
  console.log("Total sum:", totalSum);*/

 