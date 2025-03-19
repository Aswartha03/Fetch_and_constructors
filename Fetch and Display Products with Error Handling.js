async function getData(){
    try{
    let myFetch = await fetch("https://fakestoreapi.com/products")
    let ans = await myFetch.json()// converts readablestream into Js objects
    let finalResult=[]
    ans.forEach((ele)=>{
        let result = [ele.title,ele.price,ele.image]
        finalResult.push(result)
    })
    console.log(finalResult)
    let TotalPrice = ans.reduce((a,b)=>a+b.price,0)//here reduce method returns total price implicitly
    TotalPrice = TotalPrice.toFixed(2)
    console.log("Total Price of the products is:",TotalPrice,"rupees")
    }
    catch(err){//if input url is wrong then error occurs
         console.log("Failed to fetch products. Please try again later")
    }
    // finally{
    //     console.log("Executed regardless of error or not")
    // }
    
}
getData()