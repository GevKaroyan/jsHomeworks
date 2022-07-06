"use strict";


//Տնային 14 

//Ստեղծում եք 3 հատ  առանձին nested loop, որոնց մեջ պետք ա լինի 1, 2, և 3 հատ loop` ըստ հերթականության,
// ստեղծում եք FOR-ով և WHILE-ով

// for (let i = 0; i < 3; i++){
//     console.log(`1: first loop`);
//     for (let j = 0; j < 3; j++){
//         console.log(`2: second loop`);
//         for (let k = 0; k < 3; k++) {
//             console.log(`3: third loop`);
//         }
//     }
// }

//ստեղծում եք function, որի մեջ switch-ով պետք ա ստեղծեք կալկուլյատոր + - / * % ի համար


// function calculator(x, y, type) {
//     switch(type) {
//         case "+": console.log(x + y); break;
//         case "-": console.log(x - y); break;
//         case "*": console.log(x * y); break;
//         case "/": console.log(x / y); break;
//         case "%": console.log((x * y) / 100); break;
//         default : console.log("type calculator is not define");

//     }
// }
// calculator(3, 4, "+");
// calculator(8, 5, "-");
// calculator(4, 6, "*");
// calculator(9, 3, "/");
// calculator(80, 10,"%");

//տոնածառը ստանում եք 2 ցիկլով :)

// let result = "";
// for (let i = 0; i <= 7; i++) {
//     for (let j = 0; j <= i; j++) {
//         result += " " + "*";
//     } 
//     result += "\n";
// }
// console.log(result);

//23. ստեղծում եք ֆունկցիա, որը կաշխատի ֆակտորիալ ֆորմուլայով
// let result = 1;
// function fact(x) {
//     for(let i = 1; i <= x; i++ ){
//         result *= i;
//     }
//     return result;

// } 

//  console.log(fact(5));

//-----------------
// function factorial(num) {
//     if (num === 1) {
//         return 1;
//     } else {
//         return num * factorial(num - 1);
//     }
// }
//   console.log(factorial(5));

//24.ստեղծում եք ֆունկցիա, որը կաշխատի ֆիբոնաչի ֆորմուլայով  banadzev n = (n-1) + (n-2~)

//    let one = 0;
//    let two = 1;

// for (let i = 1; i <= 10; i++) {
// 	let current = one + two;
	
// 	one = two;
// 	two = current;
	
// 	console.log(current);
// }

//-----------------


// let arr = [0, 1];

// function fib(x) {
//     for (let i = 2; i < x; i++) {
//         arr[i] = arr[i - 1] + arr[i - 2];
//     }
//     return arr;
// }
// console.log(fib(10)); 

//----------------------

// let lettr = "";

// for(let i = 0; i <= 6; i++) {
//     for(let j = 0; j <= 4; j++) {
//         if(i < 6){
//             lettr += "*";
//             break;
//         }else{
//             lettr += "* ";
//         }
//     }
//     lettr += "\n";
// }
// console.log(lettr);

// 3. stexcel funkcia vore kgumari zangvaci arajin ev verjin , erkrord u naxaverjin valunere u aydpes minjev verj
//  u kveradardzni nor zangvac: ( ete arayi erkarutyune kent e mejtexi tive tpel nor zangvaci verjum)

// let arr1 = [2, 5, 7, 8, 1, 9, 6, 10, 4];
// let arr2 = [];

// let j = arr1.length-1;
// function arrSum() {
//     for(let i = 0; i <= arr1.length/2 && j >= arr1.length/2 ; i++) {
//         arr2[i] = arr1[i] + arr1[j];
//        j--;
//     }
//     if(arr1.length % 2 !== 0) {
//         arr2[arr2.length] = arr1[j];
//     }
// return arr2;
// }
// console.log(arrSum());

