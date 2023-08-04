"use strict";
//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique..........
let currentUsers = ['alice', 'pheobe', 'jack', 'doe', 'charles'];
let newUsers = ['kiran', 'charles', 'franklin', 'doe', 'oms'];
for (let newUser of newUsers) {
    if ((currentUsers).includes(newUser)) {
        console.log(`the username $() is already taken.Pleas enter a new username`);
    }
    else {
        console.log("username is available");
    }
}
