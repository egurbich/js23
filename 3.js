// Шаблонний метод (Template Method) — це патерн програмування, який визначає загальну структуру алгоритму, залишаючи певні кроки реалізації підкласам.
// Клас-шаблон визначає основну логіку алгоритму, а підкласи можуть змінювати або розширювати окремі кроки.

// Клас TeaMaker відповідає за загальні дії, необхідні для приготування чаю.
class TeaMaker {
  // Метод makeTea, який викликає всі кроки приготування чаю по черзі
  makeTea() {
    this.boilWater();
    this.addTeaLeaves();
    this.steepTea();
    this.pourIntoCup();
    this.addCondiments();
    this.serveTea();
  }

  // Метод boilWater, який відповідає за кип'ятіння води
  boilWater() {
    console.log("Кип'ятимо воду...");
  }

  // Метод addTeaLeaves, який відповідає за додавання чайних листків
  addTeaLeaves() {
    console.log("Додаємо чайні листки...");
  }

  // Метод steepTea, що відповідає за заварювання чаю
  steepTea() {
    console.log("Заварюємо чай...");
  }

  // Метод pourIntoCup, що відповідає за переливання чаю в чашку
  pourIntoCup() {
    console.log("Переливаємо чай в чашку...");
  }

  // Метод addCondiments, який залишається пустим і може бути перевизначений у підкласах
  addCondiments() {}

  // Метод serveTea, що відповідає за подачу чаю
  serveTea() {
    console.log("Чай подається!");
  }
}

// Клас GreenTeaMaker являється підкласом класу TeaMaker та додає інгредієнти для зеленого чаю
class GreenTeaMaker extends TeaMaker {
  // Метод addCondiments, який виводить в консоль Додаємо мед, щоб приготувати зелений чай
  addCondiments() {
    console.log("Додаємо мед, щоб приготувати зелений чай...");
  }
}

// Клас BlackTeaMaker являється підкласом класу TeaMaker та додає інгредієнти для чорного чаю
class BlackTeaMaker extends TeaMaker {
  // Метод addCondiments, який виводить в консоль Додаємо мед, щоб приготувати чорний чай
  addCondiments() {
    console.log("Додаємо мед, щоб приготувати чорний чай...");
  }
}

console.log("Завдання 3 ====================================");
// Після виконання розкоментуйте код нижче

// Створюємо екземпляри класів GreenTeaMaker та BlackTeaMaker.
const greenTeaMaker = new GreenTeaMaker();
greenTeaMaker.makeTea();

const blackTeaMaker = new BlackTeaMaker();
blackTeaMaker.makeTea();
