const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

console.log(names);

//con for each

let newList =[];

names.forEach((name,i) => {
    newList.push(name);
});

console.log(newList);

//con for

let newList2 =[];

for (let i = 0; i < names.length; i++){
    newList2.push(names[i])
};

console.log(newList2);
