const  letters = ['a', 'b', 'c'];


/*const newArray = [];


/*for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    newArray.push(element + '++')
}*/

const newArray = letters.map(item => item + '++'); 

/* with the map method and the function parameter, its possible to
manipulate the array by adding, multipling or resting numbers from the array,
also apply to letters */



console.log('original:', letters)
console.log('new', newArray)


//----------------------------------------------

const totals1 = [1, 2 ,3 , 4];

const newArray1 = totals1.map(item => item + item); 

console.log('exs:', newArray1)