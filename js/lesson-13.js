// "use strict";

// const f1 = function() {
//     return `this is function expression`;
// };
// console.log(f1());
// //-------------

// console.log(f2());

// function f2() {
//     return `this is function declaration`;
// }
// //------------------

// const f3 = () => {
//     return `this is arrow function`;
// };
// console.log(f3());

// //----------------

// function sum(a, b) {
//     console.log(a + b);
// }
// sum(7,8);

// //--------------

// const userName = "Gevorg";
// function person() {
//     return `Hello ${userName} `;
// }
// console.log(person());

// //---------------------

// function date(a, b) {
//     return a + b; 
// }    

// function mig(c, d) {
//     return c * d + date(4, 5);
// }

// console.log(mig(6, 7));
// //-----------------

// // tpel arr zangvaci bolor tveri gumary

// let sum1 = 0;
// let arr = [2, 4, 6, 8, 10]; 
// function arrSum() {
//    for (let i = 0; i < arr.length; i++) {
//       sum1 += arr[i];
//    } return sum1;
// }
// console.log(arrSum());
// //------------------------

// // tpel zangvaci tveri artadryaly

// let product = 1;
// function arrProduct(array) {
//    for (let i = 0; i < array.length; i++) {
//       product *= array[i];
//    } return product;
// }
// console.log(arrProduct([2, 3, 4, 5]));

// //-------------------------

// //Գրել ֆունկցիա, որը ստանում է 3 թիվ և վերադարձնում է դրանցից մեծը

// function numMax(x, y, z) {
//     if(x > y && x > z) {
//         return x;
//     } else if(y > x && y > z) {
//         return y;
//     } 
//     return z;
// }

// console.log(numMax(11, 8, 12));

// //-------------------------

// // Grel funkcia vore kstana tiv ev zangvac vorpes parametr ev arandzin zangvacum ktpi
// //    mer poxancac zangvaci bolor ayn tarere vore poqr e ayd tvic
// let arrX = [];
// function numArr (x, array) {
//     for(let i = 0; i < array.length; i++) {
//         if (array[i] < x) {
//             arrX.push(array[i]);
             
//         } 
//     } return arrX;
// }
//  console.log(numArr(9, [2, 4, 6, 8, 10, 12]));


//  //27. ստեղծում եք 2 զանգված, որտեղ առաջինում պետք է լինեն և բացասական և դրական թվեր,
//  // ու for loop-ի միջոցով զանգվածից հանեք դրական թվերը, իսկ բացասականները դրեք 2րդ դատարկ զանգվածի մեջ

//  let arrA = [2, -5, 4, -8, 6, -3];
//  let arrB = [];
//  for(let i = 0; i < arrA.length; i++) {
//     if(arrA[i] < 0) {
//         arrB.push(arrA[i]);
//     }
//  } 
//  console.log(arrB);


