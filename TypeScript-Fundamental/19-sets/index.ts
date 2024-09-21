// ------------------
// sets in typescript
// ------------------

const names = new Set<string>();

names.add("mario");
names.add("peach");
names.add("luigi");
names.add("khalid");

console.log(names);

// ----------------------
// sets with custom types
// ----------------------

interface User {
  email: string;
  score: number;
}

const user1: User = { email: "mario@gmail.com", score: 10 };
const user2: User = { email: "peach@gmail.com", score: 39 };

const users = new Set<User>();

users.add(user1);
users.add(user2);
users.add(user1);

console.log(user1);

// --------------------------
// sets as function arguments
// --------------------------

function logUserEmails(users: Set<User>): void {
  users.forEach((user) => console.log(user.email));
}

logUserEmails(users);
