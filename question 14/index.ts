/*changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a 
new set of invitations. You’ll have to think of someone else to invite.*/



  let GuestArray = ["mama","papa","saqib","mahrukh"];

  console.log("dear",GuestArray[0],"please come to dinner tomorrow")
  console.log("dear",GuestArray[1],"please come to dinner tomorrow")
  console.log("dear",GuestArray[2],"please come to dinner tomorrow")
  console.log("dear",GuestArray[3],"please come to dinner tomorrow")
  
console.log("pop method");
const removeGuest = GuestArray.pop();
console.log(removeGuest);
console.log("Array length",GuestArray.length);

console.log("push method");
const ArrayLength = GuestArray.push("grandma");
console.log(GuestArray.push("Grandma"));
console.log("Array length",GuestArray.length);
