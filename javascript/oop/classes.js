//classes are created over the constructor function 

class person{
    constructor(_name,_age,_class){
        this.name=_name
        this.age=_age
        this.class=_class

    }
    welcome(){
        console.log(`hello! ${this.name} into the class ${this.class}`)
    }
        
    
}

let person1= new person("adam",19,"4th sem")


console.log(person1)

person1.welcome()
