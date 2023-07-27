//destructring an object

let myObj={
    name:"adam",
    age:25,
    address:{
        post:2245,
        country:"nepal",
        city:"lalitpur"
    },
    gender:"m"
}

// console.log(myObj.name)
let{name:a,age,gender,address:{country}}=myObj

console.log(gender)
console.log(a)
// console.log(name)
console.log(country)

