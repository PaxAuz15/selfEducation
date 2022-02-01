/*
    Crea una clase Libro
    La clase libro tendra titulo, autor, anio, genero
    Crea un metodo que devuelva toda la informacion del libro
    Pide 3 libros y guardalos en un array
    Los libros se introducen por un prompt
    Validar que los campos no esten vacios
    Validar que el anio sea un numero real (0-2021)
    Validar que sean generos de aventura, terror o fantasia
    Crea una funcion que muestre todos los libros
    Crea una funcion que muestre los autores ordenados alfabeticamente
    Crea una funcion que pida un genero y muestre la info que tengan ese genero
*/

let dataBookMsg = '';
let arrayGenre = ['aventura', 'terror', 'fantasia'];
let i = 1;
const MSG_INPUT = "Ingrese los datos del libro #";
let books = [];

class Book {
    constructor(title, author, year, genre) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.genre = genre;
    }

    dataBook() {
        dataBookMsg = ` El libro de ${this.genre}, "${this.title}", fue escrito por ${this.author}, en el año ${this.year}`;
    }

    getAuthor(){
        return this.author;
    }

    getGender(){
        return this.genre;
    }
}

while (books.length <3){
    let titleBook = prompt(`${MSG_INPUT}${i} - Nombre`);
    let authorBook = prompt(`${MSG_INPUT}${i} - Autor`);
    let yearBook = prompt(`${MSG_INPUT}${i} - Año`);
    let genreBook = prompt(`${MSG_INPUT}${i} - Genero`).toLowerCase();

    if(titleBook !='' &&
        authorBook !=''&&
        !isNaN(yearBook) &&
        yearBook.trim().length<=4 &&
        genreBook!='' &&
        (genreBook == arrayGenre[0] ||
            genreBook == arrayGenre[1] ||
            genreBook == arrayGenre[2])){
                books.push(new Book(titleBook,authorBook,Number(yearBook),genreBook))
    }
}

const showBooks = ()=>{
    console.log(books);
}

const ShowAuthors = () => {
    let authors = [];

    for (const book of books){
        authors.push(book.getAuthor());
    }
    console.log(authors.sort());
}

const showGender = () => {
    const gender = prompt('Introduce el genero a buscar');

    for (const book of books){
        if (book.getGender() == gender){
            console.log(book.bookInfo())
        }
    }
}

showBooks();
ShowAuthors();
showGender();