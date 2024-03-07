//no.1
let a = "extravaganza"
console.log(a[8]+a[9]+a[10]+a[11]);

//no.2
let b = "The quick brown fox jumped over the lazy dog"
let c = "the"
let d = "brown"
console.log((b.match(/the/)).length);
console.log((b.match(/brown/)).length);

//no.4
let e = "the pupils are reading in the library"
let f ="are"
let g = "the child was sitting on the table before it fell off"
let h ="sitting"
console.log(e.includes(f));
console.log(g.includes(h));

//no.3

let originString = "The quick fox jumped over the lazy dog";
let StringToAdd = "eat"
let indexPosition = 4;
newString = originString.slice(0,indexPosition)+ StringToAdd + originString.slice(indexPosition);
console.log(newString);

//no.5
let i = "wonderful"
let uppercase = i.toUpperCase();
console.log(uppercase);

let j = "amazing"
let lowercase = j.toLowerCase();
console.log(lowercase);

let k = "underneath"
let Lowercase = k .toLowerCase();
console.log(Lowercase);

const title = "A wonderful world"
let titleCase = "";
title.split(" ").forEach(word => {
    const capitalizeWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    titleCase += capitalizeWord + " ";

});
    console.log(titleCase);
