const pets = ['cat', 'dog', 'bird'];

let includeInArray = false;
for (let i = 0; i < pets.length; i++){
    const element = pets[i];
    if(element === 'dog')
    {
        includeInArray = true;
        break;
    }

}

console.log("example:", includeInArray);


//------------------ USING METHOD includes()


const rta = pets.includes('dog')

console.log("example 2:", rta);

// it also has a second parameter for the start
// point in the array for the validation

const rta1 = pets.includes('dog', 1)