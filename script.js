// Задача 1.  Создайте объект user с полями name, age, и email. Заполните его значениями. 
// Затем, используя объект, выведите информацию о пользователе в формате:
// "Имя: [name]"
// "Возраст: [age]"
// "Email: [email]"
let user = {
  name: "John Doe",
  age: 25,
  email: "john.doe@example.com",
 };
// Выведите информацию о пользователе здесь
 console.log(`Имя: ` + user.name);
 console.log(`Возраст: ` + user.age);
 console.log(`Email: ` + user.email);

// Задача 2. Обновление свойств объекта. Измените значение свойства age у  объекта user на 30 и добавьте новое свойство isAdmin со значением true. Выведите обновленный объект.
let user1 = {
  name: "John Doe",
  age: 25,
  email: "john.doe@example.com",
};
// Обновите объект здесь
user1.age = 30;
user1.isAdmin = true;
console.log(user1);
 
// Задача 3. Удаление свойства из объекта. Удалите свойство email из объекта user, а затем проверьте, что оно действительно удалено, выведя объект в консоль.
 let user2 = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
  isAdmin: true,
 };
// Удалите свойство здесь
delete user2.email;
console.log(user2);

// Задача 4. Преобразование объекта. Напишите функцию transformUser, которая принимает объект user и возвращает новый объект, содержащий только name и email, при этом name должно быть преобразовано в верхний регистр.
 function transformUser(user3) {
 return {
  name: "John Doe".toUpperCase(),
  email: "john.doe@example.com",
 }; // Возвращайте новый объект
 }
 let user3 = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
  isAdmin: true,
 };
let transformedUser = transformUser(user3);
console.log(transformedUser); 
// Ожидаемый результат: {name: "JOHN DOE", email: "john.doe@example.com"}
 
// Задача 5. Копирование объектов. Используя оператор "spread" (...), создайте копию объекта user и измените в копии значение name на "Jane Doe". Оригинальный объект не должен измениться.
let user4 = {
name: "John Doe",
age: 30,
email: "john.doe@example.com",
isAdmin: true,
};
// Создайте копию и измените свойство name здесь
let userCopy = {...user4};
userCopy.name = "Jane Doe";

console.log(user4); // Оригинальный объект
console.log(userCopy); // Измененная копия

// Задача 6. Преобразование объекта по условию. Напишите функцию filterProperties, которая принимает объект и массив строк (названия свойств). Функция должна возвращать новый объект, содержащий только те свойства, которые указаны в массиве.
function filterProperties(obj, keys) {
  // Реализуйте фильтрацию здесь
return {
  name: "John Doe",
  email: "john.doe@example.com",
}; // Возвращайте новый объект
}
let user5 = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
  isAdmin: true,
};
let filteredUser = filterProperties(user5, ["name", "email"]);
 console.log(filteredUser); 
 // Ожидаемый результат: { name: "John Doe", email: "john.doe@example.com" }

// Задача 7. Изменение структуры данных объекта. Напишите функцию convertUser, которая принимает объект user и возвращает новый объект, где свойства name и age заменены на одно свойство profile, содержащее эти данные.
function convertUser(user6) {
// Реализуйте преобразование здесь
let profile = {
  name: 'John Doe',
  age: 30,
};
return {
  profile,
  email: "john.doe@example.com",
  isAdmin: true,
}; // Возвращайте новый объект
}
let user6 = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
  isAdmin: true,
};
let convertedUser = convertUser(user6);
console.log(convertedUser);
 // Ожидаемый результат: { profile: { name: "John Doe", age: 30 }, email: "john.doe@example.com", isAdmin: true }


// Задача 8. Объединение объектов. Используя метод Object.assign, объедините два объекта user и details, чтобы получить один объединенный объект.
let user7 = {
  name: "John Doe",
  email: "john.doe@example.com",
};
let details = {
  age: 30,
  isAdmin: true,
};
// Объедините объекты здесь
let mergedUser = Object.assign({}, user7, details);
console.log(mergedUser);
// Ожидаемый результат: { name: "John Doe", email: "john.doe@example.com", age: 30, isAdmin: true }

// Задача 9. Динамическое создание свойств. Создайте объект product и добавьте в него свойства name, price и category, используя динамические ключи, которые задаются переменными.
let key1 = "name";
let key2 = "price";
let key3 = "category";
let product = {
  [key1]: "Laptop",
  [key2]: "1500",
  [key3]: "Electronics",
}; 
// Создайте объект и добавьте свойства динамически
console.log(product);
// Ожидаемый результат: { name: "Laptop", price: 1500, category: "Electronics" }