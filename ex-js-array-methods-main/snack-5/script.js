const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

const numsEven = nums.filter((num) => num % 2 === 0 ? true : false); 

console.log(numsEven);

//con for each

const numsEven2 = [];

nums.forEach((num, i) =>{
    if (num % 2 === 0){
        numsEven2.push(num)
    }
});

console.log(numsEven2);

//con for

const numsEven3 = [];

for (i = 0; i < nums.length; i++){
     if (nums[i] % 2 === 0){
        numsEven3.push(nums[i])
    }
}

console.log(numsEven3);