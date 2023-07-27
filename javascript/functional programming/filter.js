//filter ruturns a neew array it will return all those elements that matcjes the specific conditon 


//you have to check for even number in an array and put them in a separate array



// const transactions=[1000,3000,4000,2000,-898,3800,-4500]

// let value=transactions.filter()


let num=[1,2,3,4,5,6,44,7,8,9,10,11,12]

let eveNumber=num.filter(function(n){
    return(n%2==0)
})

console.log(eveNumber)



//without filter
let newarr=[]

for(i=0;i<num.length;i++){
    if(num[i]%2==0){
        newarr.push(num[i])

    }
}

console.log(newarr)