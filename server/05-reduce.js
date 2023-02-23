// algorith logic for a reduce function for an array

/*

const numbers = [5,4,8,6,2]
let suma = 0

for(let i = 0; i<numbers.length; i++){
  const number = numbers[i]
  suma = suma + number
}

console.log(suma) // 145

*/


const totals = [1, 2 ,3 , 4];

let sum = 0;
for(let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element;
}

console.log('Suma: ', sum);

const rta = totals.reduce((sum, element) => sum + element, 0);

console.log('rta: ', rta);

/*
El método reduce es inmutable y consiste retornar 
un solo valor del array iterado a partir de una función (callback) 
que indica de qué manera se itera cada elemento para reducirlo.
*/

const rta2 = totals.reduce((sum, element) => sum + element**2);
console.log('rta2: ', rta2);

/////////////////////////////////////////

const totalss = [1, 2 ,3 , 4];

function calcSum(numbers) {

  return numbers.reduce( (a, b)  => a + b)


  }


console.log('rta2: ', calcSum(totalss));

// con esta logica se puede sacar la suma total de los valores 
// de una array, el metodo reduce usa como parametros un acumulador
//  y el iterador y una funcion para la logica del codigo

