"use strict";
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
let familyy = ["mama", "papa", "saqib", "mahrukh"];
console.log("dear", familyy[0], "please come to dinner tomorrow");
console.log("dear", familyy[1], "please come to dinner tomorrow");
console.log("dear", familyy[2], "please come to dinner tomorrow");
console.log("dear", familyy[3], "please come to dinner tomorrow");
console.log(familyy[3], "cannot make it");
familyy.splice(2, 0, "grandma");
console.log("file~familyy", familyy);
familyy.splice(4);
console.log("file~familyy", familyy);
console.log("new invitations are");
console.log("dear", familyy[0], "please come to dinner tomorrow");
console.log("dear", familyy[1], "please come to dinner tomorrow");
console.log("dear", familyy[2], "please come to dinner tomorrow");
console.log("dear", familyy[3], "please come to dinner tomorrow");
console.log("i just found a bigger table");
let newlist = ["mama", "papa", "saqib", "grandma", "grandpa", "aunt", "uncle"];
console.log("dear", newlist[0], "please come to dinner tomorrow");
console.log("dear", newlist[1], "please come to dinner tomorrow");
console.log("dear", newlist[2], "please come to dinner tomorrow");
console.log("dear", newlist[3], "please come to dinner tomorrow");
console.log("dear", newlist[4], "please come to dinner tomorrow");
console.log("dear", newlist[5], "please come to dinner tomorrow");
console.log("dear", newlist[6], "please come to dinner tomorrow");
