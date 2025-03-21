function Animal(type){
    this.type=type||"Animal"
}
Animal.prototype.sound = function(){
    console.log(`${this.type} sound`)
}
function Dog(){
    Animal.call(this,"Dog")
    let obj = Object.create(Animal.prototype)
}
// Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.sound = function(){
    console.log("Bark")
}
let myDog = new Dog()
// console.log(myDog)
// console.log(myDog.type)
myDog.sound()
let n = new Animal("Animal")
// console.log(n)
n.sound()