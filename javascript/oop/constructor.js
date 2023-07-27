// let car1={
//     name:"a",
//     company:"1"
// }
// let car2={
//     name:"b",
//     company:"2"
// }


//constructor function works as a template for the objects that  are repetative

function createcar(_name,_company,_color){
    this.name=_name
    this.company=_company
    this.color=_color
    
    this.drive=function(){
        console.log(`i am driving ${this.name} from the company ${this.company}`)
    }

}

let car1= new createcar("a14","bmw","red")

console.log(car1)

car1.drive()







