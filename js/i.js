"use strict";
const createDiv = () => document.createElement('DIV');


const createDivText = (text) => {
    const element = document.createElement('DIV');
    const textNode = document.createTextNode(text);
    element.appendChild(textNode);
    return element;

}

const data =['Labas', 'Pats', 'tu labas'];

const root = document.querySelector('#root');
root.appendChild(createDivText('Valio'));
