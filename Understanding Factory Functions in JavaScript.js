createEmployee = function(name,role,salary)
{
   let object = {}
   object.name=name 
   object.role=role 
   object.salary =salary 
   object.introduce = function(){
    let ans =`Hello, I am ${this.name}, working as a ${this.role}`
    console.log(ans)
   }
   return object
}
const employee1 = createEmployee("Alice", "Developer", 60000);
console.log(employee1)
employee1.introduce();
// Output: Hello, I am Alice, working as a Developer.
