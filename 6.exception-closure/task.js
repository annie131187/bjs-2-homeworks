// Задача №1 

function parseCount (value) {
    if (!Number(value)) {
        throw new Error('Невалидное значение');
    }
    return Number.parseInt(value);
}

function validateCount (value) {
    try {
        return parseCount(value);
    }
    catch (error) {
        return error;
    }
}

//------------------------------------------------------
// Задача №2

class Triangle {
    constructor (a, b, c) {
        if ((a + b) > c && (a + c) > b && (b + c) > a) {
            this.a = a;
            this.b = b;
            this.c = c;
        } else {
            throw new Error ('Треугольник с такими сторонами не сущетсвует!');
        }
    }

    getPerimeter () {
        return Object.values(this).reduce((acc, value) => acc + value, 0);
    }

    getArea () {
        let p = this.getPerimeter() / 2;
        let square = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
        return square;
    }
}

function getTriangle (a, b, c) {
    try {
        return new Triangle(a, b, c);
    }
    catch (error) {
        return error;
    }
}


