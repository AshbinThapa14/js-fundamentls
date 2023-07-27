//this keyword refers to an object that is executing the current piece of code.
//it referecnces the object that is executing the current function .if the function
//being referenced is a regrular function this regerences the global object.
//if the function that is being referenced is a method in an object,
//"this " references the object itself. its the most widely used keyword
// console.log(this)

// function diaplaythis(){
//     console.log(this)
// }
// diaplaythis()

let obj={
    name: "ashbin",
    age:21,
    myfun:function(){
        function myfn3(){
        console.log(this.age)
        }
        myfn3()
    }
}
obj.myfun()







