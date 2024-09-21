// ------------------
// sets in typescript
// ------------------
var names = new Set();
names.add("mario");
names.add("peach");
names.add("luigi");
names.add("khalid");
console.log(names);
var user1 = { email: "mario@gmail.com", score: 10 };
var user2 = { email: "peach@gmail.com", score: 39 };
var users = new Set();
users.add(user1);
users.add(user2);
users.add(user1);
console.log(user1);
// --------------------------
// sets as function arguments
// --------------------------
function logUserEmails(users) {
    users.forEach(function (user) { return console.log(user.email); });
}
logUserEmails(users);
