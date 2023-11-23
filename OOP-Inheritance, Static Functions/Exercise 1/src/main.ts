import Book from "./book.js";


const book1 = new Book("Harray Poter", "Oran",1999, 50);
book1.display();
console.log("Price With Vat: " + book1.getVatPrice().toFixed(2));

console.log("----------------------------");

const book2 = new Book("The Hobbit", "Eli",2005, 75);
book2.display();
console.log("Price With Vat: " + book2.getVatPrice().toFixed(2));

console.log("----------------------------");

const book3 = new Book("Nerd Dairy", "Rli",2000, 35);
book3.display();
console.log("Price With Vat: " + book3.getVatPrice().toFixed(2));

