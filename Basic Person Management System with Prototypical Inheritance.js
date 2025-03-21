function Person(name,age){
    this.name=name 
    this.age=age
}
Person.prototype.introduce = function(){
    console.log(`Hi, my name is [${this.name}] and i am [${this.age}] years old.`)
}
function Employee(name,age,jobTitle){
    Person.apply(this,[name,age])
    // let obg =  Object.create(Person)
    this.jobTitle = jobTitle
}
Employee.prototype = Object.create(Person.prototype)
Employee.prototype.work = function(){
    console.log(`[${this.name}] is working as a [${this.jobTitle}]`)
}
let person1 = new Person("Aswarth",20)
let Employee1 = new Employee("Chiru",19,"Banglore")
console.log(person1)
console.log(Employee1)
person1.introduce()
Employee1.introduce()
Employee1.work()
