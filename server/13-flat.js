const matriz = [
    [1, 2, 3],
    [4, 5,6], [2, 1, [2, 3, [4],]],
    [7, 8, 9]
];

const newArray = []
for (let i = 0; i < matriz.length; i++)
{
    const array = matriz[i]; 
    for (let j = 0; j < array.length; j++)
    {
        const element = matriz[i][j]
        newArray.push(element);

    }
}

console.log('for:', newArray)

// logica para aplanar una matriz o recorrer una matriz
// entre mas subarrays tenga el array, mas for loops deberan 
// aplicarse para recorrer el array

// para aplanar o recorrer una matriz de arrays 
// es necesario usar recursion, a razon de ahorrar lineas de codigo

//-----------------

// el metodo flat ejecuta esta logica de manera directa
// como parametro para la funcion flat se debe indicar el
// nivel de profundidad del array

const rta = matriz.flat(3);

console.log("flat:", rta);

// el ejercicio siguiente resuelve la recursion 
// para la solucion de aplanar una matriz

const matriz1 = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];

function profundidad(list) {
    let newList = [];
    if (typeof list != "object") return [list];
    list.forEach(element => {
        newList = newList.concat(profundidad(element));
    });
    return newList;
}

const newArray1 = profundidad(matriz);

console.log(newArray1);

// another example of flat function using recursion

// using recursion
function FlatR(array) {
    let result = []


    for(let i = 0; i < array.length; i++) {
        if( !Array.isArray(array[i]) ) {
            result.push(array[i])
            continue;
        }

        result = result.concat(FlatR(array[i]))
    }

    return result
}

console.log( FlatR(arr) )

// ----------------------

