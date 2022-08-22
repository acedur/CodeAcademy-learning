// 1 . Da se napravi funkcija koja kje presmetuva zbir od elementi vo niza
// da raboti za bilo koja niza

let arr = [3433, 4535, 34532, 1345];

let sum = 0;

for (let value of arr) {
  sum += value;
}

console.log(sum);

// 2 . Da se napravi funkcija koja kje ni dade koi broevi se duplikati vo niza
// da raboti za bilo koja niza

let numbers = [22, 47, 58, 22, 87, 67, 58, 56, 47];

let set = new Set(numbers);

let duplicates = numbers.filter(item => {
    if (set.has(item)) {
        set.delete(item);
    } else {
        return item;
    }
});

console.log(duplicates);

// 3 . Da se podredat po redosled elementite vo nizata
// da raboti za bilo koja niza
// posle toa da se izbrisat duplikatite...

let arry = [34, 67, 78, 34, 87, 67];

let sortedArry = arry.sort(function(a, b){return a-b});

console.log(sortedArry);

let uniqueArry = [];
sortedArry.forEach((element) => {
    if (!uniqueArry.includes(element)) {
        uniqueArry.push(element);
    }
});

console.log(uniqueArry);