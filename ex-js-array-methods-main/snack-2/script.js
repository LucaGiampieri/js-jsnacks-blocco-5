const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

const peopleNames = people.map((person) => {
  return person.name
});

console.log(peopleNames);

//con ciclo for each

const peopleNames2 = [];

people.forEach((person,i) => {
    peopleNames2.push(person.name);
});

console.log(peopleNames2);

//con ciclo for

const peopleNames3 = [];

for (let i = 0; i < people.length; i++){
  peopleNames3.push(people[i].name)
}

console.log(peopleNames3);