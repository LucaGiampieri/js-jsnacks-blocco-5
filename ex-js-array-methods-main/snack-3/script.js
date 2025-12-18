const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

const numbersPlusOne = numbers.map((number) => {
    return number + 1
});

console.log(numbersPlusOne);

//con for each

const numbersPlusOne2 = [];

numbers.forEach((number, i) => {
    numbersPlusOne2.push(number + 1)
});

console.log(numbersPlusOne2);

//con for

const numbersPlusOne3 = [];

for (let i = 0; i < numbers.length; i++) {
    numbersPlusOne3.push(numbers[i] + 1)
};

console.log(numbersPlusOne3);