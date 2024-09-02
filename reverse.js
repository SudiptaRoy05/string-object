const name = "Sudipta";
console.log();


let reverse = " ";
const sentence = "i am learning web development";
for (const value of sentence) {
    reverse = value + reverse;    
}

console.log(reverse);

let rev = ""
for(let i=0 ; i<sentence.length ; i++){
    console.log(sentence[i]);
    const letter = sentence[i]
    rev = letter+rev;
}
console.log(rev);


const reversed = sentence.split('').reverse().join();
console.log(reversed);