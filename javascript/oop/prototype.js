//js objects has the special feature which can be null or have values and references another object




let obj={
    name:"ashbin",
    getName:function(){
        return this.name;
    },
    getRoll:function(){
        return this.roll
    }

}

// console.log(obj)
let obj2={
    roll:1,
    name:"abi",
    __proto__:obj  //USE THE __PROTO__ TO POINT INTO THE LAST OBJECT TO INHERITE THE PROP FORM THE FIRST OBJ
}
// console.log(obj2.getName())
console.log(obj2.getRoll())


// CREATING OUR OWN PROTOTYPE

array=["ashbin","thapa","chhetri"];

Array.prototype.prints=function(){
    return this
}

name=["abi"]
console.log(name.prints())

a=["ashbin","thapa","chhetri"]
// Array.prototype.convertintoObjects=function(a){
//    let newobject={}
//    for(i=0;i<=a.length();i++){
//     newobject[i]=a[i];

//    }
//    return newobject

// }

Array.prototype.convertintoObjects=function(){
    let newobject={}
    this.forEach(element=>{
        newobject[element]=element;
    })
    return newobject;

}
console.log(a.convertintoObjects())

// console.log(obj)


// let ashbin1={
//     name:"ashbinthapa",
//     age:21
// }
// //console.log(ashbin1)

// //looking at the console we seee it has many prototypes

// console.log(ashbin1.hasOwnProperty("name"))  //should give the output ture cause it has the key as "name"


// //constructor function 

// function constructor(_name,_age) {
//     this.name=_name
//     this.age=_age
    
// }

// let constructor2=new constructor("ashbin",21)

// console.log(constructor2)





