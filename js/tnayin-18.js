"use strict";

// 2. ստեղծում եք մեկ հատ Object 10 հատ property-ներով, 5 property-Ն պետք ա լինեն object, ու for in-ով անում եք այնպես,
// որ կոնսոլում տպվեն համ առաջին մակարդակի property-ները իրենց value-ներով, համ 2րդ մակարդակի (Օբյեկտի մեջի Օբյեկտների)


//4․ ստեղծում եք առանձին Object ու Array, որոնց մեջ ստեղծում եք function-ներ, ու փորձում եք ստանալ destructuring անելով,
// այսինքն առանց կետի կանչելով, ուղղակի գրեք ֆունկցիայի անունը ու կանչեք

//5․ նորից կարդում եք boolean օպերատորները, օպերատորների պրիարիտետները, թեստ եք անում if, else if, else,
// ու ամենակարևորը էսի &&  ու էսի ||, ովքեր որ HTML CSS-ից լավ չեն,
// ապա նորից նայում են յութուբի դասերը կամ կարող եք այլ տեղերից նայել 

const jsGroup = {
    teacher: "Sami Hayrapetyan",
    group1: "group1",
    group2: "group2",
    group3: {
        student1: "Monica",
        student2: "Angelina",
    },
    group4: {
        student1: "Edgar",
        student2: "Arman",
        student3: "Ani K",
        student4: "Grig",
        student5: "Ani N",
        student6: "Karlen",
        student7: "Maga",
        student8: "Arpine",
        student9: "Vahe",
        student10: "Lilit",
        student11: "Hovhannes",
        student12: "Arshak",
        student13: "Grigor",
        student14: "Arevik",
        student15: "Armine",
        student16: "Gevorg"
    },
    aboutOurGroups() {
        console.log(jsGroup);
    }
};

for (let key in jsGroup) {
    if (typeof jsGroup[key] === "object") {
        for (let key2 in jsGroup[key]) {
            console.log(`${key} => key: ${key2}  value: ${jsGroup[key][key2]}`);
        }
    } else {
        console.log(` key: ${key}  value: ${jsGroup[key]}`);
    }

}

const {aboutOurGroups} = jsGroup;
aboutOurGroups();


//3․  ստեղծում եք մեկ հատ Array, 10 հատ item-ներով, 5 item-ը պետք ա լինեն Array-ներ, ու for in-ով ու 
//for of-ով անում եք այնպես,որ կոնսոլում տպվեն համ առաջին մակարդակի item-ները համ 2րդ մակարդակի (Զանգվածի մեջ զանգված)

const array = ["item1", "item2", "item3", "item4", "item5", ["item6"], ["item7"], ["item8"], ["item9"], ["item10"]];

for (let i in array) {
    console.log(`index: ${i}, value: ${array[i]}`);
}

for (let i of array) {
    console.log(i);
}