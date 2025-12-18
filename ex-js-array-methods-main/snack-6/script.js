const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.

const zucchineOver15 = zucchine.filter((zuchinis) => zuchinis.length >= 15);

const zucchineUnder15 = zucchine.filter((zuchinis) => zuchinis.length < 15);

console.log(zucchineOver15, zucchineUnder15);

//con for each

const zucchineOver152 = [];

const zucchineUnder152 = [];

zucchine.forEach((zuchinis, i) => {
  if (zuchinis.length >= 15) {
    zucchineOver152.push(zuchinis)
  } else {
    zucchineUnder152.push(zuchinis)
  }
});

console.log(zucchineOver152, zucchineUnder152);

//con for

const zucchineOver153 = [];

const zucchineUnder153 = [];

for (let i = 0; i < zucchine.length; i++) {
  if (zucchine[i].length >= 15) {
    zucchineOver153.push(zucchine[i])
  } else {
    zucchineUnder153.push(zucchine[i])
  }
}

console.log(zucchineOver153, zucchineUnder153);
