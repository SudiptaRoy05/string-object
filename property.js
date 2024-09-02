const person = {
    name: "Sudipta",
    age: 25,
    profession: "developer",
    salary: 48000,
    married: false
}
console.log(person);
console.log(person.profession);

const income = person.salary;
console.log(income);

console.log(person["age"]);

const boyos = person["age"];
console.log(boyos);