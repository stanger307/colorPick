// function first(name) {
//     console.log(`Yo, ${name}`);
// }

// function second(jesus, callback) {
//     callback(jesus);
// }


// const greeter = (name, language) => {
//     if (language === "english") {
//         return `Hello, ${name}!`;
//     } else if (language === "spanish") {
//         return `Hola, ${name}!`;
//     } else if (language === "japanese") {
//         return `Konnichiwa, ${name}!`;
//     } else if (language === "chinese") {
//         return `ni hau, ${name}!`;
//     } else {
//         return `Alien:====0`;
//     }    
// }

// const greeter = (name, callback) => {
//     callback(name);
// }
// const french = (name) => console.log(`Bonjour, ${name}`);
// const utku = (you) => console.log(`Hello, ${you}`);
// const japanese = (namae) => console.log(`Konnichiwa, ${namae} san.`);
// greeter("Alex", french);
// greeter("Takumi", japanese);
// greeter("Utku", utku);
// const squareZap = (arr) => {
//     let result = [];
//     for (let item of arr) {
//         result.push(Math.pow(item, 2));
//     }
//     return result;
// }


// const masterZap = (arr, callback) => {
//     let result = [];
//     for (let item of arr) {
//         result.push(callback(item));
//     }
//     return result;
// }
// const array = [1,2,5];
// const string = ["kekw", "saruman", "hehe"];
// const sum = masterZap(array, (item) => item * 2);
// const upper = (item) => item.toUpperCase();
// console.log(masterZap(string, upper));
// const map  = sum.map(item => item * 2)
// const reduce = sum.reduce((a,b) => a/b)

// // callback is another function you want to connnect it.



const body = document.querySelector("body");

const changeBackground = function() {
    body.style.backgroundColor = getColor();
}

function getColor() {
    let color = ["#"];
    for (let i = 0; i < 3; i++){
        color.push(Math.floor(Math.random() * 10));
    }
    return color.join("");
}


window.addEventListener("click", () => changeBackground());

