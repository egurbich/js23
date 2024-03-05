// Адаптер (Adapter) — це патерн програмування, який дозволяє об'єктам з інтерфейсом несумісним з іншими об'єктами працювати разом,
// перетворюючи інтерфейс одного об'єкта на інтерфейс, очікуваний іншим об'єктом.

// Клас BankTransfer представляє собою систему для здійснення банківських переказів
class BankTransfer {
  // Метод initiateTransfer, який ініціює банківський переказ
  initiateTransfer(amount) {
    const calculatedAmount = this.calculateFee(amount);
    console.log(`Ініціюємо банківський переказ: $${calculatedAmount}`);
  }

  // Метод calculateFee, який розраховує комісію за переказ
  calculateFee(amount) {
    return amount * 1.02; // Комісія становить 2% від суми переказу
  }
}

// Клас WalletTransfer представляє систему для здійснення переказів з гаманця
class WalletTransfer {
  // Метод processTransfer, який здійснює переказ з гаманця
  processTransfer(amount) {
    console.log(`Здійснюємо переказ з гаманця: $${amount}`);
  }
}

// Клас TransferAdapter виступає адаптером для використання методів WalletTransfer як BankTransfer
class TransferAdapter {
  constructor(transferSystem) {
    this.transferSystem = transferSystem; // Зберігаємо посилання на об'єкт WalletTransfer
  }

  // Метод initiateTransfer адаптує методи WalletTransfer до BankTransfer
  initiateTransfer(amount) {
    const calculatedAmount = this.calculateFee(amount);
    return this.transferSystem.processTransfer(calculatedAmount);
  }

  // Метод calculateFee, який розраховує комісію за переказ
  calculateFee(amount) {
    return amount * 1.2; // Комісія становить 20% від суми переказу
  }
}
console.log("Завдання 5 ====================================");
// Після виконання розкоментуйте код нижче

// Створимо екземпляри BankTransfer
const purchase1 = new BankTransfer();
purchase1.initiateTransfer(1000);

const purchase2 = new BankTransfer();
purchase2.initiateTransfer(10);
