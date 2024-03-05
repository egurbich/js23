// Стратегія (Strategy) — це патерн програмування, який дозволяє визначати різні алгоритми та забезпечує можливість обміну їх під час виконання програми.

// Клас Basket представляє кошик для покупок з певною стратегією знижки
class Basket {
  constructor(discountPlan) {
    this.discountPlan = discountPlan; // Зберігаємо стратегію знижки
    this.goods = []; // Масив для зберігання товарів в кошику
  }

  // Метод для додавання товарів до кошика
  addGood(good) {
    this.goods.push(good);
  }

  // Метод для розрахунку загальної вартості товарів з урахуванням знижки
  calculateTotalPrice() {
    const totalPrice = this.goods.reduce((acc, curr) => acc + curr.price, 0);
    return this.discountPlan.applyDiscount(totalPrice);
  }
}

// Клас RegularDiscountPlan: стратегія знижки для постійних клієнтів
class RegularDiscountPlan {
  // Метод застосування знижки для постійних клієнтів (10%)
  applyDiscount(price) {
    return price * 0.9;
  }
}

// Клас VIPDiscountPlan: стратегія знижки для VIP клієнтів
class VIPDiscountPlan {
  // Метод застосування знижки для VIP клієнтів (20%)
  applyDiscount(price) {
    return price * 0.8;
  }
}

// Клас NewClientDiscountPlan: стратегія знижки для нових клієнтів
class NewClientDiscountPlan {
  // Метод застосування знижки для нових клієнтів (5%)
  applyDiscount(price) {
    return price * 0.95;
  }
}

console.log("Завдання 6 ====================================");
// Після виконання розкоментуйте код нижче

// Створення нового екземпляру кошика зі стратегією знижки для нових клієнтів
const basket1 = new Basket(new NewClientDiscountPlan());

// Додавання товарів до кошика
basket1.addGood({ name: "Product 1", price: 100 });
basket1.addGood({ name: "Product 2", price: 50 });

// Розрахунок і виведення загальної вартості товарів з урахуванням знижки
console.log(basket1.calculateTotalPrice());
