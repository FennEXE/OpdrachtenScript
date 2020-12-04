/*Opdracht 12 - Javascrip OOP Luuk Nagtegaal 30-11-2020
Eerste opdracht op locatie.

TODO:
- Deel 1
    - 1: Done
    - 2: Done
    - 3: Done
    - 4: Done
    - 5: Done
    - 6: Done
    - 7: Done
    - 8: Done
    - 9: Done
- Deel 2
    - 10: Done
    - 11: Done
    - 12: Done
*/

//Episode II - Part I: Parent Class Inheritance
class Shape {
    constructor(name, color) {
        this._name = name;
        this._color = color;
    }

    get name() {
        return this._name;
    }

    get color() {
        return this._color;
    }
}


//Episode I - Part I: Circles
class Circle extends Shape { 
    constructor(radius, name, color) {
        super(name, color);
        this._radius = radius;
        //this._name = name;
        //this._color = color;
    }

    get radius() {
        return this._radius;
    }

    /* Niet meer nodig, laat het achter als bewijs van deel 1 van opdracht 12
    get name() {
        return this._name
    }
    
    get color() {
        return this._color;
    }
    */

    area() {
        return Math.PI * this._radius ** 2;
    }
}

//Test voor drie cirkels
const blueCircle = new Circle(1.5, 'A small blue circle.', 'blue');
const redCircle = new Circle(1.5, 'A small red circle.', 'red');
const uglyCircle = new Circle(10, 'A big ugly yellow circle.', 'yellow');

console.log("Part I - Circles:");
console.log("Surface areas: \n" + blueCircle.name, blueCircle.area() + "\n" + redCircle.name, redCircle.area() + "\n" + uglyCircle.name, uglyCircle.area() + "\n ");



//Episode I - Part II: Squares
class Square extends Shape {
    constructor(width, height, name, color) {
        super(name, color);
        this._width = width;
        this._height = height;
        //this._name = name;
        //this._color = color;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    /* Niet meer nodig, laat het achter als bewijs van deel 1 van opdracht 12
    get name() {
        return this._name;
    }
    
    get color() {
        return this._color;
    }
    */
}

//Test voor drie vierkanten
const blackSquare = new Square(2, 5, 'A small black square with a surface area of 2x5.', 'black');
const greenSquare = new Square(5, 10, `A medium-small green square with a surface area of 5x10.`, 'green');
const orangeSquare = new Square(100, 100, `A big orange square with a surface area of 100x100.`, 'orange');

console.log("Part II: Squares")
console.log("Square descriptions \n" + blackSquare.name + "\n" + greenSquare.name + "\n" + orangeSquare.name + "\n ");

//Episode I - Part III: Rectangles
class Rectangle extends Shape {
    constructor(width, height, name, color) {
        super(name, color);
        this._width = width;
        this._height = height;
        //this._name = name;
        //this._color = color;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    /* Niet meer nodig, laat het achter als bewijs van deel 1 van opdracht 12
    get name() {
        return this._name;
    }

    get color() {
        return this._color;
    }
    */

    area() {
        return this._width * this._height;
    }
}

//Test voor rechthoeken
const blackRectangle = new Rectangle(2, 5, `A small black rectangle with a surface area of`, 'black');
const greenRectangle = new Rectangle(5, 10, `A medium-small green rectangle with a surface area of`, 'green');
const orangeRectangle = new Rectangle(100, 100, `A big orange rectangle with a surface area of`, 'orange');

console.log("Part III - Rectangles");
console.log("Surface Areas: \n" + blackRectangle.name, blackRectangle.area() + "\n" + greenRectangle.name, greenRectangle.area() + "\n" + orangeRectangle.name, orangeRectangle.area() + "\n ");

/*Bij deze heb ik deel 1 en 2 van Opdracht 12 af, ik denkt dat ik hem hier redelijk keurig heb afgemaakt.*/