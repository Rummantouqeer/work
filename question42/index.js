"use strict";
// Task 41:Great Magician
function showMagicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function makeGreat(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `${magicians[i]} the Great`;
    }
}
let showmagicians = ['David Copperfield', 'Harry Houdini', 'Penn & Teller'];
makeGreat(magicians);
showMagicians(magicians);
