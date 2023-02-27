const elements = [1, 1, 2, 3];
const othersElements = [3, 3, 4, 4];

const newArray = elements;
for (let i = 0; i < othersElements.length; i++)
{
        const element = othersElements[i];
        newArray.push(element);
}

console.log('for: ', newArray)

// Logica para concatenar un array con otra usando for loop
// Valores cualesquiera y/o arrays para concatenar.

// usando el metodo concat se puede ejecutar la misma logica
// el spread operator es usado con el metodo push 
// para poder concatenar los valores del array al array
// ex: elements.push(...otherselements)


const elements2 = [1, 1, 2, 3];
const othersElements2 = [3, 3, 4, 4];


const ExConcat = elements2.concat(othersElements2);

console.log("Concat:", ExConcat)