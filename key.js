const computer = {
    brand: "asus",
    price: 57000,
    processor: "intel",
    ssd: "240GB",
    hdd: "1TB",
}


const keys = Object.keys(computer);
console.log(keys);

// values 

const value = Object.values(computer);
console.log(value);


// nasted object 

const college ={
    name: "vlc",
    class: ["11", "12"],
    events: ["science fair", "Bijoy Dibos", "21 feb"],
    unique:{
        color: "Blue",
        result:{
            gpa: 5,
            merit: "top",
        }
    }
}

console.log("]]]]]]]]]]]]]]]]]]]]]]]][[[[[[[[[[[[[[[[[[[[[[[[[[")

console.log(college.unique);
console.log(college.unique.color);
console.log(college.unique.result.gpa);

delete college.class;
console.log(college);