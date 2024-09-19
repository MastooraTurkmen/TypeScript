// ---------
// Functions
// ---------

function addTwoNumbers(a: number, b: number): number {
  return a + b;
}

const substractTwoNumbers = (a: number, b: number): number => {
  return a - b;
};

addTwoNumbers(2, 2);
substractTwoNumbers(9, 3);

function addAllNumbers(items: number[]): void {
  const total = items.reduce((a, c) => a + c, 0);
  console.log(total);
}

addAllNumbers([3, 4, 2, 55, 10]);

// ---------------------
// return type inference
// ---------------------

function formatGreeting(name: string, greeting: string): string {
  return `${greeting}, ${name}`;
}

const result = formatGreeting("maro", "hello");
