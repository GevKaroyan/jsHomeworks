"use strict";

//Տնային աշխատանք 16

//1․ գլխավոր օբջեքթի մեջ ստեղծել showMyDB մեթոդ, որը կստուգի privat-ը, 
//եթե լինի false ապա գլխավոր օբջեքթը չպետք ա կոնսոլ լինի, 
//եթե true ապա պետք ա կոնսոլ լինի

//2․ գլխավոր օբջեքթի մեջ ստեղծել yourFavoriteGenres մեթոդ, որի մեջ յուզեռը պետք ա երեք անգամ պատասխանի այց հարցին ՝
// « Ձեր նախընտրելի ժանրը» ու կողքից գրվի հարցի թիվը, այսինքն առաջին հարցը կլինի 1, երկրորդ հարցը կլինի 2,
// երրորդ հարցը կլինի 3, ու էդ ամեն ինչը պետք ա գրեք genres անունով զանգվածի մեջ

//3․ պետք ա ներկայիս կոդը օպտիմիզացնեք ու ձեր ստեղծած մեթոդները դնեք ստուգման տակ, 
//որպեսզի յուզեռը չկարողանա ոչ քենսլ անի, ոչ դատարկ վալյու ուղարկի ոչ էլ 20ից շատ տառ

//4. numberOfFilms-ը պետք ա լինի ՄԻԱՅՆ ԹԻՎ, եթե թիվ չի while-ով էնքան անել, որ յուզեռը թիվ գրի
// const userquestion

// let numberOfFilms = +prompt("qani film eq ditel aysor");

// while(true) {
//     if (numberOfFilms == null || numberOfFilms === 0 || numberOfFilms < 0 || numberOfFilms === "" || isNaN(numberOfFilms) ) {
        
// numberOfFilms = +prompt("qani film eq ditel aysor");
//     } else {
//         break;
//     }
// }


// const personalMovieDB = {
//     count: numberOfFilms >= 1 ? numberOfFilms : 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: true,
//     showMyDB() {
//         if(personalMovieDB.privat === true) {
//             console.log(personalMovieDB);
//         } else {
//             console.log("mer privaty pak e");
//         }
//     },
//      yourFavoriteGenres() {
//         for (let j = 0; j < 3; j++) {
//             const c = prompt(`Ձեր նախընտրելի ժանրը   ${j+1}`);
           
//             if(c !== "" && c !== null && c.length < 20 && isNaN(c)) {
//                 personalMovieDB.genres[j] = c;
//             } else {
//                 console.log("inch vor mi ban skhal e");
//                 j--;
//             }
        
//         }
//     }

// };

// personalMovieDB.yourFavoriteGenres();
// personalMovieDB.showMyDB();

// if (numberOfFilms == null || numberOfFilms === 0 || numberOfFilms < 0 || numberOfFilms === "" || typeof (numberOfFilms) === typeof("string") ) {
//     console.log("Տեղի է ունեցել խնդիր, խնդրում ենք գրել միայն թվեր");
// } else {
//     if (numberOfFilms < 10) {
//         console.log("Դուք նայել եք բավականին քիչ ֆիլմեր");
//     } else if (numberOfFilms < 30) {
//         console.log("Դուք ֆիլմի սիրահար եք");
//     } else if (numberOfFilms >= 30) {
//         console.log("Դուք կինոման եք !!!");
//     } else {
//         console.log("Տեղի է ունեցել խնդիր, ըստ երևույթի դուք թիվ չեք նշել");
//     }
// }

// for (let i = 0; i < 2; i++) {
//     const a = prompt("Ո՞ր ֆիլմն եք վերջերս դիտել", "");
//     const b = prompt("Ինչքա՞ն այդ ֆիլմը կգնահատեիք");

//     if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//         a.trim();
//         b.trim();
//         personalMovieDB.movies[a] = b;
//         console.log("DONE");
//     } else {
//         console.log("ERROR");
//         i--;
//     }
// }


















