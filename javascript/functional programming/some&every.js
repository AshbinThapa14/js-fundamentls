//some method
//condtion check : to get true or false based on a conditon
//it will return true if even 1 element satisfies the condition 


const transactions=[-1000,-3000,-4000,-2000,-898,-3800,-4500]

let value=transactions.some(function(n){
    return n<0
})

console.log(value)

//every
//every element should satisfies the condition 

let value2=transactions.every((n=>{
    return n<0
}))

console.log(value2)





