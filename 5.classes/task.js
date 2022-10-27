// Задачи № 1, 2

class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
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
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
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
        let book = this.books.find(book => book[type] === value);
        return book || null;
    }

    giveBookByName(bookName) {
        let index = this.books.findIndex(book => book.name === bookName);
        if (index !== -1) {
            let book = this.books[index];
            this.books.splice(index, 1);
            return book;
        } 
        return null;
    }  
}


//Задача № 3

class Student {
    constructor (name) {
        this.name = name;
        this.subjects = {};
    }

    addMark (mark, subject) {
        if (mark > 5 || mark < 1) {
            console.log('Ошибка, оценка должна быть числом от 1 до 5');
            return;
        }
        if (this.subjects[subject] === undefined) {
            this.subjects[subject] = [mark];
        } else {
            this.subjects[subject].push(mark);
        }
    }

    getAverageBySubject (subject) {
        if (!this.subjects.hasOwnProperty(subject)) {
            console.log('Такого предмета не существует');
            return;
        }
        
        let sum =  this.subjects[subject].reduce((acc, mark) => acc + mark, 0);
        return sum / this.subjects[subject].length;
    }

    getAverage () {
        let summ = 0;
        for (let subject in this.subjects) {
            let subjectSum = this.getAverageBySubject(subject);
            summ += subjectSum;
        }
        return summ / Object.keys(this.subjects).length;
    }

    exclude (reason) {
        this.exclude = reason;
    }
}