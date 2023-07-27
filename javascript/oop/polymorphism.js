/* polymorphism refers to the multiple forms
poly ==> many
morphism ==> forms

Polymorphism means the same function with different signatures is called many times.
 In real life, for example, a boy at the same time may be a student, a class monitor, etc. 
So a boy can perform different operations at the same time. This is called polymorphism. 


<<<Features of Polymorphism:>>
Programmers can use the same method name repeatedly.
Polymorphism has the effect of reducing the number of functionalities that can be paired together.
*/
//program 

class Animal{
    sound(){
        console.log("animals makes different sound")
    }
}
class dog{
    sound(){
        console.log("woof woof")
    }
}
class cat{
    sound(){
        console.log("meow meow")
    }
}
let anim1 = new Animal()

anim1.sound()

let tom=new dog

tom.sound()

let  buff = new cat()
buff.sound()






