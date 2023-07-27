//imperative and declarative way of writing code

//question
//we will be given a number and we have to chaeck if the square is even or not
//imperative way of writing code
// const a=4
// const aSquare=a*a;
// let isEven;

// if(a*a % 2== 0){
//    isEven=true
// }
// else{
//     isEven=false
// }
// console.log(isEven)

//declaritive way of writing code

const checkForSquare=(x)=>(x*x%2==0 ? true : false)

console.log(checkForSquare(10))