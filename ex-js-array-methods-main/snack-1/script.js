const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

console.log(names)

let newList =[];

names.forEach((name,i) => {
    newList.push(name);
});

console.log(newList);

