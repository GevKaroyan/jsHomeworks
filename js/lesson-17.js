"use strict";

//Տնային 17

//1. Ձեր պատկերացումով փոփոխում և օպտիմիզացնում եք filmapp.js-ը, որ կոդը էլ ավելի կարճանա ու էլ ավելի արագ աշխատի

//2․ ստեղծում եք 20 օրինակ Destructuring-ի, այսինքն 10 հատ զանգված 10 հատ օբջեքթ,
// կեսը  պետք է լինեն ճյուղավորված գոնե 1 աստիճան, այսինքն զանգվածի մեջ զանգված, օբջեքթի մեջ օբջեքթ,
// բայց պետք է լինեն նաև չճյուղավորվածները

//-------------------------

// const seasons = ["winter", [[[[["spring"]]]]], "summer", "autumn"];
// const [a, b, c, d] = seasons;
// console.log(`${b} has passed, you still heven't fallen in love`);

//---------------------

// const week = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
// const [mon, tue, wed, thu, fri, sat, sun] = week;
// console.log(`i like ${sun}`);

//------------------------- 

// const summer = ["june", "july", [["august"]]];
// const [x, y, z] = summer;
// console.log(`${z}`);
// console.log(z);

//---------------------

// const tellModels = ["iphone", "sumsung", "redmi"];
// const [one, two, three] = tellModels;
// console.log(`my phone is ${three} note 8 pro`);

//---------------------

// const flagobj = {
// 	flagName: "armflag",
// 	width: "500 px",
// 	height: "300 px",
// 	colors: {
// 		color1: "red",
// 		color2: "blue",
// 		color3: "orange"
// 	},

// 	sayHello() {
// 		console.log("Hello dear group 4");
// 	}
// };

// const { flagName, width, height, sayHello } = flagobj;
// const {color1, color2, color3} = flagobj.colors;

// const red = flagobj.colors.color1;
// const blue = flagobj.colors.color2;
// const orange = flagobj.colors.color3;

// console.log(flagName, width, height);
// sayHello();
// console.log(`the colors of the flag of Armenia are: ${color1}, ${color2}, ${color3}`);
// console.log(`the colors of the flag of Armenia are: ${red}, ${blue}, ${orange}`);

// ------------------

// const phonInfo = {
// 	phonName: "redmi note 8 pro",
// 	androidVersion: 11,
// 	simCards: {
// 		sim1: "ucom",
// 		sim2: "mts"
// 	},
// 	memory: "64 gb"
// };

// const {phonName, androidVersion, memory} = phonInfo;
// const {sim1, sim2} = phonInfo.simCards;
// console.log(phonName + ",", androidVersion + ",", memory);
// console.log(sim1 + ",", sim2);

//-------------------------

// const myCountry = {
// 	countryName: "Armenia",
// 	capitalCity: "Yerevan",
// 	regions: {
// 		region1: "Ararat",
// 		region2: "Armavir",
// 		region3: "Aragatsotn",
// 		region4: "Shirak",
// 		region5: "Lori",
// 		region6: "Tavush",
// 		region7: "Gegharquniq",
// 		region8: "Kotayq",
// 		region9: "Vayoc Dzor",
// 		region10: "Syuniq",
// 		region11: "Artsakh"
// 	},
// 	population: "3 million",

// 	aboutOfArmenia () {
// 		console.log("Hello Armenia");
// 	}

// };

// const {countryName, capitalCity, aboutOfArmenia, population} = myCountry;
// aboutOfArmenia();
// console.log(countryName, capitalCity, population);
// const {region1, region2, region3, region4, region5} = myCountry.regions;
// console.log(region1, region2, region3, region4, region5);

//------------

// const bigCountrys = {
// 	one: "Russia",
// 	two: "Canada",
// 	three: "China",
// 	four: "USA",
// 	five: "Brasil",
// 	six: "Australia",
// 	seven: "India",
// 	eight: "Argentina",
// 	nine: "Kazakhstan",
// 	ten: "Algeria",
// 	aboutMyArmenia() {
// 		console.log(`Armenia is the best country in the world `);

// 	}
// };
// const {one, two, three, four, aboutMyArmenia} = bigCountrys;
// aboutMyArmenia();
// console.log(one, two, three, four);

