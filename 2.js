// Фабрика (Factory) — це патерн програмування, який надає загальний клас для створення об'єктів, який враховує
// передані аргументи та вирішує який клас повинен мати об’єкт при створенні
// Клас Book описує книгу в магазині
class Book {
  constructor(Book) {
    this.title = Book.title;
    this.author = Book.author;
    this.coverColor = Book.coverColor;
  }

  describe() {
    return `Книга: '${this.title}', автор: '${this.author}', колір обкладинки: '${this.coverColor}'`;
  }
  /**
   * Конструктор Book приймає об'єкт з параметрами
   * title - назва книги
   * author - автор книги
   * coverColor - колір обкладинки книги
   */
  /**
   * Метод describe генерує опис книги
   *  Повертає рядок у форматі: "Книга: '{назва}', автор: '{автор}', колір обкладинки: '{колір}'"
   */
}

/**
 * Клас AudioBook описує аудіокнигу в магазині
 */
class AudioBook {
  constructor(AudioBook) {
    this.title = AudioBook.title;
    this.author = AudioBook.author;
    this.audioLength = AudioBook.audioLength;
  }

  describe() {
    return `Аудіокнига: '${this.title}', автор: '${this.author}', тривалість: '${this.audioLength}'`;
  }
  /**
   * Конструктор AudioBook приймає об'єкт з параметрами
   * title - назва книги
   * author - автор книги
   * audioLength - тривалість аудіокниги
   */
  /**
     * Метод describe генерує опис аудіокниги
       Повертає рядок у форматі: "Аудіокнига: '{назва}', автор: '{автор}', тривалість: '{тривалість}'"
     */
}

/**
 * Клас ProductFactory використовується для створення об'єктів-продуктів.
 */

class ProductFactory {
  static TYPE = {
    BOOK: "book",
    AUDIOBOOK: "audiobook",
  };

  static createProduct(type, options) {
    switch (type) {
      case ProductFactory.TYPE.BOOK:
        return new Book(options);
      case ProductFactory.TYPE.AUDIOBOOK:
        return new AudioBook(options);
      default:
        throw new Error(`Такого типу продукту не існує: ${type}`);
    }
  }
  // TYPE - статична властивість, що визначає типи продуктів, які можуть бути створені.
  // {
  //   BOOK: "book",
  //   AUDIOBOOK: "audiobook",
  // }
  /**
   * Статичний метод createProduct використовується для створення об'єктів-продуктів, отримує
   * type - тип продукту, що має бути створений. Має бути одним зі значень властивості TYPE.
   * options - об'єкт з параметрами для конструктора продукту.
   *
   * В залежності від типу, повертає або екземпляр класу Book, або AudioBook.
   *
   *  Кидає помилку, якщо переданий тип не підтримується `Такого типу продукту не існує: ${type}`.
   */
}
console.log("Завдання 2 ====================================");
// Після виконання розкоментуйте код нижче

// Використовуємо ProductFactory для створення нової книги
const factoryBook = ProductFactory.createProduct(ProductFactory.TYPE.BOOK, {
  title: "Назва книги",
  author: "Автор книги",
  coverColor: "Синій",
});

// Виводимо в консоль опис нової книги
console.log(factoryBook.describe());

// Використовуємо ProductFactory для створення нової аудіокниги
const factoryAudiobook = ProductFactory.createProduct(
  ProductFactory.TYPE.AUDIOBOOK,
  {
    title: "Назва аудіокниги",
    author: "Автор аудіокниги ",
    audioLength: "5 годин",
  }
);

// Виводимо в консоль опис нової аудіокниги
console.log(factoryAudiobook.describe());

// Спробуємо створити продукт непідтримуваного типу
try {
  const factoryUnknown = ProductFactory.createProduct("comics", {});
} catch (error) {
  // Виводимо помилку в консоль
  console.error(error.message);
}
