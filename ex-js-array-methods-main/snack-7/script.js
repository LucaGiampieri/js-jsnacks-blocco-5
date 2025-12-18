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

// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }

const studentId2 = students.find((student) => student.id === 2);

console.log(studentId2);

//con for each

let studentId22 = {};

students.forEach((student, i) =>{
  if (student.id === 2){
    studentId22 = student
  }
});

console.log(studentId22);

//con for

let studentId23 = {};

for (let i = 0; i < students.length; i++){
  if(students[i].id === 2){
    studentId23 = students[i]
  }
}

console.log(studentId23);