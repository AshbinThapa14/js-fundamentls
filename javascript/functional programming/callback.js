//callback functions
// callback function is a function that is passed into another fucntion as an argument 

//in javascript functions are objects,functions can be passed as arguments


// function printFirstName( firstname,cb){
//     console.log(firstname)
//     cb("thapa")
// }
// printFirstName("ashbin",PrintLastName)


// function PrintLastName(lastname){
//     console.log(lastname)
// }

const IsEven=(n)=>{
    return n%2==0
}

let PrintResult=(evenfn,num)=>{
    const isNumEven= evenfn(num)
    console.log(`the nubmer ${num} is an even number ${isNumEven}`)
}

PrintResult(IsEven,45)


//if you want to pass the function as a argument then the
//


