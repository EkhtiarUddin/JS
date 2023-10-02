// //function declaration:

function greet(){
    console.log('hello there');
}

// //function expression:

greet();

const sepak = function(){
    console.log('good day');
};
sepak();

//arguments and parameter:

const speak = function(name, time)
{console.log(`good ${time} ${name}`);
};

speak('charle', 'morning');

const speak = function(name = 'shaan', time = 'night')
{console.log(`good ${time} ${name}`);
};

speak();
speak('lari');

const calArea = function(radius){
    let area = 3.14 * radius ** 2;
    return area;
}
const area = calArea(5); // const a = calArea(5)
console.log(area); //console.log(a);

//regular function:
const calArea = function(radius){
    return 3.14 * radius ** 2;
}

//arrow function:
const calArea = (radius) => {
    return 3.14*radius**2;
};

//const calArea = radius => 3.14*radius**2; (can be written this way if one parameter and simple  )

const area = calArea(5); // const a = calArea(5)
console.log('area is:', area); //console.log(a);

// regular to arrow func:

//regula func
const greet = function(){
    return 'hello, world';
}

//arrow func
const greet = () => 'hello, world';
const result = greet();
console.log(result);

//regular func
const bill = function(products, tax){
    let total = 0;
    for(let i=0; i<products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}
console.log(bill([10,15,30], 0.2));

//arrow func
const bill = (products, tax) => {
    let total = 0;
    for(let i=0; i<products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
};

console.log(bill([10,15,30], 0.2));

// const name = 'shaan';

// //functions VS
const greet = () => 'hello';
let result1 = greet();
console.log(result1);

// //methods
let result2 = name.toUpperCase()
console.log(result2);

//callbacks & foreach:

const myfunc = (callbackFunc)=>{
    //do something
    let value = 50;
    callbackFunc(value);
};

// myfunc(function(value){
//     console.log(value);
myfunc(value=>{
    console.log(value);
});

let people = ['maria', 'shaan', 'pag', 'rafsan'];
people.forEach(function(){
    console.log('something');

people.forEach(function(person){
    console.log(person);

people.forEach((person)=>{
    console.log(person);

people.forEach((person, index)=>{
    console.log(index, person);
});

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};
people.forEach(logPerson);

//get a reference to the 'ul'
const ul = document.querySelector('.people');
const people = ['maria', 'shaan', 'pag', 'rafsan'];
let html = ``;

people.forEach(function(person){
    html += `<li style ="color:purple">${person}</li>`;
});

console.log(html);
// ul.innerHTML = html;
