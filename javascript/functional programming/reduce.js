//you need the sum of every element in an array

let num=[1,2,34,4,5,66,77]

let sum=0
for(i=0;i<num.length;i++){
    sum=sum+num[i]
}
console.log(sum)


//reduce method


let value1=num.reduce((n,m)=>{    //reduce(accumulator,value)
    let updatedSum=n+m
    return(updatedSum)
},0)   //0 is the initalized value of the n which is the accumulator

console.log(value1)