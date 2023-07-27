//chaining in js

let arr=[
    {name:"a",age:12,gender:"m"},
    {name:"b",age:13,gender:"f"},
    {name:"c",age:12,gender:"m"},
    {name:"d",age:14,gender:"f"}
]
let males=arr.filter((n)=>{
    return(n.gender=="m")
}).map((mal)=>{
    return(mal.age)
})
// let ageOfmales=males.map((males)=>{
//     return(males.age)
// })
console.log(males)
// console.log(ageOfmales)



const transactions =[1000,3000,4000,2000,-898,3800,-4500];

let transactions1=transactions.filter((m)=>{
    return(m>0)
}).reduce((i,j)=>{
    updatedvalue=i+j
    return(updatedvalue)
},0)

console.log(transactions1)