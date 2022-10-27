function parseCount (value) {
    let result = Number.parseInt(value);
    if (result === NaN) {
        throw new Error('Невалидное значение');
    }
    return result;
}

function validateCount (value) {
    try {
    return parseCount(value);
    }
    catch (error) {
        return error;
    }
}


class Triangle {
    constructor (a, b, c) {
        this.a = a;
        this.b = b; 
        this.c = c;
    }

    getPerimeter () {
        
    }
}

let first = new Triangle(10, 10, 20);
console.log(first);
console.log(first.getPerimeter());


