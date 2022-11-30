// глобальные переменные, доступные в любом месте
const name = "Victa";
let age = 28;
let boo = true;

// const header = document.querySelector("input[type=text]");
// в ковычках пишется название элемента селектора из html
// #header это id = "header"
// const header = document.querySelector(".header");
// const header = document.querySelector("#header");
// так же можно выбрать селектор с помощью такой команды, как
// getElementById, но уже без #. Это более популярная команда
// const header = document.getElementById("header");

const header = document.querySelector("#header");

// const navLinks = document.querySelector(".nav__link");
// querySelector - сохраняет текущий селектор
// querySelectorAl - сохраняет все селекторы с одинаковыми
// переменными
const navLinks = document.querySelectorAll(".nav__link");
const testBtn = document.querySelector("#testBtn");

console.log(navLinks);

// function sayHello() {
//   console.log("Hello JavaScript");
// } то же самое, только вывод текста идет через sayHello();

function sayHello() {
  let massage = "Hello" + name;
  console.log(massage); //тут вывод текста идёт внутри ф-ции
}

sayHello();

function simpleMath(a, b) {
  let result = a + b;
  return result; //позволяет вывести р-тат за пределы ф-ции
  // console.log(result); не позволяет выводить результат
  // за пределы ф-ции
}

let sum = simpleMath(11, 22);

console.log(sum);

// window.addEventListener("scroll", function () {
//     console.log("scrolled");
// });

//КОД НИЖЕ - ТО ЖЕ САМОЕ ЧТО В КОРОТКОЙ АКТИВНОЙ ВЕРСИИ.
window.addEventListener("scroll", checkScroll);
// window.addEventListener("scroll", function () {
//   let scrollPoss = window.scrollY;
//   //запись ниже позволяет при скролле менять цвет хэдэра на
//   // красный.Когда на сайте позиция нулевая - цвет хэдэра
//   // возвращается в обычное состояние
//   if (scrollPoss > 0) {
//     header.classList.add("red");
//   } else {
//     header.classList.remove("red");
//   }
//   console.log(scrollPoss);

//   header.classList.add("red");
//при скролле - у хэдэра появляется доп класс - red
//чтобы хэдэр (напр) менял свой цвет, в css надо
//прописать доп класс хэдэр.рэд с бг-колор - рэд
//и всё заработает
// });

document.addEventListener("DOMContentLoaded", checkScroll);
// document.addEventListener("DOMContentLoaded", function () {
//     let scrollPoss = window.scrollY;
//      if (scrollPoss > 0) {
//     header.classList.add("red");
//   } else {
//     header.classList.remove("red");
//   }
//     //бывает что после обновления (не в 0 позиции)
//     // событие (красная шапка) не происходит, чтобы такого
//     // не было - пишут отдельно ф-цию DOMContentLoaded
// });

// document.addEventListener("DOMContentLoaded", function () {
//   checkScroll();
// });                      КОНЕЦ

function checkScroll() {
  let scrollPoss = window.scrollY;
  if (scrollPoss > 0) {
    header.classList.add("red");
  } else {
    header.classList.remove("red");
  }
}

testBtn.addEventListener("click", function () {
  console.log("clicked");
  //считает сколько кликов было на кнопку
});

// navLinks.addEventListener("click", function () {
//   console.log("link clicked");
//   //считает сколько кликов было на ссылки, только эта
// система не работает. Решение проблемы - ниже
// });

//for или forEack - проходится по всем ссылкам, которые
// хранятся в navLinks и сохраняет каждую ссылку в
// отдельную переменную на navItem и мы на navItem
// весим обработчик события на клик
for (let navItem of navLinks) {
  navItem.addEventListener("click", function () {
    // console.log("link clicked"); //рез-тат в виде цифр
    console.log(navItem.text); //рез-тат в виде текста
  });
}
