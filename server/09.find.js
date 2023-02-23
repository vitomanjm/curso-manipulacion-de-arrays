const numbers = [10, 20, 32, 30, 40];

let rta = undefined;
for (let i = 0; i < numbers.length; i++){
    const element = numbers[i]
    if (element === 30)
    {
        rta = element;
        break;
    }
}

//console.log("example:", rta);

const rta2 = numbers.find(item => item === 30)
console.log("example 2:", rta2);

//-----------------------------------------------------


const products = [
{
    name: "Pizza",
    price: 12,
    id: '🍕'
},
{
    name: "Burger",
    price: 23,
    id: '🍔'
},
{
    name: "Hot dog",
    price: 34,
    id: '🌭'
},
{
    name: "Hot cakes",
    price: 355,
    id: '🥞'
}];

const rta3 = products.find(item => item.id === '🥞')
console.log("example 2:", rta3);

const rta4 = products.findIndex(item => item.id === '🥞')
console.log("example 2:", rta4);

//-------------------------


// EXECERSICE: FIND FROM AN ARRAY AN SPECIFIC TERM AND RETURN THE
// VALUE IN THE ARRAY


// MY SOLUTION >>> DID NOT WORK
const array  = ["ana","santi","nico","anastasia"]
const t = "ana"

function filterByTerm(array, term) {

const e = array.find((item => item === term),)
return e.includes(term);

}

console.log("ex: ", filterByTerm(array, t))


//---------------------------------------- Platzi Solution
function filterByTerm(array, term) {
return array
    .filter((word) => {
    return word
        .toLowerCase()
        .includes(term.toLowerCase())
    });
}

console.log("ex: ", filterByTerm(array, t))


//------ other solution

function solution(array, term) {
	const result = array.filter(word => {
		return word.includes(term);
	});
	return result;
};

console.log("ex: ", solution(array, t))