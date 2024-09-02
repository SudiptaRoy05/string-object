const mobile ={
    name: "samsung",
    mode: "s9",
    price: 98765,
    color: "gray",
    camera: "16MP",
    isNew: true,
}

for (const prop in mobile) {
    console.log(prop);
    console.log(mobile[prop]);
}


const keys = Object.keys(mobile);
console.log(keys)
for (const value of keys) {
    console.log(value,":", mobile[value]);
}