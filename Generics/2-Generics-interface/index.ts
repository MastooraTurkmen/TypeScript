//-------------------
// Generics interface
//-------------------

interface Collection<T> {
  data: T[];
  name: string;
}

const collectionOne: Collection<string> = {
  data: ["mario", "luigi", "peach"],
  name: "mario characters",
};

const collectionTwo: Collection<number> = {
  data: [10, 15, 27, 9, 3, 34],
  name: "winning lottery numbers",
};

function randomCollectItem<T>(c: Collection<T>): T {
  const i = Math.floor(Math.random() * c.data.length);
  return c.data[i];
}

const resultOne = randomCollectItem<string>(collectionOne);
const resultTwo = randomCollectItem(collectionTwo);

console.log(resultOne, resultTwo);