//1. Գրեք ծրագիր, որը կհարցնի user-ից նրա տարիքը։ Եթե տարիքը փոքր է 10-ից,
// ցույց տվեք “hi” տեքստով պատուհան(console.log)։
// Եթե տարիքը մեծ է կամ հավասար 10, բայց փոքր է 18-ից, ցույց տվեք “hello” տեքստով պատուհան։ 
// Մնացած բոլոր դեպքերում ցույց տվեք “greetings” տեքստով պատուհան

// let user =  +(prompt("x"));
// if(user < 10) {
//     alert("hi");
// } else if(user >= 10 && user < 18) {
//     alert("hello");

// } else {
//     alert("greetings");
// }


//2. Գրեք ծրագիր, որը user-ից կշարունակի խնդրել թիվ մուտքագրել։ Երբ user-ը մուտքագրի “exit”, 
// ցույց տվեք պատուհան (consolum),
// որը կտպի մինչև այդ գրված բոլոր թվերի գումարը և կավարտի ծրագիրը։





//3.Գրեք computeTriangleArea անունով ֆունկցիա, որը կվերցնի եռանկյան հիմքը և բարձրությունը և կվերադարձնի 
//եռանկյան մակերեսը
//Օրինակ computeTriangleArea(2, 9)․ պետք է վերադարձի 9 որպես արդյունք։ makerese = himq * bardzrutyun / 2

// function computeTriangleArea(x, y) {
//     return x * y / 2;
// }
// console.log(computeTriangleArea(2, 9));


//4. Գրեք reverse անունով ֆունկցիա, որը կվերցնի զանգված և կվերադարձնի մի նոր զանգված,
// որի արժեքները նույնն են ինչ առաջին զանգվածինը,
// բայց համակարգված են հակառակ դասավորությամբ։ Օրինակ reverse([1, 2, 3, 4]):
// պետք է վերադարձնի նոր զանգված նման արժեքներով՝ [4, 3, 2, 1].

// function reverse(array) {
//     let newArray = [];
//     let j = 0;
//     for (let i = array.length - 1; i >= 0; i--) {
//         newArray[j] = array[i];
//         j++;


//     }
//     return newArray;
// }
// console.log(reverse([1, 2, 3, 4]));

//5. Գրեք average անունով ֆունկցիա, որը կվերցնի թվերի զանգված, և կվերադարձնի այդ թվերի հանրահաշվական միջինը։
// Օրինակ average([4, 3, 6, 10, 2])․ պետք է վերադարձի 5։

// function average (array){
//  let arraySum = 0;
//  for(let i = 0; i < array.length; i++){
//     arraySum += array[i];
//  }

//  return arraySum / array.length;
// }

// console.log(average([4, 3, 6, 10, 2]));

//6. Գրեք factorial անունով ֆունկցիա, որը կվերցնի թիվ և կվերադարձնի այդ թվի ֆակտորիալը։ Հիշեք, 
//որ թվի ֆակտորիալը, տրված թվից մինչև 1 բոլոր բնական թվերի արտադրյալն է։ Օրինակ factorial(5)․ պետք է վերադարձի 120։

// function fact (num) {
//   let result = 1;
//     for(let num = 5; num >= 1; num--) {
//         result *= num;
//     }

// return result;
// }

// console.log(fact(5));


//  stexcel funkcia vore kgumari zangvaci arajin ev verjin , erkrord u naxaverjin valunere u aydpes minjev verj
//  u kveradardzni nor zangvac: ( ete arayi erkarutyune kent e mejtexi tive tpel nor zangvaci verjum)


// function sumArray(arr) {
//     let newArr = [];
//     let j = arr.length - 1;
   
//     for (let i = 0; i < arr.length / 2 && j > arr.length / 2 ; i++) {

//            newArr[i] = arr[i] + arr[j];
//            j--;
        
//         if (arr.length % 2 !== 0) {
//         newArr[newArr.length] = arr[j];
//         }
//     }
//     return newArr;
// }
// console.log(sumArray([1, 6, 3, 5, 9, 4, 7]));
    
