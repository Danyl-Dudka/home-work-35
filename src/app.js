/*
Spread/Rest Operator
1. Напиши функцію uniqueMerge, 
яка приймає два масиви і повертає новий масив, 
що містить тільки унікальні значення з обох масивів (без повторень).
*/
function mergeArrays(arr1, arr2) {
    let i = [...arr1, ...arr2];
    return i;
  }
  console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
  
  function uniqueMerge(arr3, arr4) {
    let i = [...arr3, ...arr4];
    const mySet = new Set(i);
    const array = Array.from(mySet);
    return array;
  }
  console.log(uniqueMerge([1, 2, 3, 4], [3, 4, 5, 6]));
  
  /* #2
  Деструктуризація масиву
  Є масив із координатами: [45.123, 39.987, 120], 
  де перші два значення — це широта і довгота, 
  а третє — висота.
  Використовуючи деструктуризацію, 
  витягни з нього широту і довготу в окремі змінні, 
  а висоту за замовчуванням простав 100, якщо її немає.
  */
  
  let [latitude, longitude, altitude = 100] = [45.123, 39.987, 120];
  console.log(latitude);
  
  /*
  #3 Деструктуризація об’єкта
  Є об'єкт із даними користувача:
  Використовуючи деструктуризацію, створи змінні userName, userAge, userCity, userStreet.
  Якщо address відсутня, userCity має бути "Невідоме місто", а userStreet — "Невідома вулиця".
  */
  
  const user = {
    name: "Іван",
    age: 25,
    address: { city: "Львів", street: "Шевченка 10" },
  };
  
  let {
    name,
    age,
    address: { city, street },
  } = user;
  console.log(city);
  
  /*
  #4 String.prototype.matchAll
  Напиши функцію findWords, 
  яка приймає рядок і шукає всі слова, 
  що починаються на "JS", 
  повертаючи їх у вигляді масиву.
  */
  
  function findWords(string) {
    const regExp = /JS/g;
    let matches = string.matchAll(regExp);
    let result = [];
    for (const match of matches) {
      result.push(match[0]);
    }
    return result;
  }
  console.log(findWords("JS is cool, JSrocks, JSfan, JAVA"));
  
  /*
  #5 Nullish Coalescing (??)
  Є змінні:
  Створи нову змінну result, 
  яка отримає перше значення з a, b, c, d, e, 
  яке не є null або undefined.
  */
  
  const a = null;
  const b = undefined;
  const c = "Hi";
  const d = 0;
  const e = "Hello";
  
  let result = [a ?? b ?? c ?? d ?? e];
  console.log(result);
  
  /*
  #6 Optional Chaining
  Завдання:
  Дано об'єкт користувача:
  Напиши функцію getUserEmailNotifications, 
  яка повертає значення email з user.preferences.notifications, 
  якщо такий ключ існує, 
  або "Немає даних" в іншому випадку.
  */
  
  const user1 = {
    name: "Олег",
    preferences: {
      theme: "dark",
      notifications: { email: true },
    },
  };
  
  function getUserEmailNotifications() {
    let userEmail = user1.preferences?.notifications;
    if (userEmail === undefined) {
      console.log("Немає даних");
    } else {
      console.log(userEmail);
    }
  }
  getUserEmailNotifications();
  
  /*
  #7 Оператори логічного присвоєння
  Завдання:
  Є об'єкт settings:
  Використовуючи ||=, встанови значення theme в "light", якщо воно порожнє.
  Використовуючи &&=, встанови "default" для language, якщо воно "uk".
  Використовуючи ??=, встанови fontSize в 16, якщо воно відсутнє.
  */
  
  const settings = { theme: "", language: "uk" };
  settings.theme ||= "light";
  settings.language &&=
    settings.language !== "uk" ? settings.language : "Default";
  settings.fontSize ??= 16;
  console.log(settings);
  /*
  #8 Звертання до елементів масиву з кінця
  Є масив чисел:
  Виведи останній елемент масиву без використання length.
  Виведи передостанній елемент масиву коротким способом.
  Виведи третій елемент з кінця, використовуючи сучасний синтаксис.
  */
  
  const numbers = [10, 20, 30, 40, 50];
  console.log(numbers.at(-1));
  console.log(numbers.at(-2));
  console.log(numbers.at(-3));
  
  /*
  #9 Symbol
  Завдання:
  
  Створи Symbol з описом "user_id" і використай його як ключ для збереження унікального id користувача в об'єкті.
  Перевір, чи видно Symbol-ключ під час ітерації через for...in.
  */
  
  const user3 = {
    [Symbol.for("name")]: "user_id",
    name: "Анна",
    age: 23,
    city: "Київ",
  };
  console.log(user3[Symbol.for("name")]);
  console.log(user3.name);
  
  /*
  #10 Ітератори
  Умова: Напиши ітератор для об'єкта, 
  який дозволить перебирати його властивості (ключі та значення) 
  за допомогою циклу for...of.
  
  Створи об'єкт, що містить кілька властивостей.
  Напиши метод для цього об'єкта, який повертатиме ітератор, 
  що перебирає властивості об'єкта.
  Використай цикл for...of, щоб вивести кожну пару "ключ: значення".
  */
  
  const user5 = {
    name: "Іван",
    age: 25,
    city: "Київ",
  
    [Symbol.iterator]: function () {
      let entries = Object.entries(this);
      let index = 0;
      return {
        next: function () {
          if (index < entries.length) {
            return { value: entries[index++], done: false };
          } else {
            return { done: true };
          }
        },
      };
    },
  };
  
  for (const [key, value] of user5) {
    console.log(`${key}: ${value}`);
  }
  
  /*
  #11 Генератори
  Створи генератор, який генерує числа від 1 до 5.
  */
  
  function* generateNumbers() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
  }
  
  const numberGenerator = generateNumbers();
  
  for (const num of numberGenerator) {
    console.log(num);
  }
  