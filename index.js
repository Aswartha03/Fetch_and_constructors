// // console.log(2)
// function Animal(name,legs){
//     this.name=name 
//     this.legs=legs
// }
// Animal.prototype.sound = function(){
//     let ans = `${this.name} says hukk hukk !!`
//     console.log(ans) 
// }
// function Bird(name,legs,clour){
//     let obj = new Animal(name,legs)
//     obj.colour = clour
//     return obj
// }
// Bird.prototype.horn = function(){
//     console.log("${this.name} makes sound!!")
// }
// let Bird1 = new Bird("cat",4,"black")
// console.log(Bird1)
// Bird1.sound()
// // Bird1.prototype.horn()
// let Animal1 = new Animal("Dog",4)
// console.log(Animal1)
// Animal1.sound()


class Employee{
    constructor(name,profe,place){
        this.name=name 
        this.salary = Employee.generatePassword() 
        this.place = place
        this.profession = profe
    }
    static generatePassword(){
        let v = Math.floor((Math.random()*100000)+100000) 
        return v
    }
    Info(){
        console.log(`${this.name} lives in ${this.place}.`)
    }
}


class Update extends Employee{
    constructor(name,profe,place,favActor){
        super(name,profe,place)
        this.favActor = favActor
        this.Amount = Update.generateAmount()
    }
    static generateAmount (){
        let v= Math.floor((Math.random()*100000)+100000) 
        return v
    }
    Information(){
        let ans= `${this.name} is a ${this.profession}`
        console.log(ans)
    }
}
// let Employee1 = new Employee("Aswartha","Student","Anantapur")
// console.log(Employee1)
// Employee1.Info()
let Update1 = new Update("Chiru","Student","PKD","AA")
console.log(Update1)
Update1.Info()
Update1.Information()
