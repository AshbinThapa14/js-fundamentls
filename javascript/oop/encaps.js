//encapsulation means to hide the data from the user from outside of the user 

class person{
    constructor(_name,_age){
        let name=_name
        let age=_age

        this.getname=function(){
            return(name)
        }
        this.getage=function(){
            return(age)
        }
        this.setage=function(x){
            name=x
        }
        
    }
}
per1=new person("abi",21)
per1.setage("ashbin")
console.log(per1.getname())
  