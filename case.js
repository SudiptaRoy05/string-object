const school = "sudipta roy ballave";
console.log(school);
console.log(school.toUpperCase());

const subject = "Physics";
const book = "physics";

if (subject.toLowerCase() === book.toLowerCase()) {
  console.log("Porbo");
} else {
  console.log("Varmeja");
}

const dring = "water";
const liquid = "  water";

if (dring.trim(" ") === liquid.trim(" ")) {
  console.log("pani pani");
} else {
  console.log("huhhhu");
}
