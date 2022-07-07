"use strict";

//1․ Կարդում եք այս նյութը http://mathhelpplanet.com/static.php?p=javascript-algoritmy-poiska, 
//   այստեղ կան այն 7 հիմնական ալգորիթմները, որոնք JSում օգտագործվում են 

//2․ filmapp-ի մեջ փոփոխություններ եք անում, ամբողջովին պետք ա ռեֆակտորինգ անեք էդ կոդը, ու դա նորմալ ա դուք պետք ա 
//սովորեք ձեր կոդերը փոփոխել կամ ուրիշի կոդերի վրա աշխատանքներ տանել, հետևաբար բոլոր այն ֆունկցիաները, 
//որոնք մենք ստեղծել եք օբջեքթից դուրս, դարձրեք օբջեքթի մեթոդներ

//3․ ստեղծեք նոր մեթոդ որի անունը պետք է  լինի isVisibleMyDB, ու ինքը պետք ա ստուգի, եթե privat-ը եթե true ա,
// դարձնի false, եթե false ա, դարձնի true, թեստ անել showMyDB մեթոդի հետ

//4․  yourFavoriteGenres method-ում թույլ չտալ որպեսզի յուզեռը դատարկ տող ուղարկի, քենսլ անի, ու 20ից շատ սիմվոլ գրի,
// ու երբ որ յուզեռը էդ հարցերին պատասխանի, դուք console-ում forEach-ով տպեք յուզեռի սիրած ժանրերը,
// բայց թվերով ու որ սկսվի մեկից, այսինքն Ձեր սիրելի ժանրը։ԺԱՆՐ 1․․․



let numberOfFilms;

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: true,

	start(numberOfFilms) {


		while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms) || numberOfFilms < -1) {
			numberOfFilms = parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));
		}
		return numberOfFilms;
	},

	rememberMyFilms() {
		for (let i = 0; i < 2; i++) {
			const a = prompt("Ո՞ր ֆիլմն եք վերջերս դիտել", "");
			const b = prompt("Ինչքա՞ն այդ ֆիլմը կգնահատեիք", "");

			if (!isNaN(b) && a != null && b != null && a.trim() != "" && b.trim() != "" && a.length < 50) {
				personalMovieDB.movies[a] = b;
				console.log("DONE");
			} else {
				console.log("ERROR");
				i--;
			}
		}
	},

	detectUserPersonalLevel() {
		if (numberOfFilms < 10) {
			console.log("Դուք նայել եք բավականին քիչ ֆիլմեր");
		} else if (numberOfFilms < 30) {
			console.log("Դուք ֆիլմի սիրահար եք");
		} else if (numberOfFilms >= 30) {
			console.log("Դուք կինոման եք !!!");
		} else {
			console.log("Տեղի է ունեցել խնդիր, ըստ երևույթի դուք թիվ չեք նշել");
		}
	},

	yourFavoriteGenres() {
		for (let i = 0; i <= 2; i++) {
			const genres = parseInt(prompt(`Ձեր նախընտրելի ժանրը ${i + 1}`));

			if (genres != null && genres.trim() != "" && genres.length <= 20) {
				personalMovieDB.genres[i] = genres;
			} else {
				i--;
			}
		}
	},

	showMyDB() {
		if (personalMovieDB.privat) {
			console.log(personalMovieDB);
		} else {
			console.log("Մեր տվյալների բազան փակ է");
		}
	},
	isVisibleMyDB() {
		if (personalMovieDB.privat) {
			console.log(!personalMovieDB.privat);
		} else {
			console.log(personalMovieDB.privat);
		}
	}
};

const {
	start,
	rememberMyFilms,
	detectUserPersonalLevel,
	yourFavoriteGenres,
	showMyDB,
	isVisibleMyDB
} = personalMovieDB;

start();
rememberMyFilms();
detectUserPersonalLevel();
yourFavoriteGenres();
showMyDB();
isVisibleMyDB();