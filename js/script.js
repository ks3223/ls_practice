// // //Local Storage
// // localStorage.setItem('key','data');
// // //Получить данные
// // let ls = localStorage.getItem('key');
// // console.log(ls);
// // //Однократное сохранение
// // let time = localStorage.getItem('time');
// // console.log(time);
// // if (time === null) {
// //     let whatTime = Date.now();// Получить количество милисекунд от 1 января 1970 года
// //     localStorage.setItem('time', whatTime);
// // }

// // //Удаление данных из localStorage
// // localStorage.removeItem('value');

// //                               Задача
// // localStorage.setItem('a', '1');
// // localStorage.setItem('b', '2');
// // localStorage.setItem('c', '3');
// // let a1 = localStorage.getItem('a'); 
// // let b1 = localStorage.getItem('b'); 
// // let c1 = localStorage.getItem('c'); 
// // console.log(a1,b1,c1);
// // num1 = Number(a1);
// // num2 = Number(b1);
// // num3 = Number(c1);
// // sum = num1+num2+num3;
// // console.log(sum);


// let clrBtn = document.querySelector("#clearBtn");
// clrBtn.addEventListener('click', ()=>{
//     localStorage.clear();
// })

// // Количество записей  из LS
// let length = localStorage.length;
// console.log(length);

// //         чтоэто
// // let num = '1234567';
// // num = num.toString().split("").map(element => +element);
// // console.log(num)
// // let arr = [1,2,3,4,5]
// // arr.forEach((el,ind,mas) => {
// //     el = el ^ 2
// //     mas[ind] = el;
// // });
// // consolele.log(arr);

// //          Получение ключа по номеру
// let key1 = localStorage.key(1);
// console.log(key1);
// console.log(localStorage.getItem(key1));

// //          Перебор хранилища по индексам
// for(let i = 0; i < length; i++) {
//     let key = localStorage.key(i);
//     let value = localStorage.getItem(key);
//     console.log(`${key}: ${value}`);
// }

// //              Получить ключи всех записей
// console.log(Object.keys(localStorage));
// //              Получить массив значений
// console.log(Object.value(localStorage));
// //              Хранение структур данных в LS



// let arr = [1,2,3,4,5];
// function toLocalStorage() {
//     let json = JSON.stringify(arr);
//     localStorage.setItem('arr', json);
// }
// toLocalStorage(arr);
// console.log(localStorage.getItem('arr'));
// arr = JSON.parse(localStorage.getItem('arr'));
// console.log(arr);
// arr.push(10,20);
// toLocalStorage(arr);

            //Задание №1
let items=document.querySelectorAll("#items");
let spis=document.querySelector("#spis");
spis.array.forEach(element => {
    console.log(element);
});
console.log(arr);
let json1 = JSON.stringify(arr);
console.log(json1);
            //Задание №2
let json2 = '["user1","user2","user3","user4","user5"]';
let mas2 = JSON.parse(json2);
mas2.push("user6");
            //Задание №3
let json3 = `[
{
    "name": "user1",
    "age": 25,
    "salary": 1000
},
{
    "name": "user2",
    "age": 26,
    "salary": 2000
},
{
    "name": "user3",
    "age": 27,
    "salary": 3000
}
]`;
let obj3 = JSON.parse(json3);
let rabotnik = {
    name: "user4",  
    age: 3224,
    salary: 20
}
obj3.push(rabotnik);
console.log(obj3);
            //Задание №4
let json4 = '["user1","user2","user3","user4","user5"]';
let mas4 = JSON.parse(json4);
let list = document.querySelector("#list");
for (elem of mas4) {
    let li = document.createElement('li');
    li.textContent = elem;
    list.appendChild(li);
} 

console.log(list);
            //Задание №5
            //Задание №6
let in1 = document.querySelector("#in1");
let in2 = document.querySelector("#in2");
let btn = document.querySelector("#btn");
btn.addEventListener('click',()=>{
    let text1 = in1.value;
    let text2 = in2.value
    localStorage.setItem(text1, text2);
})

            //Задание №7
            //Задание №8
let lenBtn = document.querySelector("#len");
lenBtn.addEventListener('click',()=>{            
let len = localStorage.length;
    console.log(len);
})
            //Задание №9
let clrBtn = document.querySelector("#length");
clrBtn.addEventListener('click',()=>{
    let len = localStorage.length;
console.log(len);
if(len > 10){
    localStorage.clear();
    }
})