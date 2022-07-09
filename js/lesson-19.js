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



// Samin a grel
//---------------------------

// const numberOfFilms = start();

// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: true
// };

// detectUserPersonalLevel();
// rememberMyFilms ();
// yourFavoriteGenres();
// showMyDB();


// function start (numberOfFilms) {
// 	numberOfFilms = parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));
	
// 	while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms) || numberOfFilms < -1) {
// 		numberOfFilms = parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));
// 	}

// 	return numberOfFilms;
// }
// function rememberMyFilms () {
// 	for (let i = 0; i < 2; i++) {
// 		const a = prompt("Ո՞ր ֆիլմն եք վերջերս դիտել", "");
// 		const b = prompt("Ինչքա՞ն այդ ֆիլմը կգնահատեիք", "");
	
// 		if (!isNaN(b) && a != null && b != null && a.trim() != "" && b.trim() != "" && a.length < 50) {
// 			personalMovieDB.movies[a] = b;
// 			console.log("DONE");
// 		} else {
// 			console.log("ERROR");
// 			i--;
// 		}
// 	}
// }
// function detectUserPersonalLevel () {
// 	if (numberOfFilms < 10) {
// 		console.log("Դուք նայել եք բավականին քիչ ֆիլմեր");
// 	} else if (numberOfFilms < 30) {
// 		console.log("Դուք ֆիլմի սիրահար եք");
// 	} else if (numberOfFilms >= 30) {
// 		console.log("Դուք կինոման եք !!!");
// 	} else {
// 		console.log("Տեղի է ունեցել խնդիր, ըստ երևույթի դուք թիվ չեք նշել");
// 	}
// }
// function yourFavoriteGenres () {
// 	for (let i = 0; i <= 2; i++) {
// 		const genres = prompt(`Ձեր նախընտրելի ժանրը ${i + 1}`);

// 		if (genres != null && genres.trim() != "" && genres.length <= 20) {
// 			personalMovieDB.genres[i] = genres
// 		} else {
// 			i--;
// 		}
// 	}
// }
// function showMyDB () {
// 	if (personalMovieDB.privat) {
// 		console.log(personalMovieDB);
// 	} else {
// 		console.log("Մեր տվյալների բազան փակ է");
// 	}
// }

// Sami 2-rd tarberak

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: true,
	start: function () {
		personalMovieDB.count = parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));
		
		while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count) || personalMovieDB.count < -1) {
			personalMovieDB.count = parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));
		}
	
		return personalMovieDB.count;
	},
	rememberMyFilms: function () {
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
	detectUserPersonalLevel: function () {
		if (personalMovieDB.count < 10) {
			console.log("Դուք նայել եք բավականին քիչ ֆիլմեր");
		} else if (personalMovieDB.count < 30) {
			console.log("Դուք ֆիլմի սիրահար եք");
		} else if (personalMovieDB.count >= 30) {
			console.log("Դուք կինոման եք !!!");
		} else {
			console.log("Տեղի է ունեցել խնդիր, ըստ երևույթի դուք թիվ չեք նշել");
		}
	},
	yourFavoriteGenres: function () {
		for (let i = 0; i <= 2; i++) {
			const genres = prompt(`Ձեր նախընտրելի ժանրը ${i + 1}`);
	
			if (genres != null && genres.trim() != "" && genres.length <= 20) {
				personalMovieDB.genres[i] = genres;
			} else {
				console.log("Դուք թույլ եք տվել սխալ, խնդրում ենք հետևել կանոններին !");
				i--;
			}
		}

		for (let i = 1; i < 2; i++) {
			const genres = prompt("Թվարկեք ձեր նախընտրելի ժանրերը, եթե դրանք մեկից ավելի են, ապա խնդրում ենք առանձնացնել դրանք ստորակետերով", "");
	
			if (genres != null && genres.trim() != "") {
				personalMovieDB.genres = genres.trim().toLowerCase().split(", ", 1000);
				personalMovieDB.genres.sort();
			} else {
				console.log("Դուք թույլ եք տվել սխալ, խնդրում ենք հետևել կանոններին !");
				i--;
			}
		}

		personalMovieDB.genres.forEach(function(genre, i){
			if (i === 0) {
				console.log(`Ձեր սիրելի ${i + 1}ին ժանրը։ ${genre}`);
			} else {
				console.log(`Ձեր սիրելի ${i + 1}րդ ժանրը։ ${genre}`);
			}

			console.log(`Ձեր սիրելի ժանրը։ ${genre}`);
		});
	},
	isVisibleMyDB: function () {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},
	showMyDB: function (show) {
		if (show) {
			console.log(personalMovieDB);
		}
	},

	// test function which can run our programm
	run() {
		personalMovieDB.start();
		personalMovieDB.rememberMyFilms();
		personalMovieDB.detectUserPersonalLevel();
		personalMovieDB.yourFavoriteGenres();
		personalMovieDB.isVisibleMyDB();
		personalMovieDB.showMyDB(personalMovieDB.privat);
	}
};

     personalMovieDB.run();