// // // // 
// // // let grandFather={name1:"a",age:78}
// // // let father={name:"vinod",address:"g"}
// // // let son = {profe:"student"}
// // // Object.setPrototypeOf(grandFather,father)
// // // console.log(son.name)
// // // Object.setPrototypeOf(father,son)
// // // console.log(son.age)
// // // console.log(son.__proto__==father)
// // // console.log(son.__proto__.__proto__==grandFather)
// // // console.log(grandFather.__proto__==father)
// // // var x = 'John'
// // // var y = new String('John')
// // // console.log(x.__proto__)
// // // let parent={prop1:"v1"}
// // // let child = {prop2:"v2"}
// // // Object.setPrototypeOf(parent,child)
// // // console.log(child.prop1)
// // class Person{
// //     constructor(name) {
// //         this.name=name
// //     }
// // }
// // class Student extends Person {
// //     constructor(name,grade){
// //         super(name)
// //         this.grade=grade
// //     }
// // }
// // let details = new Student("Aswarth","A")
// // console.log(details.name,details.grade)
// // let obj={a:10}
// // console.log(Object.create(obj).hasOwnProperty("a"))
// // console.log(obj.hasOwnProperty("a"))
// function Animal(name,clour){
//     this.name=name
//     this.colour = clour
// }
// Animal.prototype.speak = function(){
//     console.log("hii")
// }
// function Birds(name,clour,canFly){
//     let obj = new Animal(name,clour)
//     obj.canFly=canFly
//     return obj
// }
// let bird=new Birds("picaco","black","true")
// console.log(bird)
class Bank{
    #key
    constructor(name,amount,pin){
        this.name=name 
        this.balance=amount 
        this.#key=pin
    }
}
let user1 = new Bank("a",100,1234)
console.log(user1)