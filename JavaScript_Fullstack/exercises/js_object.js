function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "already read" : "not read yet"}`
    }
};

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const flowersForAlgernon = new Book("Flowers For Algernon", "Daniel Keyes", 311, true)

console.log(theHobbit.info());
console.log(flowersForAlgernon.info());
console.log(theHobbit)