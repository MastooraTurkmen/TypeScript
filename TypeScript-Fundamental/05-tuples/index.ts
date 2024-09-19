// ------
// tuples
// ------

let person: [string, number, boolean] = ["maro", 30, false];

// ---------------
// tuples examples
// ---------------

let hsla: [number, string, string, number];
hsla = [300, "20%", "4.4", 23];

let xy: [number, number];
xy = [22.2, 3.3];

function useCoords(): [number, number] {
  // get coords
  const lat = 23;
  const lang = 32;
  return [lat, lang];
}

const [lat, lang] = useCoords();

// ------------
// named tuples
// ------------

let user: [name: string, age: number];
user = ["mastoora", 23];
console.log(user[0]);
