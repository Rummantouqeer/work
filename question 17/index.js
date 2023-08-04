"use strict";
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
/* Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message
 to that person letting them know you’re sorry you can’t invite them to dinner.*/
//
// Print a message to each of the two people still on your list, letting them know they’re still invited.
/* Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of
 your program.*/
console.log("i just found a bigger table");
let list = ["mama", "papa", "saqib", "grandma", "grandpa", "aunt", "uncle"];
console.log("dear", list[0], "please come to dinner tomorrow");
console.log("dear", list[1], "please come to dinner tomorrow");
console.log("dear", list[2], "please come to dinner tomorrow");
console.log("dear", list[3], "please come to dinner tomorrow");
console.log("dear", list[4], "please come to dinner tomorrow");
console.log("dear", list[5], "please come to dinner tomorrow");
console.log("dear", list[6], "please come to dinner tomorrow");
console.log("unfortunately,i can invite only two people for dinner");
const Removelist = list.pop();
console.log(Removelist);
console.log("i'm sorry!,i can't invite you to dinner");
console.log("file~list", list);
const delList = list.pop();
console.log("i'm sorry!,i can't invite you to dinner");
console.log(delList);
console.log("file~List", list);
const newList = list.pop();
console.log("i'm sorry!,i can't invite you to dinner");
console.log(newList);
console.log("file~List", list);
const theList = list.pop();
console.log("i'm sorry!,i can't invite you to dinner");
console.log(theList);
console.log("file~List", list);
const finalList = list.pop();
console.log("i'm sorry!,i can't invite you to dinner");
console.log(finalList);
console.log("file~List", list);
console.log("dear", list[0], "you are still invited to the dinner");
console.log("dear", list[1], "you are still invited to the dinner");
list.splice(0.0);
console.log("file~List", list);
list.splice(2);
console.log("file~List", list);
