

createInventoryItem = function(name,category,price){
    let obj={}
    obj.name=name 
    obj.category=category
    obj.price=price 
    obj.describeItem = function(){
        let ans = `Item: ${this.name}, Category: ${this.category}, Price: ${this.price}`
        console.log(ans)
    }
    return obj
}
addItemDiscount = function(obj,discountPercent){
    // console.log(obj.name)
    let discountedPrice = obj.price - (obj.price*(discountPercent/100))
    return {
        applyDiscount : function(){
            console.log("Discounted Price for",obj.name,":",discountedPrice)
            // console.log(result)
        }
    }
}



// Define createInventoryItem to take name, category, and price.
// Add a method describeItem() to createInventoryItem to print the item's details.
// Define addItemDiscount, which accepts an inventoryItem object and discountPercent.
// Calculate discountedPrice based on the original price and discountPercent.
// Add a method applyDiscount() to addItemDiscount that logs the discountedPrice for the item.


const item = createInventoryItem("Laptop", "Electronics", 1500);
// console.log(item)
item.describeItem();
// Output: Item: Laptop, Category: Electronics, Price: 1500

const discountedItem = addItemDiscount(item, 10);
discountedItem.applyDiscount();
// // Output: Discounted Price for Laptop: 1350
