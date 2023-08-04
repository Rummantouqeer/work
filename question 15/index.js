"use strict";
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
let family = ["mama", "papa", "saqib", "mahrukh"];
console.log("dear", family[0], "please come to dinner tomorrow");
console.log("dear", family[1], "please come to dinner tomorrow");
console.log("dear", family[2], "please come to dinner tomorrow");
console.log("dear", family[3], "please come to dinner tomorrow");
console.log(family[3], "cannot make it");
family.splice(2, 0, "grandma");
console.log("file~family", family);
family.splice(4);
console.log("file~family", family);
console.log("new invitations are");
console.log("dear", family[0], "please come to dinner tomorrow");
console.log("dear", family[1], "please come to dinner tomorrow");
console.log("dear", family[2], "please come to dinner tomorrow");
console.log("dear", family[3], "please come to dinner tomorrow");
