
//original code
// function createBook(title, author) {
//     return {
//       title: title,
//       author: author,
//       printInfo: () =>{
//         console.log("Book: " + this.title + ", Author: " + this.author);
//       }
//     };
//   }
  
//   const book = createBook("1984", "George Orwell");
// book.printInfo();
// Output: Book: undefined, Author: undefined
// the reason why we didn't get our required output is:
// we are using arrow function for object methods .
// But for object methods we can't able to use arrow function as methods 
// Because arrow functions don't have accces to this keyword.

// Solution:
// to resolve that issue 
// we use regular function 


//Correct code / Debug Code
function createBook(title, author) {
    return {
      title: title,
      author: author,
      printInfo: function(){//using regular function instead arrow function
        console.log("Book: " + this.title + ", Author: " + this.author);
      }
    };
  }
  
  const book = createBook("1984", "George Orwell");
book.printInfo();
// Output:Book: 1984, Author: George Orwell
