//This Codes covers ther 5.9 in the documentation javascript. Topic numbeinfo
class Book{
    constructor(title,author,serial){
        this.title = title;
        this.author = author;
        this.serial = serial;
    }
}

let BookVal = new Book("Hasib","paulo Colehno ", "245");
console.log(BookVal);
BookObj= JSON.stringify(BookVal);
console.log(BookObj); //Converts the whole value to string 
console.log(JSON.parse(BookObj));