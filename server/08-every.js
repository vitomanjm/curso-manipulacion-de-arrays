const numbers = [1, 23, 32, 30, 40];

let rta = true;
for (let i = 0; i < numbers.length; i++)
{
    const e = numbers[i];
    if(e >= 40) {
        rta = false
    }
};

console.log("ans:", rta);
const rta2 = numbers.every(item => item >= 40 )
console.log("ans1:", rta2);

/*
el metodo every helps to identify the values in an array that 
accomplish the conditional 
*/

// ex: find if the members of the team are over 18yr old from the following array:

const team = [
{
    name: "Nicolas",
    age: 12,
},
{
    name: "Andrea",
    age: 8,
},
{
    name: "Zulema",
    age: 2,
},
{
    name: "Santiago",
    age: 18,
},
];

const example = team.every(item => item <= 15,

    team.filter((item => item.age > 15),)
    .map((item => 
    item.intheteam = true)));

console.log("example:", example);
console.log("example1:", team);

// logic para agregar un valor a un array atraves de map


const arr = [10, 20, 32, 30, 40];

function checkArray(array) {

const ex = array.every(item => {
    
    for (let i = 0; i < item.length; i++)

{
    
    
    if (e % 2 === 0)
    {
        
        return e, true
        
    }
    else {
        return e, false
    }
    const e = item[i];
}})
return  ex
}


console.log("example:", checkArray(arr));