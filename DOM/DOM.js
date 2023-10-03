// const para = document.querySelector('p');
// console.log(para);

// const pa = document.querySelector('.error');
// console.log(pa);

// const pa = document.querySelector('div.error');
// console.log(pa);

// const pa = document.querySelector('body > h1');
// console.log(pa);

//select single elements
// const paras = document.querySelectorAll('p');
// console.log(paras);

// const paras = document.querySelectorAll('p');
// console.log(paras[2]);

// select several elements
// const errors = document.querySelectorAll('.error');
// console.log(errors);

///..........////
// get an elements by id
// const title = document.getElementById('page-title');
// console.log(title);

// get elements by their class
// const errors = document.getElementsByClassName('error');
// console.log(errors); 
// console.log(errors[0]);
//we can not use errors.forEach here, errors.forEach is not a function.

// get elements by their tag name
// const paras = document.getElementsByTagName('P');
// console.log(paras);
// console.log(paras[1]);

//..........//
const para = document.querySelector('p');
// console.log(para.innerText);
// para.innerText = 'watta day!';

// const paras = document.querySelectorAll('p');
// // paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += 'new text';
// });

// const content = document.querySelector('.content');
// // console.log(content.innerHTML);
// content.innerHTML += '<h2>THIS IS A NEW H2</h2>';

// const people = ['maruf', 'lufi', 'yosha'];
// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// });

//...........//
// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.moeguide.co');
// link.innerText = 'The tour guide website';

// const msg = document.querySelector('p');
 
// console.log(msg.getAttribute('class'));
// msg.setAttribute('class', 'success');
// msg.setAttribute('style', 'color: green');

// const title = document.querySelector('h1');
// // title.setAttribute('style', 'margin:50px;');

// console.log(title.style);
// console.log(title.style.color);
// title.style.margin = '50px';
// title.style.color = 'crimson';
// title.style.fontSize = '60px';
// title.style.margin = '';


// const content = document.querySelector('p');
// console.log(content.classList); //way to get classes
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');


// const paras = document.querySelectorAll('p');
// paras.forEach(p => {
//     console.log(p.textContent);
// })

const paras = document.querySelectorAll('p');
paras.forEach(p => {
    if(p.textContent.includes('error')){
        p.classList.add('error');
    }
    if(p.textContent.includes('success')){
        p.classList.add('success');
    }
});

const title = document.querySelector('.title');
title.classList.toggle('test');