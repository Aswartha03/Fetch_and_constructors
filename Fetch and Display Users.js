fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=>res.json())
.then((res)=>
      res.forEach((ele)=>console.log(ele.name))
)