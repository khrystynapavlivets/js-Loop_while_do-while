// Завдання 1

// Пароль і 4 спроби. Завдання виконуємо через while або do while.
// 1. Запросити у користувача пароль!
// 2. Якщо пароль не вірний повідомити що залишилось 4 спроби!
// - якщо далі невірні паролі спроби зменшуються.
// - коли спроб вже нема вивести повідомлення: "Будь ласка спробуйте пізніше!".
// 3. Якщо користувач одразу чи після кількох спроб ввів вірний пароль, вивести повідомлення "Запрошуємо на сайт!".
// 4. Завдання реалізуємо без break і міток!

// let count = 1;
// let ask = prompt("Enter your password");
// while (ask != "Qwerty" && count <= 5) {
//   if (count <= 4) {
//     ask = prompt(
//       `Entered an incorrect password. You have ${5 - count} attempts left`
//     );
//     count++;
//   } else if ((count = 5)) {
//     alert(`Try again later , please!`);
//     count++;
//   }
// }
// if (ask == `Qwerty`) {
//   alert(`Invite you to the site`);
// }

// Завдання 2

// Переробити попередню домашню роботу за допомогою циклу while або do...while, а саме:

// 1. Створіть програму, яка обчислює факторіал натурального числа n, яке користувач введе з клавіатури.

// let n = +prompt("write first number");
// let result = 1;
// let i = 1;
// do {
//   result = result * i;
//   i++;
// } while (i <= n);
// document.write(result);

// 2. Створіть програму, що виводить на екран всі чотиризначні числа послідовності 1000 1003 1006 1009 1012 1015 … 9999
// let result= ''

// let result= ''
// let i = 1000;
// while(i <= 9999){
//     result += i +  ' ' ;
//     i++
// }

// document.write(result);

// 3. Створіть програму, що виводить на екран перші 55 елементів послідовності 1 3 5 7 9 11 13 15 17 …

// let result= ''
// let i = 1
// do{
//     result += i +  ' ' ;
//     i += 2
// }
// while(i <= 55)
// document.write(result);

// 4. Створіть програму, що виводить на екран всі невід'ємні елементи послідовності 90 85 80 75 70 65 60 …

// let result= '';
// let i = 90;
// while(i >= 0){
//     result += i +  ' ' ;
//     i -= 5;
// }
// document.write(result);

// 5. Створіть програму, що виводить на екран перші 20 елементів послідовності 2 4 8 16 32 64 128 …

// let result= '';
// let i = 2, b1=2, n = 20, q=2 ;
// do{
//     result += i +  ' ' ;
//     i *= 2;

// }
// while( i <= b1*q**(n-1) );
// document.write(result);

// 6. Виведіть на екран всі числа в послідовності 2a-1(крок зміни лічильника), де початкове значення a = 2 та які менше 10000.

// let result= '';
// let a = 2;
// while(a<=10000){
//     result += a +  ' ' ;
//     a = 2*a-1
// }
// document.write(result);

// 7. Виведіть на екран всі двозначні члени послідовності 2a+200(крок зміни лічильника), де початкове значення змінної a = -166.

// let result= '';
// let a = -166;
// while(a<100){
//     if( a>=-100){
//         result += a +  ' ' ;
//     }
//     a = 2*a+200;
// }
// document.write(result);

// 8. Написати програму що обчислює піднесення до степеня. В 1й промпт вводиться число,а в 2й промпт степінь. Умови: Степінь може бути додатня, від'ємна або 0.
//  Обрахувати всі можливі варіанти. Задачу бажано виконати використовуючи 1 цикл!
// a^b = a*a b раз;    a^-b= 1/a^b;   a^0 = 1;

let a = +prompt("Введіть число");
let b = +prompt("Введіть степінь");
let s = 1,
  l = b,
  i = 1;

if (b < 0) {
  l = -b;
}
while (i <= l) {
  s *= a;
  i++;
}
if (b < 0) {
  s = 1 / s;
}
document.write(s);
