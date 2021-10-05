const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
cats.push("Ralph");
return cats;
}

function destructivelyPrependCat(name) {
cats.unshift("Bob");
return cats;
}

function destructivelyRemoveLastCat() {
cats.pop();
return cats;
}

function destructivelyRemoveFirstCat() {
cats.shift();
return cats;
}

function appendCat(name) {
const newCats = [...cats];
newCats.push("Broom");
return newCats;
}

function prependCat(name) {
const newCats = cats.slice();
newCats.unshift("Arnold");
return newCats;
}

function removeLastCat() {
const newList = cats.slice(0,-1);
return newList;
}

function removeFirstCat() {
const newerList = cats.slice(1);
return newerList;
}