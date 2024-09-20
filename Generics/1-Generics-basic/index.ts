//-------------
// Generics 101
//-------------

function logAndReturnString(val: string): string {
  console.log(val);
  return val;
}

function logAndReturnNumber(val: number): number {
  console.log(val);
  return val;
}

function logAndReturnBoolean(val: boolean): boolean {
  console.log(val);
  return val;
}

function logAndReturnValue<T>(val: T): T {
  console.log(val);
  return val;
}

const resultOne = logAndReturnValue<string>("mario");
const resultTow = logAndReturnValue<number>(99);

// example 2

function getRandomArrayValue<T>(values: T[]): T {
  const i = Math.floor(Math.random() * values.length);

  return values[i];
}

interface User {
  name: string;
  score: number;
}

const users: User[] = [
  { name: "mario", score: 100 },
  { name: "peach", score: 150 },
  { name: "yoshi", score: 56 },
  { name: "wario", score: 29 },
];

const randomeUser = getRandomArrayValue<User>(users);

console.log(randomeUser);
