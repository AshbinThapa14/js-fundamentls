//classical inheritance
//methods and properties from base class can be put down or can be passed into derived class 

/* parent class{
    properties
}
child1 class{
   properties d form parent class
}
*/

//functions inside the class is called method
//method can also be inherited and it can be done by super.methodname() inside the another method in inherited class

class parent{
    constructor(_lastname,_height){
        this.lastname=_lastname
        this.height=_height
    }

}
class child extends parent{
    constructor(_lastname,_height,_firstname){
        super(_lastname,_height)//to pass the keys which are inherited form the parent class in the super function 
        this.firstname=_firstname
    }
    descreption(){
        console.log(`hey my name is ${this.firstname} ${this.lastname} and my height is ${this.height}`)
    }



}
class neighbour extends parent{

}


let person1=new parent("thapa",175)

console.log(person1)


person1=new child("thapa",175,"ashbin")

person1.descreption()

