const elements = ["Fire", "Air", "Water"];

let rtaFinal = '';
const separator = '--';


// logica de un ciclo for para unir strings
for(let i = 0; i < elements.length; i++)
{
    const element = elements[i];
    rtaFinal = rtaFinal + element + separator;
}

console.log("Elements: ", rtaFinal)



// function join()

const example = elements.join('--')

console.log("join: ", example)


// funcion split() para crear URL en un navegador


const title = 'Curso de manipulacion de arrays';

const splitFunction = title.split(' ')

console.log("Split function: ", splitFunction)

// se puede unir la funciones split y join, ex below

const url = title.split(' ').join('-').toLowerCase();

console.log("Split.Join function: ", url)


// de la forma en que esta mostrado arriba se obtiene una URL



let x = 10;

function test() {
let x = 20;
if(true){
let x = 30;
console.log(x);
}
console.log(x);
}

console.log(x);
test();
console.log(x);

//-------------------------

