// el methodo sort organiza el array acorde a los parametros ingresados en la llamada
// de no ingresar aprametros se organiza siguiendo ASCII

const months = ['March', 'Jan', 'Feb', 'Dec'];

months.sort();


console.log(months);

const numbers = [1, 30, 4, 21, 100000];

numbers.sort((a,b) => b - a);

console.log(numbers);

const words = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair', 'banana'];

words.sort((a,b) => a.localeCompare(b));

console.log(words);

const orders = [
{
    customerName: "Nicolas",
    total: 600,
    delivered: true,
},
{
    customerName: "Zulema",
    total: 120,
    delivered: false,
},
{
    customerName: "Santiago",
    total: 1840,
    delivered: true,
},
{
    customerName: "Valentina",
    total: 240,
    delivered: true,
},
];

orders.sort((a,b) => b.total - a.total);

console.log(orders);

//-------------------------

// reto: organizar el array por fechas

const orders2 = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
        date: new Date(2022, 1, 1, 11)
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
        date: new Date(2024, 1, 1, 13)
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
        date: new Date(2023, 1, 1, 10)
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
        date: new Date(2025, 1, 1, 12)
    },
    ];
    
    orders2.sort((a,b) => a.date - b.date );

console.log(orders2);

// sooolveeedd