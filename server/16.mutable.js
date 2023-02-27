const products = [
{ title: "Pizza", price: 121, id: "🍕" },
{ title: "Burger", price: 121, id: "🍔" },
{ title: "Hot cakes", price: 121, id: "🥞" },
];

const myProducts = [];

console.log("products", products);

console.log("myProducts", myProducts);

console.log("-".repeat(10));


const productIndex = products.findIndex(item => item.id === '🍔');
if (productIndex !== -1) {
    myProducts.push(products[productIndex]);
    products.splice(productIndex, 1);
}

console.log("products", products);

console.log("myProducts", myProducts);

console.log("-".repeat(10));

// Update

const productsV2 = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
];
const update = {
    id: "🥞",
    changes: {
        price: 200,
        description: 'delicioso'
    }
}
const productIndexV2 = productsV2.findIndex(item => item.id === update.id);
productsV2[productIndexV2] = {
    ...productsV2[productIndexV2],
    ...update.changes,
};
console.log(productsV2);

//**************--******************************************** */


// reto 1: como harias para eliminar un elemento de un array sin alterar el array original
// reto 2: como harias una modificacion en un array sin modificar el array original

const array = [1, 2, 3, 4, 5];

const array1 = 
[
    ...array,
]

array1.splice(4, 1, "que", "so").flat()

console.log("array org", array);

console.log("array 1", array1);


/* reto 1  
-----
--
-
*/

const ex2 = [1, 2, 3, 4, 5];

const ex22 = 
[
    ...ex2,
]

ex22.push([2, 3, 4, 5])
ex22.flat(1)


console.log("array org:", ex22);

/* reto 2  
-----
--
-
*/