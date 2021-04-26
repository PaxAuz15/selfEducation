let vacio = '';
let generos = ['aventuras', 'terror', 'fantasia'];
let libros = [];
let autores = [];

class Libro {
    constructor(titulo, autor, anio, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.genero = genero;
    };

    datosLibro() {
        dato = `El libro "${this.titulo}", de genero ${this.genero}, fue escrito por ${this.autor} y publicado en el ${this.anio}`
    };
};

for (let i = 0; i < 3; i++) {
    while (true) {
        let titulo = prompt("Ingrese el titulo");
        if (titulo != vacio) {
            title = titulo;
            break;
        }
    }
    while (true) {
        let autor = prompt("Ingrese el autor");
        if (autor != vacio) {
            author = autor;
            break;
        }
    }
    while (true) {
        let anio = prompt("Ingrese el anio");
        if (anio != vacio) {
            anioNumber = Number(anio)
            if (anioNumber >= 1000 && anioNumber <= 9999) {
                break;
            }
        }
    }
    while (true) {
        let valorGenero = Number(prompt("Ingrese el numero del genero: (1)aventuras, (2)terror, (3)fantasia"))
        if (valorGenero <= generos.length) {
            genero = generos[valorGenero-1]
            break
        }
    }

    libros.push(new Libro(title, author, anioNumber, genero))
}

const ShowLibros = () => {
    for (let libro in libros) {
        console.log(libros[libro])
    }
}

const ShowAuthors = () => {
    for (let libro in libros) {
        autores.push(libros[libro].autor);
    }
    console.log(autores.sort())
}

const SearchGenero = () => {
    while (true) {
        consulta = Number(prompt("Ingrese el numero del genero a buscar datos: (1)aventuras, (2)terror, (3)fantasia"));
        if (consulta < generos.length) {
            generoBuscar = generos[consulta-1]
            break
        }
    }
    for (let libro in libros) {
        if (libros[libro].genero == generoBuscar) {
            console.log(libros[libro])
        }
    }

}


