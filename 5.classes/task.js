class PrintEditionItem {
    constructor (name, releaseDate, pageCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pageCount = pageCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(number) {
        if (number < 0) {
            this._state = 0;
        } else if (number > 100) {
            this._state = 100;
        } else {
            this._state = number;
        }
    }
    get state() {
        return this._state;
    }

}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pageCount) {
        super(name, releaseDate, pageCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pageCount) {
        super(name, releaseDate, pageCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pageCount) {
        super(author, name, releaseDate, pageCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pageCount) {
        super(author, name, releaseDate, pageCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pageCount) {
        super(author, name, releaseDate, pageCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }

    addBook(obj) {
        if (obj.state > 30) {
            this.books.push(obj);
        }
    }

    findBookBy(type, value) {
        let result = [];
        for (let i = 0; i < this.books.length; i++) {
            const book = this.books[i];
            if (book[type] === value) {
                result.push(book);
            } 
        }
        if (result === []) {
            result = null;
        }
        return result;
    }

    giveBookByName(bookName) {
        let index = this.books.findIndex(book => book.key === bookName);
        if (index >= 0) {
            this.books.splice(index, 1);
            return this.books[index];
        } else if (index === -1) {
            return null;
        }
    }
        
}