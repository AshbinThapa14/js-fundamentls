//higher order funciton are function that operate on other functions either by taking them as arguments or by returning them 
//it recieves the function as an argument or returns the functionn as output

// let arr=[1,2,3,4,4,5]
// let SquareArr=[]

// for(i=0;i<arr.length;i++){
//     SquareArr.push(arr[i]**2)
// }
// console.log(SquareArr)

//map 

//map woll loop through wvery wlwmnt of your array and will perform specific opereations that you have provided 

//map method will always return you a new array with your results

// const num=[1,2,3,4,5,6]

// const numSq=num.map(function(n){
//     return n*n
// })
// console.log(numSq)


const transactions =[1000,3000,4000,2000,-898,3800,-4500];

const intoDollar=80;

let transactionsD=transactions.map((n)=>{
    return (n/intoDollar).toFixed(0)
})

console.log(transactionsD)





