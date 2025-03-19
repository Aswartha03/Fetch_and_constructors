Book = function(name,author){
    let obj={}
    obj.name=name 
    obj.author = author 
    return obj
}

createLibrary = function(){
    let BookArray=[]
    return {
        addBook : function(book){
            BookArray.push(book)
        },
        removeBook : function(bookname){
            let newarr=[]
            for(let ele of BookArray){
                if(ele.name!=bookname){
                    newarr.push(ele)
                }
            }
            if(newarr.length==BookArray.length){
                console.log("Book is not found to remove")
            }
            else{
                BookArray = newarr
            }
        },
        listBooks:function(){
            BookArray.forEach((ele)=>{
                let ans = `Title: ${ele.name}, Author: ${ele.author}`
                console.log(ans)
            })
        }

    }
}
const library = createLibrary();

const book1 = Book("To Kill a Mockingbird", "Harper Lee");
const book2 = Book("1984", "George Orwell");

library.addBook(book1);
library.addBook(book2);

library.listBooks();
// Output:
// Title: To Kill a Mockingbird, Author: Harper Lee
// Title: 1984, Author: George Orwell

library.removeBook("1984");

library.listBooks();
// Output:
// Title: To Kill a Mockingbird, Author: Harper Lee

