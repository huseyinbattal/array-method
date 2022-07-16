const data=['car','car','truck','bike','walk','truck','van','bike','walk', 'bike'];
console.log(data);
console.log(data.length);
console.log(data[1]);
console.log(data[data.length-1]);
console.log(data[Math.floor (data.length/2)]);


const inventors=[
    ["Albert Einstein",1879], 
    ["Isaac Newton",1643],
    ["Galileo Galilei",1564],
    ["Marie Curie"],
    ["Johannes Kepler",1571]
];

console.log(inventors[1][1]);

inventors[1]=["Farabi",1643];
console.log(inventors[3]);
inventors[3][1]=1867;
console.log(inventors[3]);
console.log(inventors);

inventors[inventors.length-1][1]=1800;
console.log(inventors);

let newArray1=stringVal.split(" ");
console.log(newArray);

let newString1=newArray.join();
console.log(newString);

newString=newArray.join(" ### ");
console.log(newString);

let newString3=stringVal.split("")[0].toUpperCase();


let stringVal = "build with Visual Studio Code, anywhere, anytime, entirely in your browser";

let newString2=stringVal.split("")[0].toUpperCase();
console.log(newString);



let newArray = stringVal.split("");
newArray[newArray.length] = "....";
newArray[0] = newArray[0].toUpperCase();
newString=newArray.join("");
console.log(newString);

const firstList=[1,2,3];
const secondList=[4,5,6];
const thirdList=firstList.concat(secondList,);

console.log(firstList);
console.log(secondList);
console.log(thirdList);

secondList.push(7,"merhaba", 9);
console.log(secondList);

secondList.pop();
console.log(secondList);

let merhabaIndex=secondList.indexOf("merhaba");
console.log(merhabaIndex);
secondList[secondList.indexOf("merhaba")]="yeni";
console.log(secondList);

const qa=['car','car','truck','bike','walk','truck','van','bike','car', 'bike'];

let x1=data.lastIndexOf("car");
console.log(x);

console.log(data.includes("truck1"));

const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(number);
let yeniNumber = number.slice();
console.log(number);
console.log(yeniNumber);

let yeniNumber1 = number.splice(3,4,22,33,44);
console.log(yeniNumber1);
console.log(number);


let seconItems = [4, 5, 6];
let thirdItems = [...firstItems,...seconItems];
console.log(thirdItems);

let x2=firstItems.shift();
console.log(x);
console.log(firstItems);

let x3=firstItems.unshift(55,22,54);

console.log(firstItems);
console.log(x);

let y = [1,"a", 9,"z", 6,"d", 4,"r", 5, 6, 7, 8, 9, "a"];

let x=y.sort();
console.log(x);




function filterMenu(menu, value) {
    if (menu.includes(value)) {
        let indexNum = menu.indexOf(value);
        menu.splice(indexNum, 1);
        return menu;
    }
}

let menuList = ["çorba", "paçanga", "lahmacun", "patlıcan", "brokoli", "köfte", "künefe", "sütlaç"]

let istenmeyen = "brokoli";

let filteredMenu= filterMenu(menuList,istenmeyen);
console.log(filteredMenu);