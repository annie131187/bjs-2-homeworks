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
        if (!((a + b) > c && (a + c) > b && (b + c) > a)) {
            throw new Error ("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter () {
        return this.a + this.b + this.c;
    }

    getArea () {
        let p = this.getPerimeter() / 2;
        return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
    }
}

function getTriangle (a, b, c) {
    try {
        return new Triangle(a, b, c);
    }
    catch (error) {
        return {
            getPerimeter: () => "Ошибка! Треугольник не существует",
            getArea: () => "Ошибка! Треугольник не существует",
        };
    }
}

// console.log(new Triangle(100,3,10));
console.log(getTriangle(1,3,100));



