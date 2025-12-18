const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

//metodo 1

let marcoLanciClass;

const marcoLanci = students.find((student) =>{
  if(student.name === 'Marco Lanci'){
    marcoLanciClass = student.class 
  }
  return marcoLanciClass 
});

console.log(marcoLanciClass);

//meteodo 2

const marcoLanciClass2 = students.find((student) =>{
  if(student.name === 'Marco Lanci'){
    return student
  }
});

console.log(marcoLanciClass2.class);

//metodo 3

const marcoLanci3 = students.find((student) =>{
  if(student.name === 'Marco Lanci'){
    return student
  }
});
 
const marcoLanciClass3 = marcoLanci3.class;

console.log(marcoLanciClass3);