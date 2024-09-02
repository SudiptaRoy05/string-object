const address = "andorkilla";
const part = address.slice(2, 5);
console.log(part)

const sentence = 'i am a good and hardworking person';
console.log(sentence)
console.log(sentence.split(""));
console.log(sentence.split(" "));
console.log(sentence.split("a"));

const friends = "sudip, adi, nig, tanmay, etc";
const friend = friends.split(",");
console.log(friend);

const realFriends = [ 'sudip', ' adi', ' nig', ' tanmay', ' etc' ];
console.log(realFriends.join("|"));


const firstName = "Adi";
const lastName = "Roy";

console.log(firstName + " " + lastName);