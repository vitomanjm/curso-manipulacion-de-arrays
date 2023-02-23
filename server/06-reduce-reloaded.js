const items = [1, 3, 2, 3, 4, 3, 5, 3, 1, 2, 2];


// logica de un histograma 
const rta = items.reduce((obj, item) =>
{

    if(!obj[item]) {
        obj[item] = 1;
    }
    else {
        obj[item] = obj[item] + 1;
    }
    return obj;
},
{});

console.log(rta);



/////////////////////////////////

const data = [

    {
        name: "Nicolas",
        level: "low",
    },
    {
        name: "Andrea",
        level: "medium",
    },
    {
        name:"Zulema",
        level: "hight"
    },
    {
        name: "Santiago",
        level: "low",
    },
    {
        name: "Valentina",
        level: "medium",
    },
    {
        name: "Lucia",
        level: "hight",
    }
];

const anws = data.map(item => item.level).reduce((obj, item) =>
{

    if(!obj[item]) {
        obj[item] = 1;
    }
    else {
        obj[item] = obj[item] + 1;
    }
    return obj;
},
{});

console.log(anws);

//////////////////////

//ejercicio video 11 curso platzi, reduce reload, 
// crear un histograma de numeros categorizados por rangos

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const between = (x, min, max) => x >= min && x <= max;

const exercise = array.reduce((obj, item) =>
{

    if(between(item, 1, 5)) obj["1-5"] += 1; 
    if(between(item, 6, 8)) obj["6-8"] += 1; 
    if(between(item, 9, 11)) obj["9-11"] += 1; 
    

    return obj;
},
{
'1-5': 0,
'6-8': 0,
'9-11': 0
});

console.log(exercise);

// reto

const arr = [3, 10, 9, 4, 3, 1, 8, 4, 7, 6];
const result = arr.reduce((obj, item) => {
if (item <= 5) {
    obj['1-5']++
} else if (item <= 8) {
    obj['6-8']++
} else {
    obj['9-10']++
}
return obj
}, {
'1-5': 0,
'6-8': 0,
'9-10': 0
})

console.log(result)