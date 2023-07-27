//find returns the first element of an array that satisfy the conditon

const transactions=[1000,3000,4000,2000,-898,3800,-4500]

let firswithdrawl=transactions.find((n)=>{
    return n<0
})

console.log(firswithdrawl)

//find index 

let firstdeposit=transactions.findIndex((n)=>{
    return n<0
})
console.log("index=",firstdeposit)


