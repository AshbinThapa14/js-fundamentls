//in js objects are in key value pair
var person={
    fname:"ashbin",
    lname:"thapa",
    age:20,
    ownscar:true
}

console.log(person)

//dot notaion

let x=person.fname
console.log(x)
//bracket notaion

let c=person['fname']
console.log(c)


var cap={
    firstname:'steve',
    lastname:'rogers',
    age:102,
    friends:['buckeybarns','bruce banner','tony stark'],
    address:{
        state:"new york",
        city:{
            name:"broollyn",
            pincode:4455
        }
    }

}

console.log(cap.friends)

x=cap.address.city.name

console.log(x)
cap.address.city.name="manhatten"
console.log(cap.address.city.name)
delete cap.friends
console.log(cap)

