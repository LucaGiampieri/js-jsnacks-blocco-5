const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Crea un nuovo array coi nomi di tutti gli autori
// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']

const authorsNames = posts.map((post) => post.author);

console.log(authorsNames);

//con for each

const authorsNames2 = [];

posts.forEach((post,i) =>{
  authorsNames2.push(post.author)
});

console.log(authorsNames2);

//con for

const authorsNames3 = [];

for (let i = 0; i < posts.length; i++){
  authorsNames3.push(posts[i].author)
};

console.log(authorsNames3);