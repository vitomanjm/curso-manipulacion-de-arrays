// PLAYGROUNF PLATZI generar un triangulo en la terminal
/*example:
Input: printTriangle(5, "*")
Output:
    *
   **
  ***
 ****
*****
*/

// MY OWN SOLUTION FOR THE PLAYGROUND
// THOUGH THE TRIANGLE SHOULD BE LOOKING RIGHT TO LEFT, ITS LOOKING NICE



function printTriangleRtL(size, character) {
    
    let v = "";
    let b = "";
    for (let i = 0; i <= size; i++)
    {
    
    v += "".repeat(i) + character
    b +=  v + "\n" 

    }
    return b
}
    console.log(printTriangleRtL(5,5) )
    

// SECOND TRY  FOR THE TRIANGLE 


function printTriangleLtR(size, character) {
    
    let b = "";
    for (let i = 0; i <= size; i++)
    {
    
    b += " ".repeat(size - i) + character.repeat(i) +   "\n" 

    }
    return b
}

console.log(printTriangleLtR(5, "v"))

    





        ///* PLATZI SOLUTION ** 

    function printTriangle1(size, character) {
let chain = '';
for (let i = 1; i <= size; i++) {
chain += ' '.repeat(size - i) + character.repeat(i);
return chain;}}

console.log(printTriangle1(5,5))

//* * PLATZI SOLUTION ** 

function printTriangle(size, character) {
// Inicializa mi array de elementos
const triangle = [];
// Empieza a iterar desde 1 hasta que el iterador sea igual a size
for (let i = 1; i <= size; i++) {
    // inicializa una variable llamada "characters" que contendrá una cadena de caracteres repetidos. 
    // La cantidad de caracteres repetidos dependerá del valor de "i".
    let spaces = " ".repeat(size - i);
    // Después repetimos el carácter a pintar la cantidad de veces del iterador
    let characters = character.repeat(i);
    // Para después juntar el número de espacios y caracteres en un solo string
    let figure = `${spaces}${characters}`;
    // Y al final mandar esto al array inicial
    triangle.push(figure);
}

// La prueba nos pide un string, por lo que usaremos join() para convertir
// El array en un string donde las comas sean reemplazadas por el salto de linea
return triangle.join("\n");
}
console.log(printTriangle(5,5))


//----------------------------------

// PLAYGROUND FIND THE BIGGEST VALUE IN THE ARRAY

const array = [
{
    name: "Luna",
    followers: [500, 200, 300]
},
{
    name: "Michi",
    followers: [100, 300]
},
]

function findFamousCats(cats) {

const x = cats.map(item => {

return item.followers
})
const z = x.reduce(function(acumulador, numero) {
const k = acumulador + numero;
return k
});

return x
}

console.log(findFamousCats(array))