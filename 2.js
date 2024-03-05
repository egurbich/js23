// Муха (Flyweight) — це патерн програмування, основна ідея якого полягає в тому, щоб спільно використовувати об'єкт-одиночка
// замість створення окремих унікальних об'єктів для кожного випадку використання

// Шаблон "Одиночка": клас Group
class Group {
  // Приватне статичне поле #groups для зберігання усіх створених груп
  static #groups = {};

  constructor(name) {
    this.name = name; // Назва групи
  }

  // Статичний метод create для створення групи
  static create(name) {
    // Перевіряємо, чи група з такою назвою вже існує
    if (!Group.#groups[name]) {
      // Якщо не існує, створюємо нову групу та зберігаємо її в #groups
      Group.#groups[name] = new Group(name);
    }
    // Повертаємо екземпляр групи з вказаною назвою
    return Group.#groups[name];
  }
}

// Клас Product для створення продуктів
class Product {
  constructor(name, group) {
    this.name = name; // Назва продукту
    this.group = group; // Група продукту
  }

  // Метод виведення інформації про продукт
  display() {
    console.log(`Продукт: ${this.name}, Група: ${this.group.name}`);
  }
}

console.log("Завдання 2 ====================================");
// Після виконання розкоментуйте код нижче

// Створення груп за допомогою методу Group.create. Цей метод гарантує, що кожна група з унікальною назвою буде створена лише один раз.
const electronics = Group.create("Електроніка");
const books = Group.create("Книги");
const electronics2 = Group.create("Електроніка");

// Виведення груп в консоль. Ми бачимо, що electronics та electronics2 - це один і той же об'єкт.
console.log(electronics, books, electronics2);
console.log(electronics === electronics2); // true

// Створення продуктів. Кожен продукт належить до певної групи.
const product1 = new Product("Ноутбук", electronics);
const product2 = new Product("Навушники", electronics);
const product3 = new Product("Воно", books);
const product4 = new Product("Смартфон", Group.create("Електроніка")); // тут створюється нова група або використовується вже створена

// Виведення продуктів в консоль.
product1.display();
product2.display();
product3.display();
product4.display();

// Перевірка, чи належать два продукти до однієї групи.
console.log(product1.group === product4.group); // true

// Фільтрація продуктів за групою. В даному випадку виводяться тільки продукти групи "Електроніка".
const list = [product1, product2, product3, product4].filter(
  (product) => product.group === Group.create("Електроніка")
);

console.log(list); // виводиться список продуктів, що належать до групи "Електроніка"
