const words = ['spray', 'limit', 'elite', 'exuberant'];

const newArray = [];
for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if (item.length >= 6)
    {
        newArray.push(item);
    }
}

console.log('newArray', newArray);
console.log('original', words);


/*      
the filter methods does exactly what the for method above does
it only takes one line of code to get it done 
by using this filter() method

*/

const rta = words.filter(item => item.length >= 6)

console.log('rta', rta);
console.log('original', words);


/////////////////////////////

const orders = [
    {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
    },
    {
    customerName: "Zulema",
    total: 120,
    delivered: false,
    },
    {
    customerName: "Santiago",
    total: 180,
    delivered: true,
        },
    {
    customerName: "Valentina",
    total: 240,
    delivered: true,
        },
    ];

const rta3 = orders.filter(item => item.delivered && item.total >= 100)
console.log('rta3', rta3);

// the filter() method has differnet parameters to increase the level of specification for the values searched


const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}

console.log('search', search('Nico'));


// 

function getNames(array) {

const a = array.filter(word => word.length >= 4)

}