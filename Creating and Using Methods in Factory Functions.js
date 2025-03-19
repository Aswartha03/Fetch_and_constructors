createCar = (make,model,year)=>{
    let obj={}
    obj.make=make 
    obj.model=model 
    obj.year=year 
    obj.describeCar = function(){
        let ans= `This car is a ${this.year} ${this.make} ${this.model}`
        console.log(ans)
    }
    return obj
}
const car = createCar("Toyota", "Camry", 2022);
console.log(car)
car.describeCar();
// Output: This car is a 2022 Toyota Camry.
