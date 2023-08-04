"use strict";
// Task 42:Unchanged Magician
function showMagicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function makeGreat(magicians) {
    let greatMagicians = [];
    for (let magician of magicians) {
        greatMagicians.push(`${magician} the Great`);
    }
    return greatMagicians;
}
let magicians = ['David Copperfield', 'Harry Houdini', 'Penn & Teller'];
let greatMagicians = makeGreat(magicians);
console.log('Original magicians:');
showMagicians(magicians);
console.log('Great magicians:');
showMagicians(greatMagicians);
